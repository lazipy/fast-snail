<template>
  <div>
    <div :style="style" ref="wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { on, off } from '../../utils/dom.js'
export default {
  name: 'BAffix',
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
  },
  methods: {
    handleScroll() {
      let el = this.$refs.place
      let rect = this.$el.getBoundingClientRect()

      if (this.fixType === 'top') {
        if (rect.top < (this.offsetTop || 0)) {
          this.style = {
            'position': 'fixed',
            'top': (this.offsetTop || 0) + 'px'
          }
        } else {
          this.style = {}
        }
      }

      if (this.fixType === 'bottom') {
        if (rect.top + this.$refs.wrap.offsetHeight + (this.offsetBottom || 0) > window.innerHeight) {
          this.style = {
            'position': 'fixed',
            'bottom': (this.offsetBottom || 0) + 'px'
          }
        } else {
          this.style = {}
        }
      }

    }
  }
}
</script>
