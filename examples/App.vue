<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
  body {
    font-size: 14px;
    color: #34495e;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p, ul, li, ol {
    margin: 0;
    padding: 0;
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    color: #34495e;
    text-decoration: none;

    &:hover, &.active {
      color: #1890ff;
    }
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
