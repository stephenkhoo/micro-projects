<template>
  <div class="h-full overflow-hidden p-1">
    <img class="rounded-full h-full" :src="avatar_url" alt="">
  </div>
</template>

<script>
import faker from 'faker';

export default {
  name: 'Avatar',
  data() {
    return {
      avatar_url: faker.image.avatar(),
    }
  }
}
</script>
