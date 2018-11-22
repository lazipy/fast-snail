<template>
  <div class="container p-20">
    <b-dropdown>
      <b-button>dropdown</b-button>

      <b-dropdown-menu slot="dropdown">
        <b-dropdown-item v-for="i in 4" :key="i">Dropdown Item {{ i }}</b-dropdown-item>
      </b-dropdown-menu>
    </b-dropdown>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .p-20 {
    padding: 20px;
  }
</style>
