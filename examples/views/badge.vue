<template>
  <div class="container pt20">
    <s-badge value="5">
      <s-button>测试按钮</s-button>
    </s-badge>
    <hr>
    <s-badge type="warning" value="1000">
      <s-button>测试按钮</s-button>
    </s-badge>
    <hr>
    <s-badge :max="999" value="1000">
      <s-button>测试按钮</s-button>
    </s-badge>
    <hr>
    <s-badge mold="basic" :max="999" value="1000">
      <s-button>测试按钮</s-button>
    </s-badge>
    <hr>
    <s-badge mold="dot" :max="999" value="1000">
      <s-button>测试按钮</s-button>
    </s-badge>
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
