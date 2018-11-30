<template>
  <div class="layout" :class="classes">
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
    computed: {
      classes () {
        return [
          this.customClass,
          `layout-${this.direction}`
        ];
      }
    }
  };
</script>
