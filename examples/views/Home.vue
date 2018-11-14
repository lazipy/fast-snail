<template>
  <div class="container">
    <b-alert v-for="item in btns" :key="Math.random()" :type="item">This is a {{item}} alert—check it out!</b-alert>
    <hr>
    <b-alert v-for="item in btns" :key="Math.random()" :type="item" title="Well done!">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quod corrupti dolore qui debitis minus odio, voluptatibus animi, laudantium, voluptatem quaerat nisi cumque. Porro ipsam consectetur eius eveniet perferendis vero!</b-alert>
    <hr>
    <b-alert v-for="item in btns" :key="Math.random()" :type="item" :show-icon="true">This is a {{item}} alert—check it out!</b-alert>
    <hr>
    <b-alert v-for="item in btns" :key="Math.random()" :type="item" title="Well done!" :show-icon="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis repellendus in illo autem neque dolor nulla, quas tempore veritatis itaque ea minima nostrum error optio, impedit ad doloribus velit!</b-alert>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      btns: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
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
