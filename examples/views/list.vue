<template>
  <div class="container p-20">
    <s-list>
      <s-list-item>Cras justo odio</s-list-item>
      <s-list-item>Cras justo odio</s-list-item>
      <s-list-item>Cras justo odio</s-list-item>
      <s-list-item>Cras justo odio</s-list-item>
    </s-list>

    <div class="pt-20">
      <s-list flush>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
      </s-list>
    </div>

    <div class="pt-20">
      <s-list flush>
        <span slot="header">Header</span>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
      </s-list>
    </div>

    <div class="pt-20">
      <s-list :height="300">
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
      </s-list>
    </div>

    <div class="pt-20">
      <s-list loading>
        <span slot="header">Header</span>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
      </s-list>
    </div>

    <div class="pt-20">
      <s-list v-loading="loading">
        <span slot="header">Header</span>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
        <s-list-item>Cras justo odio</s-list-item>
      </s-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    };
  },
  mounted () {
    setTimeout(() => {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }, 2000);
  }
}
</script>

<style scoped>
  .p-20 {
    padding: 20px;
  }
  .pt-20 {
    padding-top: 20px;
  }
</style>
