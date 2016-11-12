var path = require('path');
var webpack = require('webpack');
var publicPath = 'http://localhost:3000/';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'web/static/css/app.less'),
    path.join(__dirname, 'web/static/js/entry.jsx'),
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, '/priv/static'),
    filename: 'js/index.bundle.js',
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
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract("style", "css!less")
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'web/static/js',
    ],
    extensions: ['', '.js', '.jsx', '.css', '.less'],
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
