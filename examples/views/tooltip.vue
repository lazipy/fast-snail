<template>
  <div class="container pt-20">
    <s-tooltip content="This is button">
      <s-button>Button</s-button>
    </s-tooltip>
    <hr>
    <s-tooltip content="This is button" placement="top">
      <s-button>Button</s-button>
    </s-tooltip>
    <hr>
    <s-tooltip content="This is button" trigger="focus">
      <s-button>Button</s-button>
    </s-tooltip>
    <hr>
    <s-tooltip content="This is button" trigger="click">
      <s-button>Button</s-button>
    </s-tooltip>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
