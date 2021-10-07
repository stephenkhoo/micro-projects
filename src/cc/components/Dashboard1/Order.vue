<template>
  <div class="group sm:h-12 p-2 flex flex-col sm:flex-row sm:items-center sm:space-x-2 hover:bg-blue-500 hover:text-white border-b border-b-gray-300">
    <div class="flex sm:block sm:flex-1 group-hover:text-white">
      <div class="sm:hidden font-bold w-24 inline-block after:content-[':']">Name</div>
      <div class="flex-1">{{ name }}</div>
    </div>
    <div class="flex sm:block sm:w-2/12 group-hover:text-white">
      <div class="sm:hidden font-bold w-24 inline-block after:content-[':']">Price</div>
      <div class="flex-1">${{ price }}</div>
    </div>
    <div class="flex sm:block sm:w-2/12 group-hover:text-white">
      <div class="sm:hidden font-bold w-24 inline-block after:content-[':']">Payment</div>
      <div class="flex-1">{{ payment }}</div>
    </div>
    <div class="sm:w-3/12 text-white flex sm:justify-end">
      <div class="sm:hidden text-black font-bold w-24 inline-block after:content-[':']">Status</div>
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
