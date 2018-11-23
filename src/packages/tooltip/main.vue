<template>
  <div class="tooltip-wrap" v-out-click="handleOutClick">
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
        @click.stop="() => { return false; }"
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

  export default {
    name: 'STooltip',
    mixins: [popper],
    props: {
      trigger: {
        default: 'hover'
      },
      placement: {
        default: 'bottom'
      },
      content: {
        type: String,
        required: true
      }
    }
  };
</script>
