const merge = require('webpack-merge')
const config = require('./webpack.config.shared')
const { outputDirectory } = require('../project-config')

module.exports = merge(config, {
  devServer: {
    publicPath: '/',
    contentBase: outputDirectory,
    compress: true,
    historyApiFallback: {
      rewrites: [{ from: /.*\.html/, to: '/index.html' }]
    },
    hot: true,
    stats: {
      hash: false,
      version: false,
      modules: false,
      colors: true,
      errors: true,
      errorDetails: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
})
