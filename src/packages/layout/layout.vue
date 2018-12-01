<template>
  <div class="layout" :class="classes" :style="currentStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'SLayout',
    props: {
      direction: {
        type: String,
        default: 'row',
        validator: OneOf(['row', 'column'])
      },
      customClass: {
        type: String
      }
    },
    data () {
      return {
        aside: null,
        header: null
      };
    },
    computed: {
      classes () {
        return [
          this.customClass,
          `layout-${this.direction}`
        ];
      },
      currentStyle () {
        return {
          left: this.aside ? (!this.aside.collapse ? this.aside.width + 'px' : '72px') : 0,
          top: this.header && this.header.fixed ? this.header.height + 'px' : 0
        };
      }
    },
    mounted () {
      this.$parent.$children.forEach(child => {
        if (child.$options._componentTag === 's-aside') {
          this.aside = child;
          return;
        }
      });
      this.$children.forEach(child => {
        if (child.$options._componentTag === 's-header') {
          this.header = child;
          return;
        }
      });
    }
  };
</script>
