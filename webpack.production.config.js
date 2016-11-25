var config = require('./webpack.common.config')
var webpack = require('webpack');

config.plugins.unshift(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  })
)

module.exports = config
