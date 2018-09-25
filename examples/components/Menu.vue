<template>
  <ul class="menu">
    <li class="menu-item"><router-link to="/docs/introduce">Eagle UI of Vue</router-link></li>
    <li class="menu-item"><router-link to="/docs/getting-started">快速上手</router-link></li>
    <!-- <li class="menu-item"><router-link to="">定制主题</router-link></li> -->
    <!-- <li class="menu-item"><router-link to="">更新日志</router-link></li> -->
    <li class="menu-item">
      <span class="menu-title">
        <span>Components 组件</span>
        <i class="iconfont "></i>
      </span>
      <div class="menu-panel">
        <span class="menu-group">General</span>
        <ul class="submenu">
          <li class="menu-item"><router-link to="/docs/button">Button <span>按钮</span></router-link></li>
          <li class="menu-item"><router-link to="/docs/icon">Icon <span>图标</span></router-link></li>
        </ul>
        <span class="menu-group">Layout</span>
        <ul class="submenu">
          <li class="menu-item"><router-link to="/docs/grid">Grid <span>栅格</span></router-link></li>
          <li class="menu-item"><router-link to="/docs/layout">Layout <span>布局</span></router-link></li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style lang="scss" scoped>
  .menu {
    float: left;
    width: 260px;
    margin-top: 30px;

    .menu-item {
      height: 40px;
      line-height: 40px;
      margin: 4px 0;

      a {
        display: block;
        padding-left: 40px;
        border-right: 3px solid transparent;

        &.router-link-exact-active {
          border-right-color: #1890ff;
          color: #1890ff;
        }
      }
    }
    .menu-title {
      padding-left: 40px;
    }
    .menu-group {
      padding-left: 56px;
      color: rgba(0,0,0,.45);
    }
    .submenu {
      .menu-item a {
        padding-left: 80px;

        span {
          opacity: .67;
        }
      }
    }
  }
</style>
