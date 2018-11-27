<template>
  <div class="container pt-20">
    <s-tag>default</s-tag>
    <s-tag :color="color" v-for="color in colors" :key="color">{{color}}</s-tag>
    <p>Custom</p>
    <s-tag color="#e4393c">#e4393c</s-tag>
    <p>Closable</p>
    <s-tag closable>default</s-tag>
    <s-tag :color="color" closable v-for="color in colors" :key="Math.random()">{{color}}</s-tag>
    <p>Large</p>
    <s-tag :color="color" size="large" closable v-for="color in colors" :key="Math.random()">{{color}}</s-tag>
    <p>small</p>
    <s-tag :color="color" size="small" closable v-for="color in colors" :key="Math.random()">{{color}}</s-tag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan']
    }
  }
}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
