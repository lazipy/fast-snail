<template>
  <div>
    <div class="container">
      <s-loading></s-loading>
    </div>

    <div class="container">
      <s-loading text="加载中..." position="right"></s-loading>
    </div>

    <div class="container">
      <s-loading text="加载中..." position="bottom"></s-loading>
    </div>

    <div class="container">
      <s-loading text="加载中..." position="top"></s-loading>
    </div>

    <div class="container">
      <s-loading text="加载中..." position="left"></s-loading>
    </div>

    <div class="container">
      <s-loading :delay="3000"></s-loading>
    </div>

    <div class="container">
      <s-loading :size="80"></s-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    padding: 20px;
    height: 300px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
</style>
