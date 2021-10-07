<template>
  <div class="flex items-stretch h-screen m-auto max-w-screen-2xl w-full bg-white overflow-hidden">
    <Sidebar :active="active" :closeSidebar="closeSidebar" :showText="showText" />
    <div id="main" class="flex-1 flex flex-col overflow-y-auto">
      <!-- Top bar -->
      <div class="px-6 my-2 flex shadow-md md:shadow-none justify-between items-center h-12 w-full">
        <div class="md:hidden">
          <div class="py-2 flex items-center justify-between font-bold w-full">
            <div class="flex">
              <div class="ml-2 mr-4">
                <Icon icon="logo"></Icon>
              </div>
              <div class="py-2 capitalize">brand name</div>
            </div>
          </div>
        </div>
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
      <!-- End of top bar -->

      <!-- Summary Display -->
      <div id="summary" class="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 text-black px-4">
        <Summary title="daily views" icon="eye" />
        <Summary title="sales" icon="shopping-cart" />
        <Summary title="comments" icon="chat-alt2" />
        <Summary type="money" title="earning" icon="cash" />
      </div>
      <!-- End of Summary Display -->
      <div class="min-h-[400px] flex-1 flex flex-col lg:flex-row items-stretch space-y-4 lg:space-y-0 lg:space-x-4 px-6 my-4">
        <RecentOrders />
        <RecentCustomers />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Summary from './Summary.vue';
import RecentOrders from './RecentOrders.vue';
import RecentCustomers from './RecentCustomers.vue';
import Icon from '../Icon.vue';
import Avatar from '../Avatar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar, Icon, Avatar, Summary, RecentOrders, RecentCustomers
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
      active: 'dashboard',
    }
  }
}
</script>
