<template>
  <div class="container" id="container1">
    <div class="wrap">
      <s-anchor affix :offsetBottom="130" :affixTop="130">
        <s-anchor-link title="基础" href="#anchor_demo"></s-anchor-link>
        <s-anchor-link title="使用案例" href="#anchor_basic"></s-anchor-link>
        <s-anchor-link title="开发测试" href="#anchor_title"></s-anchor-link>
        <s-anchor-link title="发布上线" href="#anchor_href"></s-anchor-link>
      </s-anchor>
    </div>

    <div id="anchor_demo">Anchor Demo</div>
    <p v-for="i in 50">fast sanil</p>

    <p v-for="i in data">fast sanil</p>

    <div id="anchor_basic">Anchor Basic</div>

    <p v-for="i in 50">fast sanil</p>

    <div id="anchor_title">Anchor Title</div>

    <p v-for="i in 50">fast sanil</p>

    <div id="anchor_href">Anchor Href</div>

    <p v-for="i in 50">fast sanil</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 50
      // container: container
    }
  },
  methods: {
    click () {
      this.data += 50;
    }
  }
}
</script>

<style scoped>
  /* #container1 {
    height: 500px;
    border: 1px solid #aaaaaa;
    overflow: auto;
  } */
  .container {
    position: relative;
  }
  .wrap {
    position: absolute;
    top: 330px;
    right: 0;
    width: 230px;
  }
  .fixed {
    position: fixed;
    top: 120px;
    right: 10px;
    padding-right: 10px;
  }
</style>
