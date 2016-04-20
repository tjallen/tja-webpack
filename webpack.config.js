var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [new htmlPlugin()],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
};
