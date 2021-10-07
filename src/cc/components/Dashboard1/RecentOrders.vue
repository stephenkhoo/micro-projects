<template>
  <div class="w-full lg:flex-1 flex flex-col shadow-md px-4 pt-2 py-1 md:p-6 md:pb-5 rounded-md">
    <div class="w-full my-1 flex justify-between">
      <div class="text-blue-500 font-bold text-xl capitalize">recent orders</div>
      <button class="capitalize text-white py-1 px-2 bg-blue-500 rounded-md">view all</button>
    </div>
    <div class="flex-1 w-full overflow-y-auto"></div>
  </div>
</template>

<script>
export default {
  name: 'RecentOders',
}
</script>
