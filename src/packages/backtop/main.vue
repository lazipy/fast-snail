<template>
  <transition name="fade-up">
    <div
      class="backtop"
      v-if="visible"
      :style="currentStyle"
      @click="backtop">
      <div class="backtop-inner" :style="innerStyle">
        <slot>
          <i class="icon-up-open"></i>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import { scrollTop, on, off, getRect } from '../../utils/dom';

  export default {
    name: 'SBacktop',
    props: {
      offset: {
        type: Number,
        default: 400
      },
      bottom: {
        type: Number,
        default: 30
      },
      right: {
        type: Number,
        default: 30
      },
      container: {
        type: [HTMLElement, Window, String],
        default: () => window
      },
      width: {
        type: Number,
        default: 50
      },
      height: {
        type: Number,
        default: 40
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        scrollContainer: null,
        scrollElement: null,
        visible: false,
        scrollTop: 0,
        currentStyle: {}
      };
    },
    computed: {
      innerStyle () {
        return {
          width: this.width + 'px',
          height: this.height + 'px',
          lineHeight: this.height + 'px'
        };
      },
      containerIsWindow () {
        return this.scrollContainer === window;
      }
    },
    watch: {
      'route' () {
        this.getContainer();
        this.scroll();
      }
    },
    mounted () {
      this.getContainer();
      this.scroll();
      on(this.scrollContainer, 'scroll', this.scroll);
      on(window, 'resize', this.scroll);
    },
    destroyed () {
      off(this.scrollContainer, 'scroll', this.scroll);
      off(window, 'resize', this.scroll);
    },
    methods: {
      getContainer () {
        if (typeof this.container === 'string') {
          this.scrollContainer = document.querySelector(this.container);
          this.scrollContainer.style.position = 'relative';
        } else {
          this.scrollContainer = this.container;
        }
        this.scrollElement = this.containerIsWindow ? document.body : this.scrollContainer;
      },
      computedStyle () {
        let style = {};
        if (typeof this.container === 'string') {
          const rect = getRect(this.scrollElement, document.body);
          style.position = 'fixed';
          style.bottom = window.innerHeight - rect.bottom + this.bottom + 'px';
          style.right = window.innerWidth - rect.right + this.right + 'px';
        } else {
          style.position = 'fixed';
          style.bottom = this.bottom + 'px';
          style.right = this.right + 'px';
        }
        this.currentStyle = style;
      },
      scroll () {
        this.scrollTop = this.containerIsWindow ? this.scrollContainer.pageYOffset : this.scrollContainer.scrollTop;
        this.visible = this.scrollTop >= this.offset;
        this.computedStyle();
      },
      backtop () {
        scrollTop(this.scrollContainer, this.scrollTop, 0, this.duration, () => {
          this.$emit('scrolled');
        });
      }
    }
  };
</script>

