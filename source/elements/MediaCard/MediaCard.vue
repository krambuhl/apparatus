<template>
  <div class="root">
    <slot name="media" />
    <h3>{{title}}</h3>
    <slot />
    <ActionButton v-if="href" :href="href">Read More</ActionButton>
  </div>
</template>

<script>
import { ActionButton } from '@elements'
export default {
  components: {
    ActionButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  }
}
</script>

<style scoped>
  .root {
    border: 1px solid #ccc;
    padding: 1em;
  }
</style>
