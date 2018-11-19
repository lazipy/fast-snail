<template>
  <div
    class="carousel"
    :style="currentStyle"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave">
    <!-- Carousel Body -->
    <div class="carousel-inner">
      <slot></slot>
    </div>

    <!-- Carousel Indicators -->
    <template v-if="indicator">
      <ol class="carousel-indicators" :class="{ 'carousel-dot': dot }">
        <li
          :class="{ active: activeIndex === index }"
          v-for="(item, index) of items"
          :key="index"
          @mouseenter="handleIndicatorEnter(index)"
          @click="handleIndicatorClick(index)">
        </li>
      </ol>
    </template>

    <!-- Carousel Control -->
    <template v-if="control">
      <!-- Prev -->
      <button
        class="carousel-control carousel-control-prev"
        @mouseenter="handleButtonEnter('right')"
        @click="prev"
        role="button">
        <span class="icon-angle-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <!-- Next -->
      <button
        class="carousel-control carousel-control-next"
        @mouseenter="handleButtonEnter('left')"
        @click="next"
        role="button">
        <span class="icon-angle-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </template>
  </div>
</template>

<script>
  import { throttle } from 'debounce-throttle';

  export default {
    name: 'BCarousel',
    props: {
      initial: {
        type: Number,
        default: 0
      },
      width: Number,
      height: Number,
      control: {
        type: Boolean,
        default: true
      },
      indicator: {
        type: Boolean,
        default: true
      },
      dot: {
        type: Boolean,
        default: false
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      }
    },
    data () {
      return {
        activeIndex: 0,
        items: []
      };
    },
    computed: {
      currentStyle () {
        return {
          width: this.width + 'px',
          height: this.height + 'px'
        };
      }
    },
    created () {
      this.throttleSetActive = throttle(this.setActiveIndex, 600);
    },
    mounted () {
      this.items = this.$children;
      this.activeIndex = this.initial;
      this.autoplay && this.play();
    },
    methods: {
      handleEnter () {
        if (this.autoplay && this.timer) {
          window.clearInterval(this.timer);
        }
      },
      handleLeave () {
        this.autoplay && this.play();
      },
      // autoplay
      play () {
        this.timer = setInterval(() => {
          this.updateAnimate('carousel-left');
          this.$nextTick(() => {
            this.setActiveIndex(this.activeIndex + 1);
          });
        }, this.interval);
      },
      // set active index
      setActiveIndex (index) {
        if (index > this.items.length - 1) {
          this.activeIndex = 0;
        } else if (index < 0) {
          this.activeIndex = this.items.length - 1;
        } else {
          this.activeIndex = index;
        }
      },
      // update children animate
      updateAnimate (animate) {
        this.items.forEach(item => {
          item.animate = animate;
        });
      },
      // Control
      handleButtonEnter (arrow) {
        this.updateAnimate('carousel-' + arrow);
      },
      prev () {
        this.throttleSetActive(this.activeIndex - 1);
      },
      next () {
        this.throttleSetActive(this.activeIndex + 1);
      },
      // Indicator
      handleIndicatorEnter (index) {
        if (this.activeIndex === index) return;
        this.updateAnimate(this.activeIndex > index ? 'carousel-right' : 'carousel-left');
      },
      handleIndicatorClick (index) {
        if (this.activeIndex === index) return;
        this.throttleSetActive(index);
      }
    }
  };
</script>
