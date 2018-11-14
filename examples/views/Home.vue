<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      theme: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
    };
  },
  methods: {
    toggle () {
      this.$refs.animate.run();
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-secondary, .bg-primary {
    height: 200px;
  }
</style>
