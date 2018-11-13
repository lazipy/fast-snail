<template>
  <div class="container">
    <button @click="toggle">切换</button>
    <b-animate ref="animate" name="shake">
      <div class="bg-secondary"></div>
    </b-animate>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      visible: false
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
  .bg-secondary {
    height: 200px;
    width: 500px;
    margin: 0 auto;
  }
</style>
