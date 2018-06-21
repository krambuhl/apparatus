const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  entry,
  outputDirectory,
  alias
} = require('../project-config')

module.exports = {
  devtool: 'source-map',
  entry,
  output: {
    path: outputDirectory,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.md'],
    modules: [path.resolve(__dirname, '../source'), 'node_modules'],
    alias
  },
  resolveLoader: {
    alias: {
      'apparatus-loader': path.resolve(__dirname, 'lib/apparatus-loader')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'apparatus-loader' },
          { loader: 'frontmatter-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  stats: {
    hash: false,
    version: false,
    modules: false,
    colors: true,
    errors: true,
    errorDetails: true
  }
}
