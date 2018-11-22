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

    <transition name="fade-rotate-down">
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
      }
    }
  };
</script>
