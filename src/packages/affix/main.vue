<template>
  <div>
    <div :style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { on, off, getRect } from '../../utils/dom.js'

  export default {
    name: 'SAffix',
    props: {
      affix: {
        type: Boolean,
        default: true
      },
      offsetTop: {
        type: Number,
        default: 0
      },
      offsetBottom: {
        type: Number
      },
      container: {
        type: [HTMLElement, Window, String],
        default: () => window
      }
    },
    data () {
      return {
        scrollContainer: null,
        scrollElement: null,
        width: 0,
        height: 0,
        style: {}
      };
    },
    computed: {
      offsetType () {
        return this.offsetBottom || this.offsetBottom === 0 ? 'bottom' : 'top';
      },
      containerIsWindow () {
        return this.scrollContainer === window;
      }
    },
    mounted () {
      this.init();
      on(this.scrollContainer, 'scroll', this.handleScroll);
      on(window, 'resize', this.handleScroll);
    },
    destroyed () {
      off(this.scrollContainer, 'scroll', this.handleScroll)
      off(window, 'resize', this.handleScroll)
    },
    methods: {
      init () {
        this.getContainer();
        this.width = this.$el.offsetWidth;
        this.height = this.$el.offsetHeight;
      },
      getContainer () {
        if (typeof this.container === 'string') {
          this.scrollContainer = document.querySelector(this.container);
          this.scrollContainer.style.position = 'relative';
        } else {
          this.scrollContainer = this.container;
        }
        this.scrollElement = this.containerIsWindow ? document.body : this.scrollContainer;
      },
      handleScroll () {
        if (!this.affix) return;
        const rect = getRect(this.$el, this.scrollElement);
        const containerRectTop = this.containerIsWindow ? 0 : getRect(this.scrollContainer, document.body).top;
        const containerRectLeft = this.containerIsWindow ? 0 : getRect(this.scrollContainer, document.body).left;
        const containerOffsetBottom = this.containerIsWindow ? 0 : window.innerHeight - containerRectTop - this.scrollContainer.offsetHeight;
        const scrollTop = this.containerIsWindow ? this.scrollContainer.pageYOffset : this.scrollContainer.scrollTop;
        const offsetHeight = this.containerIsWindow ? this.scrollContainer.innerHeight : this.scrollContainer.offsetHeight;

        if (this.offsetType === 'top') {
          if (scrollTop >= rect.top - this.offsetTop) {
            this.style = {
              position: 'fixed',
              top: this.offsetTop + containerRectTop + 'px',
              left: rect.left + containerRectLeft + 'px',
              width: this.width + 'px',
              height: this.height + 'px',
              zIndex: 1030
            }
            this.$emit('change', true);
          } else {
            this.style = {}
            this.$emit('change', false);
          }
        }

        if (this.offsetType === 'bottom') {
          if (scrollTop + offsetHeight >= rect.bottom + this.offsetBottom) {
            this.style = {
              position: 'fixed',
              bottom: containerOffsetBottom + this.offsetBottom + 'px',
              left: rect.left + containerRectLeft + 'px',
              width: this.width + 'px',
              height: this.height + 'px',
              zIndex: 1030
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
