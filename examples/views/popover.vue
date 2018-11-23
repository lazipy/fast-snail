<template>
  <div class="container p-200">
    <s-popover title="This is title" content="Are you sure delete it?">
      <s-button type="danger">Delete</s-button>
    </s-popover>
    <s-popover title="This is title" content="Are you sure delete it?" placement="bottom">
      <s-button type="danger">Delete</s-button>
    </s-popover>
    <s-popover title="This is title" content="Are you sure delete it?" placement="bottom">
      <s-button type="danger">Delete</s-button>
    </s-popover>
    <s-popover content="Are you sure delete it?" placement="right">
      <s-button type="danger">Delete</s-button>
    </s-popover>
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
