<template>
  <aside class="aside" :class="classes" :style="currentStyle">
    <s-scroller v-if="fixed" :scrollbar="false">
      <slot></slot>
    </s-scroller>
    <template v-else>
      <slot></slot>
    </template>
  </aside>
</template>

<script>
  import { OneOf } from '../../utils';
  import SScroller from '../scroller/main';

  export default {
    name: 'SAside',
    components: { SScroller },
    props: {
      theme: {
        type: String,
        default: 'light',
        validator: OneOf(['light', 'dark'])
      },
      collapse: {
        type: Boolean,
        default: false
      },
      customClass: {
        type: String
      },
      fixed: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 220
      }
    },
    computed: {
      classes () {
        return [
          this.customClass,
          `aside-${this.theme}`,
          this.collapse ? 'aside-collapse' : ''
        ];
      },
      currentStyle () {
        if (this.collapse) {
          return {
            width: '72px'
          };
        } else {
          return {
            width: this.width + 'px'
          };
        }
      }
    }
  };
</script>
