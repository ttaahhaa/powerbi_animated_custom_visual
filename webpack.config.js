'use strict';

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/visual-minimal.ts',
  output: {
    path: path.resolve(__dirname, '.tmp', 'drop'),
    filename: 'visual.js',
    libraryTarget: 'umd',
    library: 'animatedCalloutVisual'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.less']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};
