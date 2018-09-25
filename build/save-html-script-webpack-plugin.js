const fs = require('fs');
const path = require('path');

/**
 * 保存index.html中原有的script标签
 * @param {id} options
 */

function SaveHtmlScriptPlugin(options) {
  this.options = options;
}

SaveHtmlScriptPlugin.prototype.apply = function (compiler) {
  const paths = getScriptPath(this.options.id);
  compiler.plugin('compilation', function (compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      for (let path of paths) {
        htmlPluginData.assets.js.unshift(path);
      }
      callback(null, htmlPluginData);
    });
  });
};

const reg = /<script\b.*?(?:\bsrc\s?=\s?([^>]*))?>(.*?)<\/script>/ig;

function getScriptPath (id) {
  let paths = [];
  const htmlString = readHtmlString(id);
  const scriptArray = getScript(htmlString);
  for (let script of scriptArray) {
    if (script && script.length > 0 && script.match(reg)[1] && script.match(reg)[1] !== undefined) {
      paths.push(script.match(reg)[1]);
    }
  }
  return paths;
}

function readHtmlString (id) {
  const htmlString = fs.readFileSync(path.resolve(__dirname, '../index.html'), { encoding: 'utf8' });
  return htmlString.split(id)[1];
}

function getScript (string) {
  return string.match(reg) || [];
}

module.exports = SaveHtmlScriptPlugin;
