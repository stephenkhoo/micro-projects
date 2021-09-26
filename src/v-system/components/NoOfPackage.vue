<template>
  <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
    {{ no_of_package }}
  </div>
  <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
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
