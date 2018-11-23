<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SCollapse',
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: [Number, String, Array]
    }
  };
</script>
