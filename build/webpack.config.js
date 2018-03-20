const merge = require('webpack-merge')
const config = require('./webpack.config.shared')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
})
