<template>
  <span class="badge" v-if="!hidden">
    <slot></slot>
    <span class="badge-value" :class="classes" :style="customStyle">
      <span v-if="mold !== 'dot'">{{ currentValue }}</span>
    </span>
  </span>
</template>

<script>
  import { themes, OneOf } from '../../utils';

  export default {
    name: 'BBadge',
    props: {
      type: {
        type: String,
        default: 'danger',
        validator: OneOf(themes)
      },
      mold: {
        type: String,
        default: 'pill',
        validator: OneOf(['basic', 'pill', 'dot'])
      },
      value: [String, Number],
      customStyle: {
        type: Object,
        default: () => {}
      },
      max: {
        type: Number,
        default: 99
      },
      hidden: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentValue () {
        return this.value > this.max ? `${this.max}+` : this.value;
      },
      classes () {
        return [
          `badge-${this.type}`,
          `badge-${this.mold}`,
          this.$slots.default ? 'is-fixed' : ''
        ];
      }
    }
  };
</script>
