<template>
  <div class="loading-container" v-show="visible">
    <div class="loader" ref="loader" :class="classes">
      <slot>
        <svg class="circular" viewBox="25 25 50 50" :style="currentStyle">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
        <span class="loader-text" v-if="text">{{ text }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'SLoading',
    props: {
      delay: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 40
      },
      text: String,
      position: {
        type: String,
        default: 'right',
        validator: OneOf(['left', 'right', 'top', 'bottom'])
      }
    },
    data () {
      return {
        visible: false
      };
    },
    computed: {
      classes () {
        return [
          `position-${this.position}`
        ];
      },
      currentStyle () {
        return {
          width: this.size + 'px',
          height: this.size + 'px'
        };
      }
    },
    mounted () {
      setTimeout(() => {
        this.visible = true;
      }, this.delay);
    }
  };
</script>
