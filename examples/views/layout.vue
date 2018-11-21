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

    <b-row :gutter="8">
      <b-col v-for="i in 12" :key="i">
        <div class="test-block bg-secondary"></div>
      </b-col>
    </b-row>

    <b-row :gutter="8">
      <b-col :span="3">
        <div class="test-block bg-secondary"></div>
      </b-col>
      <b-col :span="6">
        <div class="test-block bg-secondary"></div>
      </b-col>
      <b-col :span="3">
        <div class="test-block bg-secondary"></div>
      </b-col>
    </b-row>

    <b-row :gutter="8">
      <b-col :span="3">
        <div class="test-block bg-secondary"></div>
      </b-col>
      <b-col :span="3" :offset="6">
        <div class="test-block bg-secondary"></div>
      </b-col>
    </b-row>

    <b-row :gutter="8">
      <b-col :span="3">
        <div class="test-block bg-secondary"></div>
      </b-col>
      <b-col :span="3" :offset="6" :md="{ span: 2, offset: 7 }">
        <div class="test-block bg-secondary"></div>
      </b-col>
    </b-row>
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
