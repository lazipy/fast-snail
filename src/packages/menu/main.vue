<template>
  <div class="menu" :class="classes" :style="currentStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { array_remove } from '../../utils/data';
  import { OneOf } from '../../utils';

  export default {
    name: 'SMenu',
    props: {
      current: {
        type: [String, Number]
      },
      defaultOpen: {
        type: Array,
        default: () => []
      },
      mode: {
        type: String,
        default: 'vertical',
        validator: OneOf(['vertical', 'horizontal'])
      },
      theme: {
        type: String,
        default: 'light',
        validator: OneOf(['light', 'dark'])
      },
      collapse: {
        type: Boolean,
        default: false
      },
      router: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentName: this.current,
        opens: this.defaultOpen,
        subs: [],
        items: []
      };
    },
    provide () {
      return {
        router: this.router
      };
    },
    computed: {
      currentCollaspe () {
        return this.mode === 'horizontal' ? false : this.collapse;
      },
      classes () {
        return [
          this.currentCollaspe ? 'menu-collapse' : '',
          `menu-${this.mode}`,
          `menu-${this.theme}`
        ];
      },
      currentStyle () {
        return {
          // width: this.width + 'px'
        };
      }
    },
    watch: {
      collapse (val) {
        if (val) {
          for (let sub of this.subs) {
            if (sub.visible) {
              sub.visible = false;
              this.close(sub.name);
            }
          }
        }
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        this.subs = this.$children.filter(child => child.$options._componentTag === 's-submenu');
      },
      open (name) {
        this.opens.push(name);
      },
      close (name) {
        array_remove(this.opens, name);
      }
    }
  };
</script>
