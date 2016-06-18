import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// cleaner paths
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  srcImages: path.join(__dirname, 'src/images'),
  buildImages: path.join(__dirname, 'build/images'),
};

module.exports = {
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My app title',
      description: 'My app description',
      template: 'src/index.hbs',
    }),
    new CleanWebpackPlugin([
      PATHS.build,
    ], {
      verbose: true,
      dry: true,
    }),
/*    new CopyWebpackPlugin([
      { from: 'src/images', to: PATHS.buildImages },
    ]),*/
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
      {
        test: /\.(png|gif|jpg|eot|woff|svg|ttf)$/,
        loader: 'file?name=images/[name][hash:6].[ext]',
      },
    ],
  },
  postcss() {
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
