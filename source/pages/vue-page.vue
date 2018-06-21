<template>
  <div class="root">
    <h1>This is a vue component!</h1>

    <p>You can use vue data and methods to make pages interactive.</p>

    <action-button @click="addCard">Add Card</action-button>
    <action-button @click="removeCard">Remove Card</action-button>

    <div class="grid">
      <media-card
        v-for="data in count"
        :key="data"
        title="Consectetur Lorem"
        href="#"
      >
        Labore officia exercitation et sit pariatur amet aliqua eu.
      </media-card>
    </div>
  </div>
</template>

<script>
import { ActionButton, MediaCard } from '@elements'
export default {
  components: {
    ActionButton,
    MediaCard
  },
  head: {
    title: 'Hello Vue'
  },
  data () {
    return {
      count: 3
    };
  },
  methods: {
    addCard () {
      this.count++;
    },
    removeCard () {
      this.count--;
    }
  }
}
</script>

<style scoped>
  .root {
    border: 2px solid black;
    margin: auto;
  }
</style>
