<template>
  <div class="container">
    <p>基础用法</p>
    <div class="demo">
      <s-menu @change="change" :default-open="['baobeifenxi']" current="qvyuguanli">
        <s-submenu name="baobeiguanli">
          <span slot="title">
            <s-icon type="mail"></s-icon>报备管理
          </span>
          <s-menu-group>分组一</s-menu-group>
          <s-menu-item name="baobeiliebiao">报备列表</s-menu-item>
          <s-menu-item name="baobeiguize">报备规则</s-menu-item>
          <s-menu-group>分组二</s-menu-group>
          <s-menu-item name="baobeiduibi">报备对比</s-menu-item>
          <s-submenu name="baobeifenxi">
            <span slot="title">报备分析</span>
            <s-menu-item name="shujvduibi">数据对比</s-menu-item>
            <s-menu-item name="shujvfenxi">数据分析</s-menu-item>
          </s-submenu>
        </s-submenu>

        <s-menu-item name="qvyuguanli">
          <s-icon type="phone-squared"></s-icon>区域管理
        </s-menu-item>
        <s-menu-item name="chengshiguanli">
          <s-icon type="hospital"></s-icon>城市管理
        </s-menu-item>
        <s-menu-item name="shujvyunying">
          <s-icon type="chart-line"></s-icon>数据运营
        </s-menu-item>
      </s-menu>
    </div>
    <p>submenu为popper模式</p>
    <div class="demo">
      <s-menu @change="change" @open="open" @close="close" current="qvyuguanli">
        <s-submenu name="baobeiguanli" mode="float">
          <span slot="title">
            <s-icon type="mail"></s-icon>报备管理
          </span>
          <s-menu-group>分组一</s-menu-group>
          <s-menu-item name="baobeiliebiao">报备列表</s-menu-item>
          <s-menu-item name="baobeiguize">报备规则</s-menu-item>
          <s-menu-group>分组二</s-menu-group>
          <s-menu-item name="baobeiduibi">报备对比</s-menu-item>
          <s-submenu name="baobeifenxi" mode="float">
            <span slot="title">报备分析</span>
            <s-menu-item name="shujvduibi">数据对比</s-menu-item>
            <s-menu-item name="shujvfenxi">数据分析</s-menu-item>
          </s-submenu>
        </s-submenu>

        <s-menu-item name="qvyuguanli">
          <s-icon type="phone-squared"></s-icon>区域管理
        </s-menu-item>
        <s-menu-item name="chengshiguanli">
          <s-icon type="hospital"></s-icon>城市管理
        </s-menu-item>
        <s-menu-item name="shujvyunying">
          <s-icon type="chart-line"></s-icon>数据运营
        </s-menu-item>
      </s-menu>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    change (name) {
      console.log(name);
    },
    open (name) {
      console.log(name)
    },
    close (name) {
      console.log(name)
    }
  }
}
</script>

<style scoped>
  .demo {
    height: 600px;
    padding: 40px;
    border: 1px solid #cccccc;
  }
</style>
