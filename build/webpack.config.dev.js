const merge = require('webpack-merge')
const config = require('./webpack.config.shared')
const { outputDirectory } = require('../project-config')

module.exports = merge(config, {
  devServer: {
    contentBase: outputDirectory,
    compress: true,
    historyApiFallback: true,
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
