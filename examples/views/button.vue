<template>
  <div class="container pt-20">
    <s-button>默认按钮</s-button>
    <hr>
    <s-button autofocus>自动聚焦</s-button>
    <hr>
    <s-button :type="theme" v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>

    <hr>
    <s-button :type="theme" round v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>

    <hr>
    <s-button :type="theme" circle v-for="theme in themes" :key="Math.random()"></s-button>
    <hr>
    <s-button :type="theme" v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>
    <hr>
    <s-button :type="theme" plain v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>
    <hr>
    <s-button :type="theme" loading v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>
    <hr>
    <s-button :type="theme" disabled v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>
    <hr>
    <s-button :type="theme" navigator="/" v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>
    <hr>
    <s-button :type="theme" block v-for="theme in themes" :key="Math.random()">{{theme}}</s-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      themes: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link']
    };
  }
}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
