<template>
  <div class="container">
    <s-tooltip content="这是一个按钮" trigger="focus" placement="top-start">
      <s-button ref="button">按钮</s-button>
    </s-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      state: ''
    };
  },
  mounted () {
    this.$refs.button.focus();
  },
  methods: {
    toggle () {
      this.$refs.animate.run();
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 120px;
    height: 3000px;
  }
  .bg-secondary, .bg-primary {
    height: 200px;
  }
  // .text-ellipsis-2 {
  //   width: 330px;
  // }
</style>
