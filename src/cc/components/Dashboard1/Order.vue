<template>
  <div class="group h-12 p-2 flex items-center space-x-2 hover:bg-blue-500 hover:text-white">
    <div class="flex-1 group-hover:text-white">{{ name }}</div>
    <div class="w-2/12 group-hover:text-white">${{ price }}</div>
    <div class="w-2/12 group-hover:text-white">{{ payment }}</div>
    <div class="w-3/12 text-white flex justify-end">
      <span :class="`${status.bgColor} px-1 rounded-md capitalize`">{{ status.text }}</span>
    </div>
  </div>
</template>

<script>
import faker from 'faker';

export default {
  name: 'Customer',
  data() {
    return {
      name: faker.name.findName(),
      price: faker.random.number(),
      payment: ['Paid', 'Due'][faker.random.number() % 2],
      status: [{
        text: 'delivered',
        bgColor: 'bg-green-300',
      }, {
        text: 'pending',
        bgColor: 'bg-yellow-400',
      }, {
        text: 'return',
        bgColor: 'bg-red-500',
      }, {
        text: 'in progress',
        bgColor: 'bg-blue-400',
      }][faker.random.number() % 4],
    }
  }
}
</script>
