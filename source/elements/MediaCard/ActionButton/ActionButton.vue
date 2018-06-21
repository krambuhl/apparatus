<template>
  <button :href="href" class="root" :class="[variant]"><slot /></button>
</template>

<script>
export default {
  props: {
    href: {
      type: String
    },
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
  .root {
    border: 2px solid black;
    padding: 0.5em;
    font-size: 1rem;
  }
</style>
