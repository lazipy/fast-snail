<template>
  <div class="container p-20">
    <b-dropdown @change="onChange" @click="onClick">
      <a href="#">
        dropdown
        <b-icon type="angle-down"></b-icon>
      </a>

      <b-dropdown-menu slot="dropdown">
        <b-dropdown-item v-for="i in 4" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
      </b-dropdown-menu>
    </b-dropdown>

    <div class="pt-100">
      <b-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <b-icon type="angle-down"></b-icon>
        </a>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>

      <b-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <b-icon type="angle-down"></b-icon>
        </a>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :navigator="i === 1 ? '/' : ''" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>

      <b-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <b-icon type="angle-down"></b-icon>
        </a>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>

      <b-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <b-icon type="angle-down"></b-icon>
        </a>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>
    </div>

    <div class="pt-200">
      <b-dropdown @change="onChange" @click="onClick">
        <b-dropdown-button>Dropdown</b-dropdown-button>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>

      <b-dropdown @change="onChange" @click="onClick">
        <b-dropdown-button size="small">Dropdown</b-dropdown-button>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>

      <b-dropdown @change="onChange" @click="onClick">
        <b-dropdown-button type="link">Dropdown</b-dropdown-button>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>

      <b-dropdown @change="onChange" @click="onClick">
        <b-dropdown-button split>Dropdown</b-dropdown-button>

        <b-dropdown-menu slot="dropdown">
          <b-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</b-dropdown-item>
        </b-dropdown-menu>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange (val) {
      // console.log(val);
    },
    onClick (val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
  .p-20 {
    padding: 20px;
  }
  .pt-100 {
    padding-top: 100px;
  }
  .pt-200 {
    padding-top: 200px;
  }
</style>
