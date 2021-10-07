<template>
  <div id="sidebar" :class="{ 'hidden': !showText }" class="md:w-auto w-full bg-blue-500 pl-2 md:block">
    <nav class="flex w-full">
      <div id="icons" class="my-2 w-full">
        <div class="py-2 pb-6 flex justify-between text-bold text-white cursor-pointer w-full">
          <div class="flex">
            <div class="ml-2 mr-4">
              <Icon icon="logo"></Icon>
            </div>
            <div :class="{'w-48': showText, 'w-0': !showText}" class="overflow-hidden md:transition-width duration-200 whitespace-nowrap py-2 capitalize">brand name</div>
          </div>
          <div class="ml-2 mr-4 md:hidden" @click="closeSidebar">
            <Icon icon="close"></Icon>
          </div>
        </div>
        <NavItem :showText="showText" icon="home" text="dashboard" />
        <NavItem :showText="showText" icon="user-group" text="customers" />
        <NavItem :showText="showText" icon="chat" text="message" />
        <NavItem :showText="showText" icon="information-circle" text="help" />
        <NavItem :showText="showText" icon="cog" text="settings" />
        <NavItem :showText="showText" icon="lock-closed" text="password" />
        <NavItem :showText="showText" icon="logout" text="sign out" />
      </div>
    </nav>
  </div>
</template>

<script>
import Icon from '../Icon.vue';
import NavItem from '../NavItem.vue';

export default {
  name: 'Sidebar',
  components: {
    Icon, NavItem
  },
  props: {
    showText: Boolean,
    closeSidebar: Function,
  }
}
</script>
