<template>
  <div class="container">
    <div>
      <b-button :autofocus="item === 'primary'" :type="item" v-for="item in btns" :key="item">{{ item }}</b-button>
    </div>
    <div style="margin-top: 10px;">
      <b-button :type="item" v-for="item in btns" loading :key="item">{{ item }}</b-button>
    </div>
    <div style="margin-top: 10px;">
      <b-button :type="item" v-for="item in btns" disabled :key="item">{{ item }}</b-button>
    </div>

    <div style="margin-top: 10px;">
      <b-button :type="item" size="small" v-for="item in btns"  :key="item">{{ item }}</b-button>
    </div>
    <div style="margin-top: 10px;">
      <b-button :type="item" size="large" v-for="item in btns"  :key="item">{{ item }}</b-button>
    </div>

    <div style="margin-top: 10px;">
      <b-button :type="item" circle v-for="item in btns"  :key="item">
        <i class="icon-user-o"></i>
      </b-button>
    </div>
    <div style="margin-top: 10px;">
      <b-button :type="item" round v-for="item in btns"  :key="item">
        {{item}}
      </b-button>
    </div>
    <div style="margin-top: 10px;">
      <b-button :type="item" size="large" round v-for="item in btns"  :key="item">
        {{item}}
      </b-button>
    </div>
    <div style="margin-top: 10px;">
      <b-button :type="item" size="small" round v-for="item in btns"  :key="item">
        {{item}}
      </b-button>
    </div>

    <div style="margin-top: 10px;">
      <b-button :type="item" plain v-for="item in btns"  :key="item">
        {{item}}
      </b-button>
    </div>

    <div style="margin-top: 10px;">
      <b-button :type="item" v-for="item in btns" block :key="item">{{ item }}</b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      btns: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link']
    };
  },
  methods: {
    toggle () {
      this.$refs.animate.run();
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-secondary, .bg-primary {
    height: 200px;
  }
</style>
