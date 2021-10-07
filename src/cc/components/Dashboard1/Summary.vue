<template>
  <div class="shadow-md whitespace-nowrap overflow-hidden flex justify-between items-center mx-2 md:my-2 px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md group hover:bg-blue-500">
    <div class="flex flex-row-reverse items-center md:block">
      <div class="text-blue-500 group-hover:text-white text-lg md:text-3xl">{{ value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
      <div class="text-gray-400 group-hover:text-white capitalize mr-2 md:mr-0 md:after:content-[''] after:content-[':']">
        {{ title }}
      </div>
    </div>
    <div class="text-gray-400">
      <div class="hidden md:block group-hover:text-white">
        <Icon :icon="icon" size="10"></Icon>
      </div>
      <div class="md:hidden group-hover:text-white">
        <Icon :icon="icon" size="6"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import faker from 'faker';
import Icon from '../Icon.vue';

export default {
  name: 'Summary',
  components: {
    Icon
  },
  data() {
    return {
      value: faker.random.number(),
    }
  },
  props: {
    type: String,
    title: String,
    icon: String
  }
}
</script>
