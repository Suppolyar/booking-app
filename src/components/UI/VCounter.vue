<script setup lang="ts">
import { ref, watch } from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps<{
  modelValue: number
}>();

const count = ref<number>(props.modelValue);
const decrease = () => {
  if (count.value > 0) {
    count.value -= 1;
  }
};
const increase = () => {
  count.value += 1;
};

watch(count, (newVal) => {
  emits('update:modelValue', newVal);
});
watch(() => props.modelValue, (newVal) => {
  count.value = newVal;
});
</script>

<template>
  <div class="flex items-center gap-4">
    <button
      @click="decrease"
      :disabled="count === 0"
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
  hover:bg-sky-700
  duration-300
}
</style>
