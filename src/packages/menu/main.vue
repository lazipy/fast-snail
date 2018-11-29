<template>
  <div class="menu" :style="currentStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { array_remove } from '../../utils/data';

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
      width: {
        type: Number,
        default: 240
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
      currentStyle () {
        return {
          width: this.width + 'px'
        };
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
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
