const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/jetpage.ts',
  output: {
    path: path.join(__dirname, '/dev'),
    filename: 'jetpage.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
