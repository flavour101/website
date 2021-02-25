const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('https://flavour101.com/api'),
        GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
      },
    }),
  ],
});
