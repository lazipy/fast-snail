<template>
  <div id="container2">
    <div v-for="i in 20">eagle eagle eagle</div>
    <s-affix container="#container2">
      <s-button>默认</s-button>
    </s-affix>
    <div v-for="i in 20">eagle eagle eagle</div>
    <s-affix :offset-top="40" container="#container2">
      <s-button>距离顶部40px</s-button>
    </s-affix>
    <div v-for="i in 20">eagle eagle eagle</div>
    <s-affix :offset-bottom="40" container="#container2">
      <s-button>距离底部40px</s-button>
    </s-affix>
    <div v-for="i in 80">eagle eagle eagle</div>
  </div>
  <!-- <div>
    <div v-for="i in 20">eagle eagle eagle</div>
    <s-affix>
      <s-button>默认</s-button>
    </s-affix>
    <div v-for="i in 20">eagle eagle eagle</div>
    <s-affix :offset-top="40">
      <s-button>距离顶部40px</s-button>
    </s-affix>
    <div v-for="i in 20">eagle eagle eagle</div>
    <s-affix :offset-bottom="40">
      <s-button>距离底部40px</s-button>
    </s-affix>
    <div v-for="i in 80">eagle eagle eagle</div>
  </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
  #container2 {
    width: 300px;
    height: 300px;
    overflow: auto;
  }
</style>
