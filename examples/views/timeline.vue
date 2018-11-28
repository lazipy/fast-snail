<template>
  <div class="container">
    <p>默认</p>
    <s-timeline>
      <s-timeline-item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis voluptatum expedita cum in rem exercitationem iure natus. Voluptatibus veritatis similique dicta nostrum nemo cupiditate dignissimos necessitatibus soluta fugit praesentium?</s-timeline-item>
      <s-timeline-item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate est accusamus fuga, iste ipsum blanditiis magni voluptates necessitatibus eius! Enim facilis reprehenderit debitis suscipit labore perspiciatis eius possimus ducimus.</s-timeline-item>
      <s-timeline-item>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti dignissimos saepe repellat, neque hic ipsa accusamus deserunt iure totam dolores quaerat tempore, voluptatum quidem distinctio vero sapiente, minus placeat.</s-timeline-item>
    </s-timeline>

    <p>不同颜色</p>
    <s-timeline>
      <s-timeline-item color="red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis voluptatum expedita cum in rem exercitationem iure natus. Voluptatibus veritatis similique dicta nostrum nemo cupiditate dignissimos necessitatibus soluta fugit praesentium?</s-timeline-item>
      <s-timeline-item color="green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate est accusamus fuga, iste ipsum blanditiis magni voluptates necessitatibus eius! Enim facilis reprehenderit debitis suscipit labore perspiciatis eius possimus ducimus.</s-timeline-item>
      <s-timeline-item color="purple">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti dignissimos saepe repellat, neque hic ipsa accusamus deserunt iure totam dolores quaerat tempore, voluptatum quidem distinctio vero sapiente, minus placeat.</s-timeline-item>
    </s-timeline>

    <p>自定义icon</p>
    <s-timeline>
      <s-timeline-item color="red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis voluptatum expedita cum in rem exercitationem iure natus. Voluptatibus veritatis similique dicta nostrum nemo cupiditate dignissimos necessitatibus soluta fugit praesentium?</s-timeline-item>
      <s-timeline-item color="green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate est accusamus fuga, iste ipsum blanditiis magni voluptates necessitatibus eius! Enim facilis reprehenderit debitis suscipit labore perspiciatis eius possimus ducimus.</s-timeline-item>
      <s-timeline-item color="orange">
        <i class="icon-clock" slot="icon"></i>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti dignissimos saepe repellat, neque hic ipsa accusamus deserunt iure totam dolores quaerat tempore, voluptatum quidem distinctio vero sapiente, minus placeat.
      </s-timeline-item>
    </s-timeline>

    <p>带有pending</p>
    <s-timeline pending="This is Now">
      <s-timeline-item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis voluptatum expedita cum in rem exercitationem iure natus. Voluptatibus veritatis similique dicta nostrum nemo cupiditate dignissimos necessitatibus soluta fugit praesentium?</s-timeline-item>
      <s-timeline-item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate est accusamus fuga, iste ipsum blanditiis magni voluptates necessitatibus eius! Enim facilis reprehenderit debitis suscipit labore perspiciatis eius possimus ducimus.</s-timeline-item>
      <s-timeline-item>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti dignissimos saepe repellat, neque hic ipsa accusamus deserunt iure totam dolores quaerat tempore, voluptatum quidem distinctio vero sapiente, minus placeat.</s-timeline-item>
    </s-timeline>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
