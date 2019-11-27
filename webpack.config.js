const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

var webpackConfig = {
  module: {
    rules: [
    {
      test   : /\.scss$/,
      loader : 'postcss-loader',
      options: {
        ident  : 'postcss',
        plugins: () => [
          require('postcss-short')(),
        ]
      }
    },
    {
      test: /\.ts$/,
      use: ['ts-loader', 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.css$/,
      use: [
        'to-string-loader', 'css-loader',
      ],
    },
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title       : 'App Name',
      contentImage: path.join(__dirname, 'image.png')
    }),
  ]
};

module.exports = webpackConfig;
