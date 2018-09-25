<template>
  <div>
    <div class="demo">
      <div class="description">
        <slot></slot>
      </div>
      <slot name="source"></slot>
    </div>
    <div v-show="showCode">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  data () {
    return {
      showCode: true
    };
  }
};
</script>


<style lang="scss" scoped>
  .demo {
    border: 1px solid #ebedf0;
    margin-top: 12px;
  }
  .description {
    line-height: 40px;
    border-bottom: 1px solid #ebedf0;
    padding: 0 15px;
  }
  .source {
    padding: 15px;
  }
</style>
