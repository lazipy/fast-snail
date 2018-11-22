<template>
  <div class="popover-wrap">
    <div
      class="popover-reference"
      ref="reference"
      @click="handleReferenceClick"
      v-child-event="{ events: ['focus', 'blur'], handlers: [handleReferenceFocus, handleReferenceBlur] }"
      @mouseenter="handleReferenceEnter"
      @mouseleave="handleReferenceLeave">
      <slot></slot>
    </div>

    <transition name="fade">
      <div
        class="popover"
        ref="popper"
        v-transfer
        v-if="isMounted"
        v-show="visible"
        @mouseenter="handleTooltipEnter"
        @mouseleave="handleTooptipLeave"
        role="tooltip">
        <div class="popover-body" :style="{maxWidth: maxWidth}">
          <slot name="content">
            <h5 class="popover-title" v-if="title">{{ title }}</h5>
            <div class="popover-content" v-if="content">{{ content }}</div>
          </slot>
        </div>
        <div x-arrow class="popover-arrow" v-if="arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import popper from '../../mixins/popper';
  import { OneOf } from '../../utils';

  export default {
    name: 'BPopover',
    mixins: [popper],
    props: {
      title: String,
      trigger: {
        type: String,
        default: 'click',
        validator: OneOf(['hover', 'click', 'focus'])
      },
      placement: {
        type: String,
        default: 'top',
        validator: OneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
      }
    }
  };
</script>
