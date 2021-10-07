<template>
  <div :class="{ hidden: hideQuickNavigate }" class="lg:hidden fixed bottom-0 right-0 mr-3 mb-3">
    <button @click="navigateNext" class="focus:outline-none rounded-full h-12 w-12 flex justify-center items-center bg-blue-200">
      <Icon icon="map" />
    </button>
  </div>
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuickNavigateForMobile',
  components: {
    Icon,
  },
  props: {
    hideQuickNavigate: Boolean,
  },
  methods: {
    navigateNext() {
      if ([
        document.getElementById('summary'),
        document.getElementById('recent-orders'),
        document.getElementById('recent-customers')
      ].find(el => {
        let top = el.getBoundingClientRect().top;
        console.log(top, document.getElementById('main').scrollTop);
        if (top > 64) {
          document.getElementById('main').scrollTo({ top: top + document.getElementById('main').scrollTop });
          return el;
        }
      })) {
        return ;
      } else {
          document.getElementById('main').scrollTo({ top: top + document.getElementById('main').scrollTop });
      }
    }
  }
}
</script>
