<template>
  <div class="row" :class="classes" :style="currentStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'SRow',
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
    watch: {
      gutter () {
        this.updateItems();
      }
    },
    mounted () {
      this.updateItems();
    },
    methods: {
      updateItems () {
        this.$children.forEach(item => {
          if (item.$el && item.$options._componentTag === 'b-col') {
            item.$el.style.paddingLeft = this.gutter / 2 + 'px';
            item.$el.style.paddingRight = this.gutter / 2 + 'px';
          }
        });
      }
    }
  };
</script>
