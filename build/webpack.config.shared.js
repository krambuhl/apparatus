const path = require('path')
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
  }
}
