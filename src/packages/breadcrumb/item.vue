<template>
  <span class="breadcrumb-item" :class="{ active: !to }" @click="click">
    <span class="breadcrumb-separator">{{ separator }}</span><slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'BBreadcrumbItem',
    inject: ['separator'],
    props: {
      to: String
    },
    methods: {
      click () {
        this.$emit('click', this.to);
        this.to && this.$router.push(this.to);
      }
    }
  };
</script>
