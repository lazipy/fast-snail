<template>
  <div class="scroller" ref="scroller" @wheel.prevent="handleScroll">
    <div class="scroller-inner" ref="inner" :style="{ transform: `translate(${-translateX}px, ${-translateY}px)` }">
      <slot></slot>
    </div>

    <div class="scroller-bar scroller-bar-y" v-if="showBar && visibleY">
      <div
        class="scroller-tool scroller-tool-y"
        :style="{height: toolHeight + 'px', transform: 'translateY('+ translateY * ratioY +'px)'}"
        @mousedown.prevent="handleYMousedown">
      </div>
    </div>

    <div class="scroller-bar scroller-bar-x" v-if="showBar && visibleX">
      <div
        class="scroller-tool scroller-tool-x"
        :style="{width: toolWidth + 'px', transform: 'translateX('+ translateX * ratioX +'px)'}"
        @mousedown.prevent="handleXMousedown">
      </div>
    </div>
  </div>
</template>

<script>
  import { on, off } from '../../utils/dom';
  import { OneOf } from '../../utils';

  export default {
    name: 'SScroller',
    props: {
      showBar: {
        type: Boolean,
        default: true
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        offsetHeight: 0,
        scrollHeight: 0,
        translateY: 0,
        maxTranslateY: 0,
        visibleY: false,
        toolHeight: 0,
        ratioY: 1,
        pageY: 0,

        offsetWidth: 0,
        scrollWidth: 0,
        translateX: 0,
        maxTranslateX: 0,
        visibleX: false,
        toolWidth: 0,
        ratioX: 1,
        pageX: 0
      };
    },
    mounted () {
      this.init();
    },
    updated () {
      this.init();
    },
    methods: {
      // 初始化滚动数据
      init () {
        this.offsetHeight = this.$refs.scroller.offsetHeight;
        this.scrollHeight = this.$refs.inner.offsetHeight;
        this.maxTranslateY = this.scrollHeight - this.offsetHeight;
        if (this.maxTranslateY > 0) {
          this.visibleY = true;
          this.toolHeight = (this.offsetHeight / this.scrollHeight) * this.offsetHeight;
          this.ratioY = (this.offsetHeight - this.toolHeight) / (this.scrollHeight - this.offsetHeight);
        } else {
          this.visibleY = false;
        }

        this.offsetWidth = this.$refs.scroller.offsetWidth;
        this.scrollWidth = this.$refs.inner.offsetWidth;
        this.maxTranslateX = this.scrollWidth - this.offsetWidth;
        if (this.maxTranslateX > 0) {
          this.visibleX = true;
          this.toolWidth = (this.offsetWidth / this.scrollWidth) * this.offsetWidth;
          this.ratioX = (this.offsetWidth - this.toolWidth) / (this.scrollWidth - this.offsetWidth);
        } else {
          this.visibleX = false;
        }
      },
      update () {
        this.init();
        this.translateY = this.pageY = 0;
        this.translateX = this.pageX = 0;
      },
      scrollX (deltaX) {
        const x = this.translateX + deltaX;
        if (x < 0) {
          this.translateX = 0;
        } else if (x > this.maxTranslateX) {
          this.translateX = this.maxTranslateX;
        } else {
          this.translateX = x;
        }
      },
      scrollY (deltaY) {
        const y = this.translateY + deltaY;
        if (y < 0) {
          this.translateY = 0;
        } else if (y > this.maxTranslateY) {
          this.translateY = this.maxTranslateY;
        } else {
          this.translateY = y;
        }
      },
      scrollTo (x, y) {
        if (x < 0) {
          this.translateX = 0;
        } else if (x > this.maxTranslateX) {
          this.translateX = this.maxTranslateX;
        } else {
          this.translateX = x;
        }

        if (y < 0) {
          this.translateY = 0;
        } else if (y > this.maxTranslateY) {
          this.translateY = this.maxTranslateY;
        } else {
          this.translateY = y;
        }
      },
      handleScroll (e) {
        const deltaX = -e.wheelDeltaX / 3 || e.deltaX;
        const deltaY = -e.wheelDeltaY / 3 || e.deltaY;
        this.scrollTo(this.translateX + deltaX, this.translateY + deltaY);
        if (this.maxTranslateY - this.translateY <= this.offset) {
          this.$emit('will-bottom');
        }
      },

      handleXMousedown (e) {
        this.pageX = e.pageX;
        on(document, 'mousemove', this.handleXMousemove);
        on(document, 'mouseup', this.handleXMouseup);
      },
      handleXMousemove (e) {
        const deltaX = (e.pageX - this.pageX) / this.ratioX;
        this.scrollX(deltaX);
        this.pageX = e.pageX;
      },
      handleXMouseup () {
        off(document, 'mousemove', this.handleXMousemove);
        off(document, 'mouseup', this.handleXMouseup);
      },

      handleYMousedown (e) {
        this.pageY = e.pageY;
        on(document, 'mousemove', this.handleYMousemove);
        on(document, 'mouseup', this.handleYMouseup);
      },
      handleYMousemove (e) {
        const deltaY = (e.pageY - this.pageY) / this.ratioY;
        this.scrollY(deltaY);
        this.pageY = e.pageY;
      },
      handleYMouseup () {
        off(document, 'mousemove', this.handleYMousemove);
        off(document, 'mouseup', this.handleYMouseup);
      }
    }
  };
</script>
