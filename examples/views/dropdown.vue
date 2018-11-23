<template>
  <div class="container p-20">
    <s-dropdown @change="onChange" @click="onClick">
      <a href="#">
        dropdown
        <s-icon type="angle-down"></s-icon>
      </a>

      <s-dropdown-menu slot="dropdown">
        <s-dropdown-item v-for="i in 4" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
      </s-dropdown-menu>
    </s-dropdown>

    <div class="pt-100">
      <s-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <s-icon type="angle-down"></s-icon>
        </a>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>

      <s-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <s-icon type="angle-down"></s-icon>
        </a>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :navigator="i === 1 ? '/' : ''" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>

      <s-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <s-icon type="angle-down"></s-icon>
        </a>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>

      <s-dropdown @change="onChange" @click="onClick">
        <a href="#">
          dropdown
          <s-icon type="angle-down"></s-icon>
        </a>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>
    </div>

    <div class="pt-200">
      <s-dropdown @change="onChange" @click="onClick">
        <s-dropdown-button>Dropdown</s-dropdown-button>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>

      <s-dropdown @change="onChange" @click="onClick">
        <s-dropdown-button size="small">Dropdown</s-dropdown-button>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>

      <s-dropdown @change="onChange" @click="onClick">
        <s-dropdown-button type="link">Dropdown</s-dropdown-button>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>

      <s-dropdown @change="onChange" @click="onClick">
        <s-dropdown-button split>Dropdown</s-dropdown-button>

        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown>
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
