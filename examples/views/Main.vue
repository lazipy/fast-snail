<template>
  <div class="main">
    <top-bar></top-bar>

    <div class="layout clearfix">
      <menu-bar></menu-bar>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar';
import MenuBar from '../components/Menu';

export default {
  name: 'Main',
  components: { TopBar, MenuBar }
};
</script>

<style lang="scss" scoped>
  .layout {
    position: absolute;
    top: 68px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
  .container {
    min-height: 100vh;
    margin-left: 258px;
    margin-top: 45px;
    padding: 0 45px;
    border-left: 1px solid #ebedf0;
  }
</style>
