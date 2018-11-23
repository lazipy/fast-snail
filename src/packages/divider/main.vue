<template>
  <div class="devider" :class="classes">
    <span
      class="devider-text"
      v-if="type !== 'vertical' && $slots.default && $slots.default.length > 0">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'BDivider',
    props: {
      type: {
        type: String,
        default: 'horizontal',
        validator: OneOf(['horizontal', 'vertical'])
      },
      position: {
        type: String,
        default: 'center',
        validator: OneOf(['left', 'center', 'right'])
      },
      dashed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          `devider-${this.type}`,
          this.dashed ? 'devider-dashed' : '',
          `devider-${this.position}`
        ];
      }
    }
  };
</script>
