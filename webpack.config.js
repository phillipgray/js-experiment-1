var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'important.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inlineSource: '.js'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};
