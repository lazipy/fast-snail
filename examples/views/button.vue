<template>
  <div class="container pt-20">
    <b-button>默认按钮</b-button>
    <hr>
    <b-button autofocus>自动聚焦</b-button>
    <hr>
    <b-button :type="theme" v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>

    <hr>
    <b-button :type="theme" round v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>

    <hr>
    <b-button :type="theme" circle v-for="theme in themes" :key="Math.random()"></b-button>
    <hr>
    <b-button :type="theme" v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>
    <hr>
    <b-button :type="theme" plain v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>
    <hr>
    <b-button :type="theme" loading v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>
    <hr>
    <b-button :type="theme" disabled v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>
    <hr>
    <b-button :type="theme" navigator="/" v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>
    <hr>
    <b-button :type="theme" block v-for="theme in themes" :key="Math.random()">{{theme}}</b-button>
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
