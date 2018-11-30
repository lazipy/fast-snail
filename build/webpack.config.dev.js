const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  devServer: {
    contentBase: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
    publicPath: '/',
    port: 7001,
    stats: 'minimal',
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    overlay: {
      errors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['应用服务地址：http://localhost:7001'],
      },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: [],
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../lib'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ],
  mode: 'development'
});
