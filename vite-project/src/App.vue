<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CardGrid from './components/CardGrid.vue'
import DatePicker from './components/DatePicker.vue';
import { ref } from 'vue';

const parentNum = ref(null);

function increaseByParent(){
  parentNum.value++;
  
}
</script>

<template>
  <h1 :style="{ backgroundColor: 'red' }">
  Welcome to Almog's Website!
  </h1>
  <date-picker @increaseBy="increaseByParent" :parentNum="parentNum"/>
  <!-- <card-grid/> -->
  {{parentNum}}
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
