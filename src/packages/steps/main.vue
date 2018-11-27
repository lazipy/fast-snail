<template>
  <div class="steps" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';
  export default {
    name: 'SSteps',
    props: {
      active: {
        type: Number,
        default: 0
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator: OneOf(['horizontal', 'vertical'])
      },
      center: {
        type: Boolean,
        default: false
      },
      placement: {
        type: String,
        default: 'bottom',
        validator: OneOf(['bottom', 'right'])
      },
      dot: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'normal',
        validator: OneOf(['normal', 'small'])
      },
      finishStatus: {
        type: String,
        default: 'finish',
        validator: OneOf(['success', 'error', 'finish', 'process', 'wait'])
      },
      processStatus: {
        type: String,
        default: 'process',
        validator: OneOf(['success', 'error', 'finish', 'process', 'wait'])
      }
    },
    data () {
      return {
        items: []
      };
    },
    computed: {
      classes () {
        return [
          `steps-${this.size}`,
          this.direction === 'horizontal' ? `steps-${this.placement}` : 'steps-right',
          `steps-${this.direction}`,
          this.dot ? 'steps-dot' : '',
          this.center && this.direction === 'horizontal' && this.placement === 'bottom' ? 'steps-center' : ''
        ];
      }
    },
    provide () {
      return {
        finishStatus: this.finishStatus,
        processStatus: this.processStatus,
        dot: this.dot
      };
    },
    mounted () {
      this.items = this.$children;
    }
  };
</script>
