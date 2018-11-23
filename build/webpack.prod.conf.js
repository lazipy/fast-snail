const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(commonConfig, {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    library: "snail",
    libraryTarget: "umd",
    filename: "snail.min.js",
    umdNamedDefine: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/styles/font'),
        to: path.resolve(__dirname, '../lib/static/font'),
        ignore: ['.*']
      }
    ])
  ],
  mode: 'production'
});
