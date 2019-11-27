const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

var webpackConfig = {
  entry: {
    main: './src/main.ts'
  }, resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src', 'dist'),
  },
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
    ],
    plugins: [
      new WebpackNotifierPlugin({
        alwaysNotify: true,
        title       : 'App Name',
        contentImage: path.join(__dirname, 'image.png')
      }),
    ]
  }
};
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
});
webpackConfig.plugins = [
  htmlWebpackPlugin,
];
module.exports = webpackConfig;
