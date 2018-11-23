<template>
  <div class="dropdown-wrap" v-out-click="handleOutClick">
    <div
      class="dropdown-reference"
      ref="reference"
      @click="handleReferenceClick"
      v-child-event="{ events: ['focus', 'blur'], handlers: [handleReferenceFocus, handleReferenceBlur] }"
      @mouseenter="handleReferenceEnter"
      @mouseleave="handleReferenceLeave">
      <slot></slot>
    </div>

    <transition name="fade-rotate">
      <div
        class="dropdown"
        ref="popper"
        v-transfer
        v-if="isMounted"
        v-show="visible"
        @click.stop="() => { return false; }"
        @mouseenter="handleTooltipEnter"
        @mouseleave="handleTooptipLeave"
        role="dropdown">
        <div class="dropdown-content" :style="{maxWidth: maxWidth}">
          <slot name="dropdown"></slot>
        </div>
        <div x-arrow class="dropdown-arrow" v-if="arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import popper from '../../mixins/popper';

  export default {
    name: 'BDropdown',
    mixins: [popper],
    props: {
      trigger: {
        default: 'click'
      },
      placement: {
        default: 'bottom-start'
      },
      itemClickHidden: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      config () {
        const _self = this;
        return Object.assign(this.default, {
          onCreate (data) {
            _self.updateOrigin(data);
          },
          onUpdate (data) {
            _self.updateOrigin(data);
          }
        }, this.options);
      }
    },
    provide () {
      return {
        clickHidden: this.itemClickHidden
      };
    },
    methods: {
      updateOrigin (data) {
        if (data.placement.match('bottom')) {
          this.$refs.popper.style.transformOrigin = 'center top';
        } else {
          this.$refs.popper.style.transformOrigin = 'center bottom';
        }
      }
    }
  };
</script>
