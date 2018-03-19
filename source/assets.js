const requiredAll = context => context.keys().map(context)

export const pages = requiredAll(require.context('./pages/', true, /\.(html|md|vue)$/))
export const elements = requiredAll(require.context('./elements/', true, /\.(html|md|vue)$/))
