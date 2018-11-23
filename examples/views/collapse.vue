<template>
  <div class="container p-20">
    <s-collapse v-model="state" @change="handleChange">
      <s-collapse-item title="测试1" name="测试1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio beatae? Est debitis officiis molestias libero. Esse, illo vitae cupiditate eaque aperiam voluptate, odit perspiciatis dolor alias impedit assumenda! Dolore?
      </s-collapse-item>
      <s-collapse-item title="测试2" name="测试2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio beatae? Est debitis officiis molestias libero. Esse, illo vitae cupiditate eaque aperiam voluptate, odit perspiciatis dolor alias impedit assumenda! Dolore?
      </s-collapse-item>
      <s-collapse-item title="测试3" name="测试3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio beatae? Est debitis officiis molestias libero. Esse, illo vitae cupiditate eaque aperiam voluptate, odit perspiciatis dolor alias impedit assumenda! Dolore?
      </s-collapse-item>
    </s-collapse>
    <hr>
    <s-collapse v-model="state1" accordion @change="handleChange">
      <s-collapse-item title="测试1" name="测试1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio beatae? Est debitis officiis molestias libero. Esse, illo vitae cupiditate eaque aperiam voluptate, odit perspiciatis dolor alias impedit assumenda! Dolore?
      </s-collapse-item>
      <s-collapse-item title="测试2" name="测试2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio beatae? Est debitis officiis molestias libero. Esse, illo vitae cupiditate eaque aperiam voluptate, odit perspiciatis dolor alias impedit assumenda! Dolore?
      </s-collapse-item>
      <s-collapse-item title="测试3" name="测试3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio beatae? Est debitis officiis molestias libero. Esse, illo vitae cupiditate eaque aperiam voluptate, odit perspiciatis dolor alias impedit assumenda! Dolore?
      </s-collapse-item>
    </s-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: [],
      state1: ''
    };
  },
  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
  .p-20 {
    padding: 20px;
  }
</style>
