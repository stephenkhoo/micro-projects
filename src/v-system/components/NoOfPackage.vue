<template>
  <div class="w-20 flex-grow-1 flex-shrink-0 text-right px-3 py-4 border-b">
    {{ no_of_package }}
  </div>
  <div class="w-20 flex-grow-1 flex-shrink-0 text-right px-3 py-4 border-b border-r border-gray-200">
  </div>
</template>

<script>
export default {
  name: 'NoOfPackage',
  props: {
    no_of_package: Number,
  }
}
</script>
