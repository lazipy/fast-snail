<template>
  <div class="container p-200">
    <b-popover title="This is title" content="Are you sure delete it?">
      <b-button type="danger">Delete</b-button>
    </b-popover>
    <b-popover title="This is title" content="Are you sure delete it?" placement="bottom">
      <b-button type="danger">Delete</b-button>
    </b-popover>
    <b-popover title="This is title" content="Are you sure delete it?" placement="bottom">
      <b-button type="danger">Delete</b-button>
    </b-popover>
    <b-popover content="Are you sure delete it?" placement="right">
      <b-button type="danger">Delete</b-button>
    </b-popover>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .p-200 {
    padding: 200px;
  }
</style>
