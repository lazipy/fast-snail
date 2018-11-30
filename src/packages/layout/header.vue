<template>
  <header class="header" :style="currentStyle" :class="customClass">
    <div
      class="header-arrow"
      @click="toggleCollapse"
      v-if="collapseArrow !== null">
      <i class="icon-indent-left" v-if="collapseArrow === false"></i>
      <i class="icon-indent-right" v-else></i>
    </div>
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'SHeader',
    props: {
      height: {
        type: Number,
        default: 60
      },
      customClass: {
        type: String
      },
      fixed: {
        type: Boolean,
        default: false
      },
      collapseArrow: {
        type: [Boolean, null],
        default: null
      }
    },
    computed: {
      currentStyle () {
        return {
          height: this.height + 'px',
          lineHeight: this.height + 'px'
        };
      }
    },
    methods: {
      toggleCollapse () {
        this.$emit('collapse');
      }
    }
  };
</script>
