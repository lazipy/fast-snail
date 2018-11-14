<template>
  <div class="row" :class="classes" :style="currentStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'BRow',
    props: {
      gutter: {
        type: Number,
        default: 0
      },
      justify: {
        type: String,
        validator: OneOf(['start', 'end', 'center', 'between', 'around'])
      },
      align: {
        type: String,
        validator: OneOf(['start', 'end', 'center'])
      }
    },
    computed: {
      classes () {
        return [
          this.justify ? `justify-content-${this.justify}` : '',
          this.align ? `align-items-${this.align}` : ''
        ];
      },
      currentStyle () {
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        };
      }
    },
    mounted () {
      this.$slots.default.forEach(item => {
        if (item.tag) {
          item.elm.style.paddingLeft = this.gutter / 2 + 'px';
          item.elm.style.paddingRight = this.gutter / 2 + 'px';
        }
      });
    }
  };
</script>
