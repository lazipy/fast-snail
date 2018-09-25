const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  mode: 'production'
});
