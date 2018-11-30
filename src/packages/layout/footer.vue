<template>
  <footer class="footer" :style="currentStyle" :class="customClass">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'SFooter',
    props: {
      height: {
        type: Number,
        default: 60
      },
      customClass: {
        type: String
      }
    },
    computed: {
      currentStyle () {
        return {
           height: this.height + 'px',
           lineHeight: this.height + 'px'
        };
      }
    }
  };
</script>
