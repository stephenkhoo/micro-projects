<template>
  <div class="mx-auto max-w-[300px] my-8 w-1/2 flex justify-between border-b-2 focus-within:border-blue-500">
    <label class="mt-2 mb-1 px-1 flex-1 flex justify-between" :for="name">
      <span>{{ placeholder }}</span>
      :
    </label>
    <input
      placeholder=" "
      class="w-1/2 focus:outline-none mt-2 mb-1 px-4"
      :id="name"
      :name="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  emits: ['update:value'],
  props: {
    placeholder: String,
    name: String,
    value: null
  }
}
</script>
