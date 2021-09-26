<template>
  <a :href="`${publicPath}v-system/entry.html`" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Entry</a>
  <a :href="`${publicPath}v-system/report.html`" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Report</a>
  <a :href="`${publicPath}v-system/record.html`" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Record</a>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
