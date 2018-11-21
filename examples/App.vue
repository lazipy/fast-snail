<template>
  <div id="app">
    <div class="linksWrap">
      <router-link to="/affix">affix</router-link>
      <router-link to="/alert">alert</router-link>
      <router-link to="/animate">animate</router-link>
      <router-link to="/avator">avator</router-link>
      <router-link to="/backtop">backtop</router-link>
      <router-link to="/badge">badge</router-link>
      <router-link to="/bar">bar</router-link>
      <router-link to="/breadcrumb">breadcrumb</router-link>
      <router-link to="/button">button</router-link>
      <router-link to="/card">card</router-link>
      <router-link to="/carousel">carousel</router-link>
      <router-link to="/collapse">collapse</router-link>
      <router-link to="/tooltip">tooltip</router-link>
      <router-link to="/layout">layout</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="scss" scoped>
.linksWrap{
  background: #ccc;
  padding: 10px;
  a{
    padding: 10px;
  }
}
</style>

