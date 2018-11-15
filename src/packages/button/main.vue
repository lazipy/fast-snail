<template>
  <button :autofocus="autofocus" @click="handleClick" :type="nativeType" class="btn" :class="classes" :disabled="disabled">
    <i v-if="loading" class="icon-spin4 spinner"></i>
    <slot></slot>
  </button>
</template>

<script>
  import { themes, OneOf } from '../../utils';

  export default {
    name: 'BButton',
    props: {
      type: {
        type: String,
        default: 'primary',
        validator: OneOf([...themes, 'link'])
      },
      block: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        validator: OneOf(['large', 'small'])
      },
      round: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      nativeType: {
        type: String,
        validator: OneOf(['button', 'submit', 'reset'])
      },
      navigator: String
    },
    computed: {
      classes () {
        return [
          `btn-${this.type}`,
          this.block ? 'btn-block' : '',
          this.plain ? 'btn-plain' : '',
          this.disabled ? 'btn-disabled' : '',
          this.loading ? 'is-loading' : '',
          this.size ? `btn-${this.size}` : '',
          this.round ? 'btn-round' : '',
          this.circle ? 'btn-circle' : ''
        ];
      }
    },
    methods: {
      handleClick () {
        if (this.navigator) {
          this.$router.push(this.navigator);
          return;
        }
        this.$emit('click');
      }
    }
  };
</script>
