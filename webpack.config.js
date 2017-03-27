var path = require('path');
var webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const config = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  watch: true,

  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: {
        presets: ['es2015', 'react']
      }
    },{
      test: /.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },{
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBuildNotifierPlugin({
        title: "¡Webpack Ready!",
    }),
  ],

  devServer: {
    inline: true,
    contentBase: __dirname + '/build'
  }
};

module.exports = (config);