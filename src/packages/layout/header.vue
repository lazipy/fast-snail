<template>
  <header class="header" :style="currentStyle" :class="classes">
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
  import { OneOf } from '../../utils';

  export default {
    name: 'SHeader',
    props: {
      height: {
        type: Number,
        default: 60
      },
      theme: {
        type: String,
        default: 'light',
        validator: OneOf(['light', 'dark'])
      },
      customClass: {
        type: String
      },
      collapseArrow: {
        type: [Boolean, null],
        default: null
      }
    },
    computed: {
      classes () {
        return [
          this.customClass,
          `header-${this.theme}`
        ];
      },
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
