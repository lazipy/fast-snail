<template>
  <div class="container pt-20">
    <s-tabs v-model="state" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>
    <p>没有动画</p>
    <s-tabs v-model="state1" :animated="false" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>
    <p>禁用选项</p>
    <s-tabs v-model="state2" :animated="false" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通" :disabled="true">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>
    <p>带有间隙</p>
    <s-tabs v-model="state4" :animated="false" :gutter="20" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>
    <p>卡片样式</p>
    <s-tabs v-model="state5" type="card" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: '1',
      state1: '1',
      state2: '1',
      state4: '1',
      state5: '1'
    }
  },
  methods: {
    onChange (val, old) {
      console.log(val, old)
    }
  }
}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
