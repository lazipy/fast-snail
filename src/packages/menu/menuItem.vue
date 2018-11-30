<template>
  <div class="menu-item" :class="classes" @click="handleItemClick">
    <template v-if="menu.currentCollaspe && $parent.$options._componentTag === 's-menu'">
      <s-tooltip :content="content" placement="right">
        <slot></slot>
        <span class="menu-item-title">
          <slot name="title"></slot>
        </span>
      </s-tooltip>
    </template>
    <template v-else>
      <slot></slot>
      <span class="menu-item-title">
        <slot name="title"></slot>
      </span>
    </template>
  </div>
</template>

<script>
  import STooltip from '../tooltip/main';

  export default {
    name: 'SMenuItem',
    components: { STooltip },
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
        content: ''
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
      submenus () {
        let menus = [];
        let menu = this.$parent;
        while (menu.$options._componentTag === 's-submenu') {
          menus.push(menu);
          menu = menu.$parent;
        }
        return menus;
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
    mounted () {
      if (this.$slots.title && this.$slots.title.length > 0) {
        this.content = this.$slots.title[0].elm.innerHTML;
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
        for (let sub of this.submenus) {
          if (sub.currentMode === 'float') {
            sub.delayHide();
          }
        }
      }
    }
  };
</script>
