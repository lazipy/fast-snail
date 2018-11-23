<template>
  <div>
    <div class="row">
      <div class="col" v-for="i in 12" :key="i">
        <div class="test-block bg-secondary"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="test-block bg-secondary"></div>
      </div>
      <div class="col-6">
        <div class="test-block bg-secondary"></div>
      </div>
      <div class="col-3">
        <div class="test-block bg-secondary"></div>
      </div>
    </div>

    <s-row :gutter="8">
      <s-col v-for="i in 12" :key="i">
        <div class="test-block bg-secondary"></div>
      </s-col>
    </s-row>

    <s-row :gutter="8">
      <s-col :span="3">
        <div class="test-block bg-secondary"></div>
      </s-col>
      <s-col :span="6">
        <div class="test-block bg-secondary"></div>
      </s-col>
      <s-col :span="3">
        <div class="test-block bg-secondary"></div>
      </s-col>
    </s-row>

    <s-row :gutter="8">
      <s-col :span="3">
        <div class="test-block bg-secondary"></div>
      </s-col>
      <s-col :span="3" :offset="6">
        <div class="test-block bg-secondary"></div>
      </s-col>
    </s-row>

    <s-row :gutter="8">
      <s-col :span="3">
        <div class="test-block bg-secondary"></div>
      </s-col>
      <s-col :span="3" :offset="6" :md="{ span: 2, offset: 7 }">
        <div class="test-block bg-secondary"></div>
      </s-col>
    </s-row>
  </div>
</template>

<script>
export default {
  name: 'Styles'
}
</script>

<style lang="scss" scoped>
  .test-block {
    height: 60px;
    border-radius: 4px;
    margin-bottom: 15px;
  }
</style>
