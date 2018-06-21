---
title: Hello world
layout: page
components:
  ActionButton: '@elements/ActionButton/ActionButton'
  MediaCard: '@elements/MediaCard/MediaCard'
---

# Apparatus

A set of tools for creating design systems and component-based websites using Vue and Markdown.

You can write vue component demoes inline by importing them in frontmatter and writing vue script blocks.

```vue
---
variant: primary
text: Primary
---
<ActionButton :variant="variant">{{text}}</ActionButton>
```

Or, you can write html directly and it will be demoed inline.

```html
<div>
  Hello World!
</div>
```
