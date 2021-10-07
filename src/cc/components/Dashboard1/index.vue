<template>
  <div class="flex items-stretch h-screen">
    <Sidebar :closeSidebar="closeSidebar" :showText="showText" />
    <div id="main" class="flex-1 overflow-y-auto">
      <div class="px-2 my-2 flex justify-end md:justify-between items-center h-12 w-full">
        <button class="focus:outline-none" @click="toggleShowText">
          <Icon icon="menu"></Icon>
        </button>

        <div class="md:block hidden relative text-gray-600">
          <span class="absolute inset-y-0 left-0 pl-2 transform flex items-center">
            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="q" class="w-80 text-sm rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search here" autocomplete="off">
        </div>

        <div class="md:block hidden h-full">
          <Avatar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Icon from '../Icon.vue';
import Avatar from '../Avatar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar, Icon, Avatar
  },
  methods: {
    toggleShowText() {
      this.showText = !this.showText;
    },
    closeSidebar() {
      this.showText = false;
    }
  },
  data() {
    return {
      showText: true,
    }
  }
}
</script>
