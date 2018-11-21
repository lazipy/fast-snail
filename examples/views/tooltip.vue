<template>
  <div class="container pt-20">
    <b-tooltip content="This is button">
      <b-button>Button</b-button>
    </b-tooltip>
    <hr>
    <b-tooltip content="This is button" placement="top">
      <b-button>Button</b-button>
    </b-tooltip>
    <hr>
    <b-tooltip content="This is button" trigger="focus">
      <b-button>Button</b-button>
    </b-tooltip>
    <hr>
    <b-tooltip content="This is button" trigger="click">
      <b-button>Button</b-button>
    </b-tooltip>
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
