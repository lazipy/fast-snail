<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BCollapse',
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: [Number, String, Array]
    }
  };
</script>
