<template>
  <div id="app">
    <div class="linksWrap">
      <router-link to="/affix">affix</router-link>
      <router-link to="/alert">alert</router-link>
      <router-link to="/anchor">anchor</router-link>
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
      <router-link to="/divider">divider</router-link>
      <router-link to="/dropdown">dropdown</router-link>
      <router-link to="/list">list</router-link>
      <router-link to="/loading">loading</router-link>
      <router-link to="/menu">menu</router-link>
      <router-link to="/popover">popover</router-link>
      <router-link to="/scroller">scroller</router-link>
      <router-link to="/spinner">spinner</router-link>
      <router-link to="/steps">steps</router-link>
      <router-link to="/tabs">tabs</router-link>
      <router-link to="/tag">tag</router-link>
      <router-link to="/timeline">timeline</router-link>
      <router-link to="/tooltip">tooltip</router-link>
      <router-link to="/icon">icon</router-link>
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

