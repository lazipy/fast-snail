<template>
  <div class="container pt-20">
    <s-alert :type="theme" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
    <s-alert :type="theme" level="low" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
    <s-alert :type="theme" level="highest" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>

    <s-alert :type="theme" title="Alert Title" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
    <s-alert :type="theme" title="Alert Title" level="low" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
    <s-alert :type="theme" title="Alert Title" level="highest" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>

    <s-alert :type="theme" show-icon closeable title="Alert Title" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
    <s-alert :type="theme" show-icon closeable title="Alert Title" level="low" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
    <s-alert :type="theme" show-icon closeable title="Alert Title" level="highest" v-for="theme in themes" :key="Math.random()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis molestias, iure velit provident cupiditate tempora quas optio eum itaque eligendi neque corporis facere illum assumenda totam ipsum perferendis recusandae.
    </s-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      themes: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
    }
  }
}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
