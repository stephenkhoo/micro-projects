<template>
  <div class="container mx-auto h-screen shadow flex flex-col">
    <div class="w-full py-4 bg-gray-100 text-center">{{ title }}</div>
    <div class="flex-1 overflow-auto py-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    title: String
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
