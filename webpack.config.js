var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './app/scripts/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'eyyy a custom title!',
      template: 'app/index.hbs',
    }),
    new CleanWebpackPlugin(['build/*'], {
      verbose: true, 
      dry: false
    })
  ],
  
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      }
    ],
  },
  postcss: function () {
    return [
      require('autoprefixer'), 
      require('postcss-import'),
      require('postcss-simple-vars'),
      require('postcss-extend'),
      require('postcss-nested'),
      require('postcss-mixins'),
    ];
  }
};
