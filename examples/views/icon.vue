<template>
  <div class="container">
    <s-icon class="ml-10" size="22" color="#666" :type="type" v-for="type in types" :key="type"></s-icon>
  </div>
</template>

<script>
import types from '../../src/utils/icon';

export default {
  data () {
    return {
      types
    };
  }
}
</script>

<style scoped>
  .ml-10 {
    margin-left: 10px;
  }
</style>
