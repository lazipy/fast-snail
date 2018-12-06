<template>
  <div class="container">
    <!-- <s-message type="info" message="This is message"></s-message>
    <s-message type="success" message="This is message"></s-message>
    <s-message type="warning" message="This is message"></s-message>
    <s-message type="error" message="This is message.If too long, it will hidden."></s-message>

    <s-message type="info" message="This is message" :closeable="true"></s-message> -->

    <s-button @click="openMessage">Open Message</s-button>
  </div>
</template>

<script>
export default {
  methods: {
    openMessage () {
      this.$message.error('This is message.')
    }
  }
}
</script>

<style>

</style>
