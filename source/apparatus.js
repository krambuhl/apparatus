// import Apparatus from 'apparatus'
import '@lib/vue-config.js'

const getContextFiles = (context) =>
  context.keys().map((path) => {
    const module = context(path)
    return {
      path,
      contents: module.default || module
    }
  })

const groupByFolder = (fileList) =>
  fileList.reduce((groups, file) => {
    const { path } = file
    const folder = path.substr(0, path.lastIndexOf('/'))
    const index = groups.findIndex(group => group.folder === folder)

    if (index >= 0) {
      groups[index].files.push(file)
    } else {
      groups.push({
        folder,
        files: [file]
      })
    }

    return groups
  }, [])

const output = [
  ...groupByFolder([
    ...getContextFiles(require.context('./elements/', true, /\.(md)$/))
  ]),
  ...getContextFiles(require.context('./pages/', true, /\.(html|md)$/))
]
console.log('i tried', output)

export default output
