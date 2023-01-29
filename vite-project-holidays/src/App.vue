<script setup>
import { ref } from "vue";

// import HelloWorld from "./components/HelloWorld.vue";
import DateInput from "./components/DateInput.vue";
import CardGrid from "./components/CardGrid.vue";

const isRange = ref(true);

function dateHandler(val) {
  console.log({ val });
}
</script>

<template>
  <h1>Hebrew Holidays</h1>
  {{ isRange ? "Range" : "Single" }}
  <button @click="isRange = !isRange">toggle range mode</button>
  <date-input :isRange="isRange" @emitDates="dateHandler" />
  <card-grid />
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
