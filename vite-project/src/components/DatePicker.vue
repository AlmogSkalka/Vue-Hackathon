<template>
<div class="date-picker">
    <!-- <h1>{{ number }}</h1> -->
    <h1>{{ props.parentNum }}</h1>

    
    <!-- <button @click='add'>Add</button>
    <button @click='sub'>Substruct</button> -->
    
    <button @click="$emit('increaseBy')">Add</button>
</div>
</template>

<style lang="scss" scoped></style>

<script setup>
import {ref} from "vue";

const props = defineProps({
    parentNum: Number
})

</script>