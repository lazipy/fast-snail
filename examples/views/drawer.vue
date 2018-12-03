<template>
  <div class="container">
    <s-button @click="click">Open</s-button>

    <s-drawer transfer :resizable="true" :visible.sync="visible" placement="right">
      <span slot="title">Drawer Title</span>
      <div  style="padding-bottom: 60px;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.</p>
      </div>
      <span class="drawer-footer">
        <s-button type="primary">Update</s-button>
        <s-button type="light">Cancel</s-button>
      </span>
    </s-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    };
  },
  methods: {
    click () {
      this.visible = true;
    }
  }
}
</script>

<style>
.drawer-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 24px;
  text-align: right;
  border-top: 1px solid #cccccc;
}
</style>
