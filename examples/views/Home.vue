<template>
  <div class="container">
    <b-breadcrumb>
      <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
      <b-breadcrumb-item to="/home">集成化管理</b-breadcrumb-item>
      <b-breadcrumb-item>优质房源</b-breadcrumb-item>
    </b-breadcrumb>
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
  .container {
    padding-top: 120px;
    height: 3000px;
  }
  .bg-secondary, .bg-primary {
    height: 200px;
  }
</style>
