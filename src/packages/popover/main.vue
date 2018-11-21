<template>
  <div class="popover">
    <div
      class="referece"
      ref="referece">
      <slot></slot>
    </div>

    <transtion name="fade">
      <div
        class="popover"
        ref="popover"
        v-transfer>
        <div class="popover-body" :style="{maxWidth: maxWidth}">
          <slot name="content">
            <h5 class="popover-title" v-if="title">{{ title }}</h5>
            <div class="popover-content" v-if="content">{{ content }}</div>
          </slot>
        </div>
        <div x-arrow class="popover-arrow" v-if="arrow"></div>
      </div>
    </transtion>
  </div>
</template>

<script>
  import Popper from 'popper.js';
  import { debounce } from 'debounce-throttle'
  import { OneOf } from '../../utils';
  import ChildEvent from '../../directives/child-event';
  import Transfer from '../../directives/transfer';

  export default {
    name: 'BPopover',
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
      title: String,
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
    }
  };
</script>
