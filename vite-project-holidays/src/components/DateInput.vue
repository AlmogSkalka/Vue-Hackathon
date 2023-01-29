<template>
  <div class="date-input">Date Input</div>
  <v-date-picker v-model="dateRange" :is-range="props.isRange" />
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({ isRange: Boolean });
const emit = defineEmits(["emitDates"]);

const dateRange = ref({
  //   start: new Date(2023, 0, 26),
  //   end: new Date(2023, 0, 29),
});

watch(
  () => dateRange.value,
  (val, oldVal) => {
    // console.log({
    //   newVal: JSON.stringify(val),
    //   oldVal: JSON.stringify(oldVal),
    // });
    if (val.start && val.end) {
      emit("emitDates", [val.start, val.end]);
      return;
    }
    emit("emitDates", [val, val]);
    /* ... */
  },
  //{ deep: true }
);
</script>
