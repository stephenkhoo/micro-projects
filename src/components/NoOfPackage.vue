<template>
  <div class="w-32 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
    {{ no_of_package }}
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
