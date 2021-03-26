const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/jetpage.ts',
  output: {
    path: path.join(__dirname, '/dist'),
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
};
