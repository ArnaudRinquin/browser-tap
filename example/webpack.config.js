var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      tape: 'browser-tap',
      sinon: 'sinon/pkg/sinon', // https://github.com/webpack/webpack/issues/177#issuecomment-185718237
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [
      /sinon/
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      }
    ]
  },
  // these are all enzyme specific
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
      }
    })
  ]
};

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci') {
  module.exports.entry.push('webpack-dev-server/client?http://0.0.0.0:8080');
  module.exports.entry.push('webpack/hot/only-dev-server');
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }))
}
