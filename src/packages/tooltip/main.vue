<template>
  <div class="tooltip-wrap">
    <div ref="reference" class="tooltip-reference" @mouseenter="showPopper" @mouseleave="hidePopper">
      <slot></slot>
    </div>

    <transition name="fade">
      <div ref="popper" v-show="visible" class="tooltip" @mouseenter="enterPopper" @mouseleave="hidePopper">
        <div class="tooltip-inner" :style="{ maxWidth: maxWidth }">{{ content }}</div>
        <div x-arrow class="tooltip-arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'BTooltip',
    props: {
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
      }
    },
  };
</script>
