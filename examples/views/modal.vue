<template>
  <div class="container">
    <s-button @click="open">Open</s-button>

    <s-modal :visible.sync="visible" title="Modal Title">
      <div slot="body">
        <p v-for="i in 5">This is Modal Content.</p>
      </div>
    </s-modal>
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
    open () {
      this.visible = true
    }
  }
}
</script>

<style>

</style>
