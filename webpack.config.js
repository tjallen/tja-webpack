var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlPlugin()],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
};
