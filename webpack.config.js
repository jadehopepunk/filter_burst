var path = require('path');
var config = require('./webpack.common.config')
var webpack = require('webpack');

var publicPath = 'http://localhost:3000/';

config.devtool = 'source-map'

config.entry.push(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server'
)

config.output.publicPath = publicPath

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

config.devServer = {
  hot: true,
  port: 3000,
  historyApiFallback: true,
}

module.exports = config
