<template>
  <i class="icon-spinner spinner" :style="currentStyle"></i>
</template>

<script>
  export default {
    name: 'SSpinner',
    props: {
      delay: {
        type: Number,
        default: 0
      },
      size: Number,
      color: String
    },
    data () {
      return {
        visible: false
      };
    },
    computed: {
      currentStyle () {
        return {
          fontSize: this.size + 'px',
          color: this.color
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
