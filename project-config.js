const path = require('path')

module.exports.projectDirectory = path.resolve(__dirname, 'source')
module.exports.outputDirectory = path.resolve(__dirname, 'dist')

module.exports.entry = {
  assets: path.resolve(__dirname, 'source', 'assets.js'),
  bundle: path.resolve(__dirname, 'source', 'bundle.js')
}
