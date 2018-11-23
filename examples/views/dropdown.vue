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
      <s-dropdown-button @change="onChange" @select="onClick">
        Dropdown
        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown-button>

      <s-dropdown-button size="small" @change="onChange" @select="onClick">
        Dropdown
        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown-button>

      <s-dropdown-button size="small" type="link" @change="onChange" @select="onClick">
        Dropdown
        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown-button>

      <s-dropdown-button split @change="onChange" @click="click" @select="onClick">
        Dropdown
        <s-dropdown-menu slot="dropdown">
          <s-dropdown-item v-for="i in 4" :divided="i === 4" :disabled="i === 3" :key="i" :name="i">Dropdown Item {{ i }}</s-dropdown-item>
        </s-dropdown-menu>
      </s-dropdown-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange (val) {
      console.log(val);
    },
    onClick (val) {
      console.log(val);
    },
    click () {
      console.log('点击了左侧的按钮');
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
