const path = require('path')

module.exports.projectDirectory = path.resolve(__dirname, 'source')
module.exports.outputDirectory = path.resolve(__dirname, 'dist')

module.exports.entries = {
  main: 'main.js'
}
