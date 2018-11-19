<template>
  <div class="container">
    <b-collapse v-model="state" accordion>
      <b-collapse-item title="测试1" name="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor earum quos delectus aperiam, error assumenda sed quod ducimus omnis necessitatibus dolores atque officiis hic dolorem mollitia similique exercitationem nam.</b-collapse-item>
      <b-collapse-item title="测试2" name="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor earum quos delectus aperiam, error assumenda sed quod ducimus omnis necessitatibus dolores atque officiis hic dolorem mollitia similique exercitationem nam.</b-collapse-item>
      <b-collapse-item title="测试3" name="3" disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor earum quos delectus aperiam, error assumenda sed quod ducimus omnis necessitatibus dolores atque officiis hic dolorem mollitia similique exercitationem nam.</b-collapse-item>
    </b-collapse>
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
