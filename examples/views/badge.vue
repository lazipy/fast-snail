<template>
  <div class="container pt20">
    <b-badge value="5">
      <b-button>测试按钮</b-button>
    </b-badge>
    <hr>
    <b-badge type="warning" value="1000">
      <b-button>测试按钮</b-button>
    </b-badge>
    <hr>
    <b-badge :max="999" value="1000">
      <b-button>测试按钮</b-button>
    </b-badge>
    <hr>
    <b-badge mold="basic" :max="999" value="1000">
      <b-button>测试按钮</b-button>
    </b-badge>
    <hr>
    <b-badge mold="dot" :max="999" value="1000">
      <b-button>测试按钮</b-button>
    </b-badge>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .pt20 {
    padding-top: 20px;
  }
</style>
