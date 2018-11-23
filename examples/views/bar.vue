<template>
  <div class="container pt-20">
    <s-bar
      title="Bar Title"
      :text="text"
      blockquote="This is blockquote"
      src="http://oss-cn-beijing.aliyuncs.com/weiwuu-unity/krpano/50934599222812/720/panos/image/thumb.jpg">
      <span slot="actions">
        <s-button @click="update">Update</s-button>
        <s-button type="danger" @click="hanldedelete">Delete</s-button>
      </span>
    </s-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptatibus dolores sequi commodi nemo sunt. Culpa odio porro eligendi earum vel architecto, a optio doloribus facere impedit explicabo, ad eos.'
    };
  },
  methods: {
    update () {
      console.log('点击update');
    },
    hanldedelete () {
      console.log('delete');
    }
  }
};
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
