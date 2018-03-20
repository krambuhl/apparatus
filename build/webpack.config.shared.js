const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  projectDirectory,
  outputDirectory,
  entry
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
    alias: {
      '@elements': path.resolve(projectDirectory, 'elements'),
      '@layouts': path.resolve(projectDirectory, 'layouts'),
      '@pages': path.resolve(projectDirectory, 'pages'),
      '@static': path.resolve(projectDirectory, 'static')
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
        loader: 'vue-markdown-loader!frontmatter-loader'
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
    errorDetails: true,
    children: false
  }
}
