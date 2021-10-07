<template>
  <div id="recent-orders" class="w-full lg:flex-1 flex flex-col shadow-md px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md">
    <div class="w-full my-1 flex justify-between">
      <div class="text-blue-500 font-bold text-xl capitalize">recent orders</div>
      <button class="capitalize text-white py-1 px-2 bg-blue-500 rounded-md">view all</button>
    </div>
    <div class="flex-1 w-full overflow-y-auto">
      <div class="font-bold capitalize h-12 p-2 hidden sm:flex items-center space-x-2 hover:bg-blue-500 hover:text-white">
        <div class="flex-1">name</div>
        <div class="w-2/12">price</div>
        <div class="w-2/12">payment</div>
        <div class="w-3/12 text-right">status</div>
      </div>
      <Order v-for="i in 100" :key="i" />
    </div>
  </div>
</template>

<script>
import Order from './Order.vue';

export default {
  name: 'RecentOders',
  components: {
    Order
  }
}
</script>
