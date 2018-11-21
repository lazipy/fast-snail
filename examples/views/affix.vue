<template>
  <div>
    <div v-for="i in 20">eagle eagle eagle</div>
    <b-affix>
      <b-button>默认</b-button>
    </b-affix>
    <div v-for="i in 20">eagle eagle eagle</div>
    <b-affix :offset-top="40">
      <b-button>距离顶部40px</b-button>
    </b-affix>
    <div v-for="i in 20">eagle eagle eagle</div>
    <b-affix :offset-bottom="40">
      <b-button>距离底部40px</b-button>
    </b-affix>
    <div v-for="i in 80">eagle eagle eagle</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
