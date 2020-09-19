const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/rocketpage.js',
  output: {
    path: path.join(__dirname, '/dev'),
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
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
