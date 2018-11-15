<template>
  <i :class="`icon-${type}`" :style="currentStyle"></i>
</template>

<script>
  import { OneOf } from '../../utils';
  import types from '../../utils/icon';

  export default {
    name: 'BIcon',
    props: {
      type: {
        type: String,
        required: true,
        validator: OneOf(types)
      },
      size: String,
      color: String
    },
    computed: {
      currentStyle () {
        return {
          color: this.color,
          fontSize: this.size + 'px'
        };
      }
    }
  };
</script>
