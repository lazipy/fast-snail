<template>
  <div class="container">
    <b-alert title="标题" level="low">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem atque eaque dolore. Vero aperiam, nam debitis illo molestias modi, iusto, molestiae nesciunt quam architecto ipsam beatae est. Dolorem, inventore accusantium.</b-alert>
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
