export const pages = [
  require.context('./pages/', true, /\.(html|md|vue)$/)
]

export const components = [
  require.context('./elements/', true, /\.(md|vue)$/)
]
