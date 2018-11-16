<template>
  <div class="container">
    <b-bar :height="150" :src="src" title="Bar Title" :text="text" blockquote="Someone famous in Source Title">
      <span slot="actions">
        <b-button>Sort</b-button>
        <b-button type="danger">Delete</b-button>
      </span>
    </b-bar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      src: 'http://oss-cn-beijing.aliyuncs.com/weiwuu-unity/resource/7974715323201/images/21676614105045.jpg?x-oss-process=image/resize,m_fixed,h_300,w_300',
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
