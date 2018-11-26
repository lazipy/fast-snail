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
    <p>带有actions</p>
    <s-tabs v-model="state6" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
      <span slot="actions">
        <s-button>操作按钮</s-button>
      </span>
    </s-tabs>
    <p>不同定位</p>
    <s-tabs v-model="state7" position="left" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>

    <s-tabs v-model="state8" position="right" @change="onChange">
      <s-tab-pane name="1" label="周边学校">周边学校</s-tab-pane>
      <s-tab-pane name="2" label="公共交通">公共交通</s-tab-pane>
      <s-tab-pane name="3" label="周边商业">周边商业</s-tab-pane>
    </s-tabs>

    <p>带icon</p>
    <s-tabs v-model="state10" @change="onChange">
      <s-tab-pane name="1" label="周边学校">
        周边学校
        <span slot="label">
          <i class="icon-cancel"></i>
          周边学校
        </span>
      </s-tab-pane>
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
      state5: '1',
      state6: '1',
      state7: '1',
      state8: '1',
      state10: '1',
    }
  },
  methods: {
    onChange (val, old) {
      console.log(val, old)
    },
  }
}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
