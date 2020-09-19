const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/rocketpage.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'rocketpage.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
