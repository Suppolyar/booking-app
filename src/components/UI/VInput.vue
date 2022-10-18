<script setup lang="ts">
import { ref, watch } from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps<{
  label?: string
  type: 'number' | 'date' | 'text'
}>();

const inputValue = ref();

watch(inputValue, (newVal) => {
  emits('update:modelValue', newVal);
});
</script>

<template>
  <label>
    <div class="text-sm text-slate-700">
      {{ props.label }}
    </div>
    <input
      v-model="inputValue"
      class="rounded border border-slate-500 px-4 py-2 placeholder:text-slate-300"
      :type="props.type"
    >
  </label>
</template>

<style scoped>

</style>
