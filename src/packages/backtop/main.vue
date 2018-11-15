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
  import { scrollTop, on, off } from '../../utils/dom';

  export default {
    name: 'BBacktop',
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
        visible: false,
        speed: 2
      };
    },
    computed: {
      currentStyle () {
        return {
          bottom: this.bottom + 'px',
          right: this.right + 'px'
        };
      },
      innerStyle () {
        return {
          width: this.width + 'px',
          height: this.height + 'px',
          lineHeight: this.height + 'px'
        };
      }
    },
    mounted () {
      on(window, 'scroll', this.scroll);
      on(window, 'resize', this.scroll);
    },
    destroyed () {
      off(window, 'scroll', this.scroll);
      off(window, 'resize', this.scroll);
    },
    methods: {
      scroll () {
        this.visible = window.pageYOffset >= this.offset;
      },
      backtop () {
        const pageYOffset = window.pageYOffset; // 获取当前需要滚动的距离

        scrollTop(window, pageYOffset, 0, this.duration, () => {
          this.$emit('scrolled');
        });
      }
    }
  };
</script>

