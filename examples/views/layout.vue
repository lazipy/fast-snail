<template>
  <div class="container">
    <p>常见用法</p>
    <div class="demo">
      <s-layout>
        <s-aside theme="dark" :collapse="collapse">
          <div class="logo-box">
            <div class="logo"></div>
          </div>
          <s-menu @change="change" :collapse="collapse" theme="dark" :default-open="['baobeiguanli']" current="qvyuguanli">
            <s-submenu name="baobeiguanli">
              <span slot="title">
                <s-icon type="mail"></s-icon>
                <span>报备管理</span>
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
        </s-aside>
        <s-layout direction="column">
          <s-header :collapse-arrow="collapse" @collapse="changeCollapse">
            <s-breadcrumb>
              <s-breadcrumb-item to="/">Home</s-breadcrumb-item>
              <s-breadcrumb-item to="/breadcrumb">Application</s-breadcrumb-item>
              <s-breadcrumb-item>Manage</s-breadcrumb-item>
            </s-breadcrumb>
          </s-header>
          <s-main>
            <p>Main Content</p>
          </s-main>
          <s-footer>
            Footer
          </s-footer>
        </s-layout>
      </s-layout>
    </div>
    <p>常见用法</p>
    <div class="demo">
      <s-layout direction="column">
        <s-header theme="dark">
          <div class="logo-box">
            <div class="logo"></div>
          </div>
          <s-menu mode="horizontal" theme="dark" :collapse="collapse" @change="change" @open="open" @close="close" current="qvyuguanli">
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
        </s-header>
        <s-layout>
          <s-aside>
            <s-menu @change="change" :collapse="collapse" :default-open="['baobeiguanli']" current="qvyuguanli">
              <s-submenu name="baobeiguanli">
                <span slot="title">
                  <s-icon type="mail"></s-icon>
                  <span>报备管理</span>
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
          </s-aside>
          <s-layout direction="column">
            <s-main>
              <p v-for="i in 40">Main Content</p>
            </s-main>
            <s-footer>
              Footer
            </s-footer>
          </s-layout>
        </s-layout>
      </s-layout>
    </div>
    <p>Aside固定滚动</p>
    <iframe class="iframe" src="/static/layout.html" frameborder="0"></iframe>
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
    },
    changeCollapse () {
      this.collapse = !this.collapse;
    }
  }
}
</script>

<style scoped>
  .demo {
    position: relative;
    width: 100%;
    height: 500px;
    border: 1px solid #aaaaaa;
  }
  .logo-box {
    position: relative;
    padding: 10px;
    overflow: hidden;
  }
  .logo {
    height: 40px;
    line-height: 40px;
    background-color: rgba(255,255,255,.2);
    border-radius: 4px;
  }
  .header > .logo-box {
    display: inline-block;
    width: 200px;
  }
  .iframe {
    position: relative;
    width: 100%;
    height: 500px;
  }
</style>
