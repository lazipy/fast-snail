<template>
  <div class="tooltip-wrap">
    <div
      class="tooltip-reference"
      ref="reference"
      @click="handleReferenceClick"
      v-child-event="{ events: ['focus', 'blur'], handlers: [handleReferenceFocus, handleReferenceBlur] }"
      @mouseenter="handleReferenceEnter"
      @mouseleave="handleReferenceLeave">
      <slot></slot>
    </div>

    <transition name="fade">
      <div
        class="tooltip"
        ref="popper"
        v-transfer
        v-if="isMounted"
        v-show="visible"
        @mouseenter="handleTooltipEnter"
        @mouseleave="handleTooptipLeave"
        role="tooltip">
        <div class="tooltip-content" :style="{maxWidth: maxWidth}">{{ content }}</div>
        <div x-arrow class="tooltip-arrow" v-if="arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import popper from '../../mixins/popper';
  import { OneOf } from '../../utils';

  export default {
    name: 'BTooltip',
    mixins: [popper],
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
      }
    }
  };
</script>
