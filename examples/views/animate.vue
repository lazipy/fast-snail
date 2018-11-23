<template>
  <div class="container">
    <s-button @click="start">开始</s-button>
    <s-animate ref="animate" name="shake">
      <div class="bg-primary text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab, nesciunt ea voluptate tempora quos impedit aspernatur facilis ex autem tempore aperiam amet perferendis nam necessitatibus nemo blanditiis voluptas harum!
      </div>
    </s-animate>
  </div>
</template>

<script>
export default {
  methods: {
    start () {
      this.$refs.animate.run();
    }
  }
}
</script>

<style>

</style>
