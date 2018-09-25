<template>
  <header>
    <router-link to="/" class="logo">
      <!-- <img src="" alt=""> -->
      <span>Eagle</span>
    </router-link>
    <nav class="clearfix">
      <ul class="clearfix">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/docs/introduce">组件</router-link></li>
        <li>
          <a href="https://github.com/EagleTeamer/eagle.git" target="_blank">
            <i class="iconfont icon-github-fill"></i>
            <span>Github</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'TopBar'
  };
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    height: 68px;
    line-height: 68px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .2);

    .logo {
      float: left;
      padding: 0 40px;
      width: 260px;
      font-size: 18px;

      &:hover {
        color: #34495e;
      }
    }

    nav {
      margin-left: 260px;
      padding-right: 20px;

      ul {
        float: right;
      }

      li {
        float: left;

        > a {
          display: block;
          padding: 0 18px;
          border-bottom: 2px solid transparent;

          &.router-link-active {
            border-bottom-color: #1890ff;
            color: #1890ff;
          }
        }
      }
    }
  }
</style>
