<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <slot></slot>
  </nav>
</template>

<script>
  export default {
    name: 'SBreadcrumb',
    props: {
      separator: {
        type: [String, Element],
        default: '/'
      }
    },
    provide () {
      return {
        separator: this.separator
      };
    }
  };
</script>
