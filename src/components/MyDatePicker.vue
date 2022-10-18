<script setup lang="ts">
import VInput from '~/components/UI/VInput.vue';
import VCounter from '~/components/UI/VCounter.vue';
import { ref } from 'vue';

const dateFrom = ref('');
const dateTo = ref('');
const quantityOfDays = ref(1);

</script>

<template>
  <div class="flex items-end gap-4">
    <VInput
      v-model="dateFrom"
      label="From"
      type="date"
    />
    <VCounter
      v-model="quantityOfDays"
    />
    <VInput
      v-model="dateTo"
      label="To"
      type="date"
    />
  </div>
</template>

<style scoped>

</style>
