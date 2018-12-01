<template>
  <main class="main">
    <slot name="header"></slot>
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'SMain'
  };
</script>
