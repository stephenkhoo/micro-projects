<template>
  <App>
    <Nav />
  </App>
</template>

<script>
import App from '../App.vue';
import Nav from './Nav.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    App
  },
  metaInfo: {
    title: 'Landing',
  }
}
</script>
