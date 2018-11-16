<template>
  <div class="container">
    <b-card :width="300" :src="src" title="Card Title" subtitle="Card subtitle" :text="text">
      <span slot="actions">
        <b-button>Go somewhere</b-button>
      </span>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      src: 'http://weiwuu-unity.oss-cn-beijing.aliyuncs.com/resource/46074862314501/images/57983200457235.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the card',
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
  // .text-ellipsis-2 {
  //   width: 330px;
  // }
</style>
