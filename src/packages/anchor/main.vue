<template>
  <s-affix :affix="affix" :offsetTop="affixTop" :container="affixContainer">
    <div class="anchor">
      <div class="anchor-line">
        <span
          class="anchor-dot"
          :style="currentStyle"
          v-if="this.showDot && this.current">
        </span>
      </div>
      <slot></slot>
    </div>
  </s-affix>
</template>

<script>
  import SAffix from '../affix/main';
  import { on, off, getRect } from '../../utils/dom';

  export default {
    name: 'SAnchor',
    components: { SAffix },
    props: {
      affix: {
        type: Boolean,
        default: true
      },
      affixTop: {
        type: Number,
        default: 0
      },
      affixContainer: {
        type: [HTMLElement, Window, String],
        default: () => window
      },
      offsetTop: {
        type: Number,
        default: 0
      },
      offsetBottom: Number,
      bounds: {
        type: Number,
        default: 5
      },
      container: {
        type: [HTMLElement, Window, String],
        default: () => window
      },
      showDot: {
        type: Boolean,
        default: true
      }
    },
    provide () {
      return {
        bounds: this.bounds,
        offsetTop: this.offsetTop,
        offsetBottom: this.offsetBottom
      };
    },
    data () {
      return {
        scrollContainer: null,
        scrollElement: null,
        items: [],
        rects: [],
        current: null
      };
    },
    computed: {
      currentStyle () {
        const moveY = (
          this.current.$el.offsetTop +
          this.current.$el.offsetHeight / 2 -
          5
        );
        return {
          transform: `translateY(${moveY}px)`
        };
      },
      offsetType () {
        return this.offsetBottom || this.offsetBottom === 0 ? 'bottom' : 'top'
      },
      containerIsWindow () {
        return this.scrollContainer === window;
      }
    },
    watch: {
      'route' () {
        this.init();
        this.handleScroll();
      }
    },
    mounted () {
      this.init();
      this.handleScroll();
      this.bindEvent();
    },
    destroyed () {
      this.unbindEvent();
    },
    methods: {
      init () {
        this.getContainer();
        this.items = this.$children[0].$children;
        this.items.forEach(child => {
          let anchor = document.querySelector(child.href);
          let rect = getRect(anchor, this.scrollElement);
          this.rects.push(rect);
        });
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
        const containerRectTop = this.containerIsWindow ? 0 : getRect(this.scrollContainer, document.body).top;
        const containerRectLeft = this.containerIsWindow ? 0 : getRect(this.scrollContainer, document.body).left;
        const containerOffsetBottom = this.containerIsWindow ? 0 : window.innerHeight - containerRectTop - this.scrollContainer.offsetHeight;
        const scrollTop = this.containerIsWindow ? this.scrollContainer.pageYOffset : this.scrollContainer.scrollTop;
        const offsetHeight = this.containerIsWindow ? this.scrollContainer.innerHeight : this.scrollContainer.offsetHeight;

        this.rects.forEach((rect, index) => {
          this.items[index].active = false;

          if (
            this.offsetType === 'bottom' &&
            scrollTop + offsetHeight >= rect.bottom + this.offsetBottom + this.bounds
          ) {
            this.setCurrent(index);
          } else if (scrollTop >= rect.top - this.offsetTop - this.bounds) {
            this.setCurrent(index);
          }
        });
      },
      setCurrent (index) {
        this.current = this.items[index];
        this.$emit('change', this.current.href);
        this.$nextTick(() => {
          this.current.active = true;
        });
      },
      bindEvent () {
        on(this.scrollContainer, 'scroll', this.handleScroll);
        on(window, 'resize', this.handleScroll);
      },
      unbindEvent () {
        off(this.scrollContainer, 'scroll', this.handleScroll);
        off(window, 'resize', this.handleScroll);
      }
    }
  };
</script>
