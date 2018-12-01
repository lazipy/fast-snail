<template>
  <transition name="fade">
    <div
      v-if="visible"
      v-transfer="transfer"
      class="masker"
      @click.self="handleClick"
      :style="currentStyle">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SMasker',
    props: {
      color: {
        type: String
      },
      visible: {
        type: Boolean,
        default: false
      },
      closeable: {
        type: Boolean,
        default: true
      },
      transfer: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      currentStyle () {
        return {
          backgroundColor: this.color
        };
      }
    },
    methods: {
      handleClick () {
        if (this.closeable) {
          this.$emit('update:visible', false);
        }
        this.$emit('click');
      }
    }
  };
</script>
