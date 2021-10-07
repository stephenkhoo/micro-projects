<template>
  <div :class="{
    'bg-white text-blue-500': active == text && !sidebarHovered,
    'hover:bg-white hover:text-blue-500': active != text || sidebarHovered,
  }" class="group relative py-2 rounded-tl-full rounded-bl-full flex text-bold text-white cursor-pointer">
    <div class="ml-2 mr-4">
      <Icon :icon="icon"></Icon>
    </div>
    <div :class="{'w-48': showText, 'w-0': !showText}" class="overflow-hidden whitespace-nowrap md:transition-width duration-200 py-2 capitalize">{{ text }}</div>
    <svg :class="{
      'md:block': active == text && !sidebarHovered,
      'md:group-hover:block': active != text || sidebarHovered,
    }" preserveAspectRatio="xMaxYMin meet" viewBox="0 0 50 50" class="absolute h-full right-0 bottom-full pointer-events-none hidden">
      <path d="M 50 25
               A 25 25, 0, 0, 1, 25 50
               L 50 50 Z" fill="white"/>
    </svg>
    <svg :class="{
      'md:block': active == text && !sidebarHovered,
      'md:group-hover:block': active != text || sidebarHovered,
    }" preserveAspectRatio="xMaxYMax meet" viewBox="0 0 50 50" class="absolute h-full right-0 top-full pointer-events-none hidden">
      <path d="M 25 0
               A 25 25, 0, 0, 1, 50 25
               L 50 0 Z" fill="white"/>
    </svg>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'NavItem',
  components: {
    Icon
  },
  props: {
    icon: String,
    text: String,
    showText: Boolean,
    active: String,
    sidebarHovered: Boolean,
  },
}
</script>
