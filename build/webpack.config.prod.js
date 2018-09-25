const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const commonConfig = require('./webpack.config.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new VueLoaderPlugin(),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false,
    //       drop_debugger: true,
    //       drop_console: true
    //     }
    //   },
    //   sourceMap: true,
    //   parallel: true
    // }),
    // new ExtractTextPlugin({
    //   filename: path.resolve(__dirname, '../dist/static/css/[name].[contenthash].css'),
    //   allChunks: true,
    // }),
    // new OptimizeCSSPlugin({
    //   cssProcessorOptions: {
    //     safe: true,
    //     map: { inline: false }
    //   }
    // }),
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
    new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'app',
    //   async: 'vendor-async',
    //   children: true,
    //   minChunks: 3
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../examples/static'),
    //     to: '../dist/static',
    //     ignore: ['.*']
    //   }
    // ])
  ],
  mode: 'production'
});
