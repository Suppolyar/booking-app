<script setup lang="ts">
const props = defineProps<{
  from?: string
  to?: string,
  quantity?: number
}>();
</script>

<template>
  <div
    class="mx-auto mb-5 flex flex-col justify-center
    gap-2 text-left font-medium text-slate-700 sm:flex-row"
  >
    <div class="rounded p-4 shadow shadow-sky-700">
      <div>Start of your weekend:</div>
      <div class="font-bold text-sky-700">
        {{ props.from }}
      </div>
    </div>
    <div class="rounded p-4 shadow shadow-sky-700">
      <div>Nights:</div>
      <div class="font-bold text-sky-700">
        {{ props.quantity }}
      </div>
    </div>
    <div class="rounded p-4 shadow shadow-sky-700">
      <div>End of your weekend:</div>
      <div class="font-bold text-sky-700">
        {{ props.to }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
