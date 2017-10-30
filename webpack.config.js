const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
  entry: ['./js/script.js', './scss/styles.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist')
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: function() {
                return [autoprefixer]
              }
            }
          },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'url-loader',
      options: {
        limit: 2048,
        name: './[name].[ext]',
      },
    }]
  }
};

module.exports = config;