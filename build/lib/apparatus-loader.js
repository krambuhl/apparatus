const path = require('path')
const marked = require('marked')
const renderer = new marked.Renderer()

let uid = 0;

renderer.code = function (code, lang, escaped) {
  let demo = code

  uid++;

  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (lang === 'vue') {
    demo = `
      {
        templates: '${code}',
        components: {
          ${this.options.components}
        }
      }
    `
  }

  return `
    <div class="js-Demo">
      <script type="lang/${lang}" id="${lang}-${uid}">
        window["${lang}-${uid}"] = ${demo}
      </script>
      <div class="js-Demo-preview">
        <iframe src="/apparatus-demo.html" />
      </div>
      <pre class="js-Demo-code">
        <code ${ lang ? `data-lang="${this.options.langPrefix}${escape(lang, true)}"` : '' }>
          ${escaped ? code : escape(code, true)}
        </code>
      </pre>
    </div>
  `
}

module.exports = function ({ attributes, body }) {
  this.async()

  const vueComponents = attributes.components || {}
  const components =
    Object.keys(vueComponents)
      .map((name) => {
        this.loadModule(vueComponents[name], (err, source, sourceMap, module) => {
          this.addDependency(vueComponents[name])
        })

        // loaderUtils.stringifyRequest(this, path)
        // return `${name}: require("${path}").default`
        return `${name}: require("path").default`
      })
      .join(',\n')

      const renderedMarkdown = marked(body, {
        renderer,
        gfm: true,
        components
      })

  this.callback(null, renderedMarkdown)
  // return new Buffer(renderedMarkdown)
}
