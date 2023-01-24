<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CardGrid from './components/CardGrid.vue'
</script>

<template>
  <h1 :style="{ backgroundColor: 'red' }">
  Welcome to Almog's Website!
  </h1>
  <card-grid/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
