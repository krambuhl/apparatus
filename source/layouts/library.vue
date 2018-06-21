<template>
  <div class="Library">
    <slot />
  </div>
</template>

<script>
  export default {
    head: {
      title: 'This is a library page!',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700' }
      ]
    }
  }
</script>

<style scoped>
  .Library {

  }
</style>
