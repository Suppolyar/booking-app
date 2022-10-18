<script setup lang="ts">
import { ref, watch } from 'vue';
import dayjs from 'dayjs';

const emits = defineEmits(['update:modelValue']);
const props = defineProps<{
  modelValue: any
  label?: string
  min?: string
}>();

const inputValue = ref(dayjs(props.modelValue).format('YYYY-MM-DD'));

watch(inputValue, (newVal) => {
  emits('update:modelValue', newVal);
});

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal;
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
      type="date"
      :min="props.min"
    >
  </label>
</template>

<style scoped>

</style>
