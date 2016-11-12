var path = require('path');
var webpack = require('webpack');
var publicPath = 'http://localhost:3000/';

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'web/static/js/entry.jsx'),
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, '/priv/static/js'),
    filename: 'index.bundle.js',
    publicPath: publicPath,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'web/static/js'),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'web/static/js',
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
      phoenix: path.join(__dirname, '/deps/phoenix/priv/static/phoenix.js'),
    },
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
};
