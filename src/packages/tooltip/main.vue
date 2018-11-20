<template>
  <div class="tooltip-wrap">
    <div
      ref="reference"
      class="tooltip-reference"
      @mouseenter="handleRefereceEnter"
      @mouseleave="handleRefereceLeave">
      <slot></slot>
    </div>

    <transition name="fade">
      <div
        ref="popper"
        class="tooltip"
        v-show="visible"
        @mouseenter="handleTooltipEnter"
        @mouseleave="handleTooptipLeave">
        <div class="tooltip-content" :style="{maxWidth: maxWidth}">{{ content }}</div>
        <div x-arrow class="tooltip-arrow" v-if="arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Popper from 'popper.js';
  import { OneOf } from '../../utils';

  export default {
    name: 'BTooltip',
    props: {
      placement: {
        type: String,
        default: 'bottom',
        validator: OneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
      },
      offset: {
        type: [Number, String],
        default: 0
      },
      options: {
        type: Object,
        default: () => {}
      },
      content: {
        type: String
      },
      showDelay: {
        type: Number,
        default: 0
      },
      hideDelay: {
        type: Number,
        default: 200
      },
      maxWidth: {
        type: String
      },
      enterable: {
        type: Boolean,
        default: true
      },
      arrow: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        popper: null,
        visible: false
      };
    },
    computed: {
      config () {
        return {
          placement: this.placement,
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            },
            preventOverflow: {
              boundariesElement: 'body'
            },
            offset: {
              offset: this.offset
            }
          }
        };
      }
    },
    mounted () {
      this.popper = new Popper(this.$refs.reference, this.$refs.popper, this.config);
    },
    destroyed () {
      this.popper = null;
      clearTimeout(this.timer);
    },
    methods: {
      // Referece
      handleRefereceEnter () {
        this.show();
      },
      handleRefereceLeave () {
        this.hide();
      },
      // Tooltip
      handleTooltipEnter () {
        if (this.enterable) {
          clearTimeout(this.timer);
        }
      },
      handleTooptipLeave () {
        this.hide();
      },
      // Show
      show () {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
          this.visible = true;
          this.popper.update();
        }, this.showDelay);
      },
      // Hide
      hide () {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
          this.visible = false;
        }, this.hideDelay);
      }
    }
  };
</script>
