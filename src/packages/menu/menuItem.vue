<template>
  <div class="menu-item" :class="classes" @click="handleItemClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SMenuItem',
    inject: ['router'],
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      navigator: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      };
    },
    computed: {
      menu () {
        let menu = this.$parent;
        while (menu.$options._componentTag !== 's-menu') {
          menu = menu.$parent;
        }
        return menu;
      },
      isActive () {
        return this.menu.currentName === this.name && !this.disabled;
      },
      classes () {
        return [
          this.isActive ? 'active' : ''
        ];
      }
    },
    methods: {
      handleItemClick () {
        if (this.disabled) return;
        this.menu.currentName = this.name;
        this.menu.$emit('change', this.name);
        if (this.router) {
          this.$router.push(this.navigator);
        }
      }
    }
  };
</script>
