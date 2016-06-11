/* eslint-env es6:false */
/* eslint-disable no-var, global-require, object-shorthand, func-names */

var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({
      title: 'My app title',
      description: 'My app description',
      template: 'src/index.hbs',
    }),
    new CleanWebpackPlugin(['build/*'], {
      verbose: true,
      dry: false,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(css|scss|pcss)$/,
        loader: 'style-loader!css-loader?modules!postcss-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url'),
      require('postcss-cssnext'),
      // plugins
      require('postcss-simple-vars'),
      require('postcss-extend'),
      require('postcss-nested'),
      require('postcss-mixins'),
      // reporting
      require('postcss-browser-reporter'),
      require('postcss-reporter'),
    ];
  }
};
