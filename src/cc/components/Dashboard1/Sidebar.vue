<template>
  <div id="sidebar"
    :class="{ 'hidden': !showSidebar }"
    class="md:w-auto w-full bg-blue-500 pl-2 md:block overflow-y-auto"
  >
    <nav class="flex w-full">
      <div id="icons" class="my-2 w-full">
        <div class="py-2 pb-6 flex justify-between font-bold text-white w-full">
          <div class="flex">
            <div class="ml-2 mr-4">
              <Icon icon="logo"></Icon>
            </div>
            <div :class="{'w-48': showSidebar, 'w-0': !showSidebar}" class="overflow-hidden md:transition-width duration-300 whitespace-nowrap py-2 capitalize">brand name</div>
          </div>
          <button class="focus:outline-none ml-2 mr-4 md:hidden" @click="closeSidebar">
            <Icon icon="close"></Icon>
          </button>
        </div>
        <div
          @mouseover="sidebarHovered = true"
          @mouseleave="sidebarHovered = false"
        >
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="home" text="dashboard" :active="active" />
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="user-group" text="customers" :active="active" />
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="chat" text="message" :active="active" />
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="information-circle" text="help" :active="active" />
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="cog" text="settings" :active="active" />
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="lock-closed" text="password" :active="active" />
          <NavItem :sidebarHovered="sidebarHovered" :showText="showSidebar" icon="logout" text="sign out" :active="active" />
        </div>
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
    showSidebar: Boolean,
    closeSidebar: Function,
    active: String,
  },
  data() {
    return {
      sidebarHovered: false,
    }
  }
}
</script>
