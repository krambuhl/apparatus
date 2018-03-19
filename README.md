# Apparatus

A set of tools for creating design systems and component-based websites using Vue and Markdown.

## Tasks

### Dev Mode

```
npm run dev
```

### Build

```
npm run build
```

### Production Mode

```
npm run build:prod
```

### Start Static Server

```
npm start
```

### Run Tests

```
npm test
```

## Examples

### Presentational Components

```vue
<template>
  <div class="root">
    <slot name="media" />
    <h3>{{title}}</h3>
    <slot />
    <a :href="href">Buy</a>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  props: {
    title: {
      type: String
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .root { }
</style>
```

### Container Components

```vue
<template>
  <div class="root">
    <div
      v-for="item in productList"
      class="item"
    >
      <product-card
        :title="item.title"
        :href="item.href"
      >
        <slot name="media">
          <img :src="item.src" :alt="item.alt" />
        </slot>

        {{item.description}}
      </product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from '@components/ProductCard'
export default {
  name: 'product-grid',
  components: {
    ProductCard
  },
  data () {
    return {
      productList: [ ... ]
    }
  }
}
</script>

<style scoped>
  .root { }
  .item { }
</style>
```

## License

MIT 2018
