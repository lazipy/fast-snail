<template>
  <div class="dropdown-wrap" v-out-click="handleOutClick">
    <div class="dropdown-reference btn-dropdown" ref="reference">
      <button
        class="btn"
        :class="classes"
        @click="handleReferenceClick"
        @mouseenter="handleReferenceEnter"
        @mouseleave="handleReferenceLeave"
        v-if="!split">
        <slot></slot>
        <i class="icon-angle-down btn-arrow" :class="{ 'active': visible }"></i>
      </button>

      <div class="btn-group" v-if="split">
        <button
          class="btn"
          :class="classes"
          @click="handleClick">
          <slot></slot>
        </button>
        <button
          class="btn btn-split"
          :class="classes"
          @click="handleReferenceClick"
          @mouseenter.stop="handleReferenceEnter"
          @mouseleave.stop="handleReferenceLeave">
          <i class="icon-angle-down btn-arrow" :class="{ 'active': visible }"></i>
        </button>
      </div>
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
  import { OneOf, themes } from '../../utils';

  export default {
    name: 'SDropdownButton',
    mixins: [popper],
    props: {
      type: {
        type: String,
        default: 'primary',
        validator: OneOf([...themes, 'link'])
      },
      size: {
        type: String,
        validator: OneOf(['large', 'small'])
      },
      split: {
        type: Boolean,
        default: false
      },
      trigger: {
        default: 'hover',
        validator: OneOf(['hover', 'click'])
      },
      placement: {
        default: 'bottom-start',
        validator: OneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'])
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
      },
      classes () {
        return [
          `btn-${this.type}`,
          this.size ? `btn-${this.size}` : ''
        ];
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
      },
      handleClick () {
        this.$emit('click');
      }
    }
  };
</script>
