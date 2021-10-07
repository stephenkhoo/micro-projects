<template>
  <div class="group h-16 p-2 flex items-center space-x-2 hover:bg-blue-500 hover:text-white">
    <Avatar />
    <div class="flex-1">
      <div class="font-bold">{{ name }}</div>
      <div class="group-hover:text-white text-gray-400 text-xs">{{ location }}</div>
    </div>
  </div>
</template>

<script>
import Avatar from '../Avatar.vue';
import faker from 'faker';

export default {
  name: 'Customer',
  components: {
    Avatar
  },
  data() {
    return {
      name: faker.name.findName(),
      location: faker.address.country(),
    }
  }
}
</script>
