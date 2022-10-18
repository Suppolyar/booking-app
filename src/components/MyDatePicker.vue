<script setup lang="ts">
import dayjs from 'dayjs';
import VDatepicker from '~/components/UI/VDatepicker.vue';
import VCounter from '~/components/UI/VCounter.vue';
import { ref, watch } from 'vue';
import BookingInfo from '~/components/BookingInfo.vue';

const dateFrom = ref<string>('');
const dateTo = ref<string>('');
const quantityOfDays = ref<number>(7);

// Here we set today's date and the end date (depending on our quantityOfDays)
const setInitialDate = () => {
  dateFrom.value = dayjs().format('YYYY-MM-DD');
  dateTo.value = dayjs().add(quantityOfDays.value, 'day').format('YYYY-MM-DD');
};
setInitialDate();

/*
The following describes the logic of the methods
for selecting the date and tracking the day counter
*/
const setNewDate = (fromOrTo: string) => {
  if (fromOrTo === 'from') {
    dateTo.value = dayjs(dateFrom.value).add(quantityOfDays.value, 'day').format('YYYY-MM-DD');
  }
  if (fromOrTo === 'to') {
    const dateOne = dayjs(dateFrom.value);
    const dateTwo = dayjs(dateTo.value);
    quantityOfDays.value = dateTwo.diff(dateOne, 'day');
  }
};

watch(quantityOfDays, (newVal) => {
  dateTo.value = dayjs(dateFrom.value).add(newVal, 'day').format('YYYY-MM-DD');
});
</script>

<template>
  <!--
  TODO
  I would have taken this component (bookingInfo.vue) to the MainPage itself,
  and I would have transferred the data to it via vuex/pinia,
  but since there was no task of creating state management in the task,
  I left it in this component and decided that I would transfer data to
  it props, but in another case I would have redone the
  logic of this component :)
  -->
  <BookingInfo
    :from="dateFrom"
    :to="dateTo"
    :quantity="quantityOfDays"
  />

  <div
    class="flex flex-col items-center justify-center
    gap-4 rounded p-4 shadow shadow-sky-700 md:flex-row"
  >
    <VDatepicker
      v-model="dateFrom"
      label="From"
      @change="setNewDate('from')"
    />
    <VCounter v-model="quantityOfDays" />
    <VDatepicker
      v-model="dateTo"
      label="To"
      @change="setNewDate('to')"
      :min="dateFrom"
    />
  </div>
</template>

<style scoped>

</style>
