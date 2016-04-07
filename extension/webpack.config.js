var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'dist/js/contentScript': './src/js/contentScript.js',
    'dist/js/panel': './src/js/panel/index.js',
    'dist/js/background': './src/js/background/index.js',
    'public/app': [
        './src/js/tapResult/app.js'
    ],
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : undefined,
  resolve: {
    root: [
      './src'
    ],
    extensions: ['', '.js'],
  },

  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true
  },

  output: {
    path: '.',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
      }
    })
  ]
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.entry['public/app'].push('webpack-dev-server/client?http://0.0.0.0:8080');
  module.exports.entry['public/app'].push('webpack/hot/only-dev-server');
}
