const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify-es');

const version = process.env.VERSION || require('../package.json').version;
const banner =
  '/*\n' +
  ' * Eagle-UI v' + version + '\n' +
  ' * author: Eagle Team\n' +
  ' * (c) 2018-9-19 ~ ' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + '\n' +
  ' * Released under the MIT License.\n' +
  ' */';

const inputOptions = {
  input: 'src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}
const outputOptions = {
  file: 'lib/eagle.esm.min.js',
  format: 'es',
  name: 'Eagle',
  banner
}

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);
}

build();
