import WebpackStripLoader from 'strip-loader';
import config from './webpack.config.babel.js';
import webpack from 'webpack';

const stripLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log'),
};

config.module.loaders.push(stripLoader);

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false, // avoid getting spammed with warnings about 3rd party libraries
    },
  }),
];

export default config;
