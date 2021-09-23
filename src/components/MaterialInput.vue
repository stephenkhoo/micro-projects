<template>
  <div class="group relative mx-auto max-w-[300px] my-8 w-1/2 flex justify-between border-b-2 focus-within:border-blue-500">
    <input placeholder=" "
      class="focus:outline-none mt-2 mb-1 px-1 bg-transparent"
      :id="name"
      :name="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
    <label class="placeholder:text-transparent origin-top-left group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:text-blue-500 absolute top-0 left-0 mt-2 mb-1 px-1 -z-1 duration-200 transition-transform" :for="name">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: 'MaterialInput',
  emits: ['update:value'],
  props: {
    placeholder: String,
    name: String,
    value: null
  }
}
</script>

<style scoped>
.-z-1 {
  z-index: -1;
}
input:not(:placeholder-shown) ~ label {
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.25rem;
  transform: var(--tw-transform);
}
</style>
