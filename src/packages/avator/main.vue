<template>
  <div class="avator" :style="currentStyle" :class="classes">
    <img class="avator-image" :src="src" :alt="nativeAlt">
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'SAvator',
    props: {
      type: {
        type: String,
        default: 'circle',
        validator: OneOf(['circle', 'round', 'square'])
      },
      size: {
        type: Number,
        default: 48
      },
      src: {
        type: String,
        required: true
      },
      border: {
        type: Boolean,
        default: false
      },
      nativeAlt: {
        type: String,
        default: '头像'
      },
      color: {
        type: String,
        default: 'transparent'
      }
    },
    computed: {
      classes () {
        return [
          `avator-${this.type}`,
          this.border ? 'border' : ''
        ];
      },
      currentStyle () {
        return {
          width: this.size + 'px',
          height: this.size + 'px',
          backgroundColor: this.color
        };
      }
    }
  };
</script>
