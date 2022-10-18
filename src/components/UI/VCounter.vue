<script setup lang="ts">
import { ref, watch } from 'vue';

const emits = defineEmits(['update:modelValue']);

const count = ref(1);
const decrease = () => {
  if (count.value > 1) {
    count.value -= 1;
  }
};
const increase = () => {
  count.value += 1;
};

watch(count, (newVal) => {
  emits('update:modelValue', newVal);
});
</script>

<template>
  <div class="flex items-center gap-4">
    <button
      @click="decrease"
      :disabled="count === 1"
      class="btn-count"
    >
      -
    </button>
    <div class="rounded-full bg-slate-700 py-2 px-4 text-white">
      {{ count }}
    </div>
    <button
      @click="increase"
      class="btn-count"
    >
      +
    </button>
  </div>
</template>

<style scoped>
.btn-count {
  @apply rounded bg-slate-700 px-4 py-2.5 text-white
  disabled:opacity-30
  duration-300
}
</style>
