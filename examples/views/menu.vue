<template>
  <div class="container">
    <p>基础用法</p>
    <div class="demo">
      <div class="source" v-scroller>
        <s-menu @change="change" :default-open="['baobeifenxi']" current="qvyuguanli">
          <s-menu-group>分组一</s-menu-group>
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
          <s-menu-group>分组二</s-menu-group>
          <s-menu-item name="chengshiguanli">
            <s-icon type="hospital"></s-icon>城市管理
          </s-menu-item>
          <s-menu-item name="shujvyunying">
            <s-icon type="chart-line"></s-icon>数据运营
          </s-menu-item>
        </s-menu>
      </div>
    </div>
    <p>submenu为popper模式</p>
    <div class="demo">
      <div class="source">
        <s-menu :theme="theme" @change="change" @open="open" @close="close" current="qvyuguanli">
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
    <p>可收缩</p>
    <div class="demo">
      <s-button @click="click">切换</s-button>
      <div class="source">
        <s-menu :collapse="collapse" :theme="theme" @change="change" @open="open" @close="close" current="qvyuguanli">
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
            <s-icon type="phone-squared"></s-icon>
            <span slot="title">区域管理</span>
          </s-menu-item>
          <s-menu-item name="chengshiguanli">
            <s-icon type="hospital"></s-icon>
            <span slot="title">城市管理</span>
          </s-menu-item>
          <s-menu-item name="shujvyunying">
            <s-icon type="chart-line"></s-icon>
            <span slot="title">数据运营</span>
          </s-menu-item>
        </s-menu>
      </div>
    </div>
    <p>横向导航</p>
    <div class="demo">
      <s-button @click="clickTheme">切换主题</s-button>
      <s-menu mode="horizontal" :theme="theme" :collapse="collapse" @change="change" @open="open" @close="close" current="qvyuguanli">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      theme: 'light'
    }
  },
  methods: {
    change (name) {
      console.log('change' + name);
    },
    open (name) {
      console.log('open' + name)
    },
    close (name) {
      console.log('close' + name)
    },
    click () {
      this.collapse = !this.collapse;
    },
    clickTheme () {
      if (this.theme === 'light') {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
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
  .demo .source {
    width: 240px;
    height: 100%;
  }
</style>
