var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'important.js',
    path: path.resolve(__dirname, 'dist')
  }
};
