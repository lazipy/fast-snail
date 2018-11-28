<template>
  <div>
    <div :style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { on, off } from '../../utils/dom.js'
export default {
  name: 'SAffix',
  data() {
    return {
      style: {}
    }
  },
  props: {
    offsetTop: {
      type: Number
    },
    offsetBottom: {
      type: Number
    }
  },
  computed: {
    fixType() {
      return this.offsetBottom || this.offsetBottom === 0 ? 'bottom' : 'top'
    }
  },
  mounted() {
    on(window, 'scroll', this.handleScroll)
    on(window, 'resize', this.handleScroll)
  },
  destroyed() {
    off(window, 'scroll', this.handleScroll)
    off(window, 'resize', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let rect = this.$el.getBoundingClientRect()

      if (this.fixType === 'top') {
        if (rect.top <= (this.offsetTop || 0)) {
          this.style = {
            'position': 'fixed',
            'top': (this.offsetTop || 0) + 'px'
          }
          this.$emit('change', true);
        } else {
          this.style = {}
          this.$emit('change', false);
        }
      }

      if (this.fixType === 'bottom') {
        if (rect.bottom + (this.offsetBottom || 0) <= window.innerHeight) {
          this.style = {
            'position': 'fixed',
            'bottom': (this.offsetBottom || 0) + 'px'
          }
          this.$emit('change', true);
        } else {
          this.style = {}
          this.$emit('change', false);
        }
      }

    }
  }
}
</script>
