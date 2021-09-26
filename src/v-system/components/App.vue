<template>
  <div class="container mx-auto h-screen shadow flex flex-col">
    <div class="w-full py-4 bg-gray-100 text-center flex flex-start">
      <div v-if="home">
        <a :href="`${publicPath}/v-system`" class="text-center my-2 mx-auto w-32 font-bold py-2 px-4 rounded">Home</a>
      </div>
      <span class="mx-4">
        {{ title }}
      </span>
    </div>
    <div class="flex-1 overflow-auto my-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    title: String,
    home: Boolean,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
