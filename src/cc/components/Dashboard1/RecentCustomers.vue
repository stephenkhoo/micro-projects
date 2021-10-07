<template>
  <div id="recent-customers" class="w-full lg:w-80 flex flex-col shadow-md px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md">
    <div class="w-full my-1">
      <div class="text-blue-500 font-bold text-xl capitalize">recent customers</div>
    </div>
    <div class="flex-1 w-full overflow-y-auto">
      <Customer v-for="i in 100" :key="i"/>
    </div>
  </div>
</template>

<script>
import Customer from './Customer.vue';

export default {
  name: 'RecentCustomers',
  components: {
    Customer
  }
}
</script>
