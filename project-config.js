const path = require('path')

const projectDirectory = path.resolve(__dirname, 'source')

module.exports.outputDirectory = path.resolve(__dirname, 'dist')

module.exports.entry = {
  apparatus: path.resolve(__dirname, 'source/apparatus.js')
}

module.exports.alias = {
  '@elements': path.resolve(projectDirectory, 'elements'),
  '@layouts': path.resolve(projectDirectory, 'layouts'),
  '@pages': path.resolve(projectDirectory, 'pages'),
  '@static': path.resolve(projectDirectory, 'static'),
  '@lib': path.resolve(projectDirectory, 'lib')
}
