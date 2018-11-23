<template>
  <div class="container pt-20">
    <s-card
      :width="300"
      title="Card Title"
      subtitle="subtitle"
      :text="text">
      <span slot="actions">
        <s-button>Visited</s-button>
      </span>
    </s-card>
    <hr>
    <s-card
      :width="300"
      src="http://weiwuu-unity.oss-cn-beijing.aliyuncs.com/resource/46074862314501/images/57983200457235.jpg"
      title="Card Title"
      subtitle="subtitle"
      :text="text">
      <span slot="actions">
        <s-button>Visited</s-button>
      </span>
    </s-card>
    <hr>
    <s-card
      :width="300"
      src="http://weiwuu-unity.oss-cn-beijing.aliyuncs.com/resource/46074862314501/images/57983200457235.jpg"
      position="bottom"
      title="Card Title"
      subtitle="subtitle"
      :text="text">
      <span slot="actions">
        <s-button>Visited</s-button>
      </span>
    </s-card>
    <hr>
    <s-card
      :width="300"
      header="Header"
      src="http://weiwuu-unity.oss-cn-beijing.aliyuncs.com/resource/46074862314501/images/57983200457235.jpg"
      title="Card Title"
      subtitle="subtitle"
      :text="text">
      <span slot="actions">
        <s-button>Visited</s-button>
      </span>
    </s-card>
    <hr>
    <s-card
      :width="300"
      footer="Footer"
      src="http://weiwuu-unity.oss-cn-beijing.aliyuncs.com/resource/46074862314501/images/57983200457235.jpg"
      title="Card Title"
      subtitle="subtitle"
      :text="text">
      <span slot="actions">
        <s-button>Visited</s-button>
      </span>
    </s-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    };
  }
}
</script>

<style scoped>
  .pt-20 {
    padding-top: 20px;
  }
</style>
