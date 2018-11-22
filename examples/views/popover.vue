<template>
  <div class="container p-20">
    <b-popover title="This is title" content="Are you sure delete it?">
      <b-button type="danger">Delete</b-button>
    </b-popover>
    <hr>
    <b-popover title="This is title" content="Are you sure delete it?" placement="top">
      <b-button type="danger">Delete</b-button>
    </b-popover>
    <b-popover title="This is title" content="Are you sure delete it?" placement="top">
      <b-button type="danger">Delete</b-button>
    </b-popover>
    <b-popover title="This is title" content="Are you sure delete it?" placement="right">
      <b-button type="danger">Delete</b-button>
    </b-popover>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .p-20 {
    padding: 20px;
  }
</style>
