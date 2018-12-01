<template>
  <div class="container">
    <s-button @click="click">Open</s-button>

    <s-masker :visible.sync="visible" @click="clickMasker"></s-masker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    };
  },
  methods: {
    click () {
      this.visible = true;
    },
    clickMasker () {
      console.log(111);
    }
  }
}
</script>

<style>

</style>
