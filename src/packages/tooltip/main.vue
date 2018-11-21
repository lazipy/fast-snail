<template>
  <div class="tooltip-wrap">
    <div
      class="tooltip-reference"
      ref="reference"
      @click="handleRefereceClick"
      v-child-event="{ events: ['focus', 'blur'], handlers: [handleRefereceFocus, handleRefereceBlur] }"
      @mouseenter="handleRefereceEnter"
      @mouseleave="handleRefereceLeave">
      <slot></slot>
    </div>

    <transition name="fade">
      <div
        class="tooltip"
        ref="popper"
        v-transfer
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
  import { debounce } from 'debounce-throttle'
  import { OneOf } from '../../utils';
  import ChildEvent from '../../directives/child-event';
  import Transfer from '../../directives/transfer';

  export default {
    name: 'BTooltip',
    directives: {
      ChildEvent,
      Transfer
    },
    props: {
      trigger: {
        type: String,
        default: 'hover',
        validator: OneOf(['hover', 'click', 'focus'])
      },
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
        type: String,
        required: true
      },
      showDelay: {
        type: Number,
        default: 0
      },
      hideDelay: {
        type: Number,
        default: 200
      },
      maxWidth: String,
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
    created () {
      this.debounceShow = debounce(this.show, this.showDelay);
      this.debounceHide = debounce(this.hide, this.hideDelay);
    },
    mounted () {
      this.popper = new Popper(this.$refs.reference, this.$refs.popper, this.config);
    },
    destroyed () {
      this.popper = null;
      this.timer = null;
    },
    methods: {
      // Referece
      // Trigger focus
      handleRefereceFocus () {
        if (this.trigger !== 'focus') return;
        this.delayShow();
      },
      handleRefereceBlur () {
        if (this.trigger !== 'focus') return;
        this.delayHide();
      },
      // Trigger click
      handleRefereceClick () {
        if (this.trigger !== 'click') return;
        if (this.visible) {
          this.debounceHide();
        } else {
          this.debounceShow();
        }
      },
      // Trigger hover
      handleRefereceEnter () {
        if (this.trigger !== 'hover') return;
        this.delayShow();
      },
      handleRefereceLeave () {
        if (this.trigger !== 'hover') return;
        this.delayHide();
      },
      // Tooltip
      handleTooltipEnter () {
        if (this.trigger !== 'hover') return;
        if (this.enterable && this.timer) {
          clearTimeout(this.timer);
        }
      },
      handleTooptipLeave () {
        if (this.trigger !== 'hover') return;
        this.delayHide();
      },
      // delay show
      delayShow () {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(this.show, this.showDelay);
      },
      delayHide () {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(this.hide, this.hideDelay);
      },
      // Show
      show () {
        this.visible = true;
        this.popper.update();
      },
      // Hide
      hide () {
        this.visible = false;
      }
    }
  };
</script>
