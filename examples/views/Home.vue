<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
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
  // .text-ellipsis-2 {
  //   width: 330px;
  // }
</style>
