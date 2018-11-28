<template>
  <div class="timeline-item" :class="classes">
    <div class="timeline-icon">
      <slot name="icon">
        <span class="timeline-dot"></span>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'STimelineItem',
    props: {
      color: {
        type: String,
        default: 'blue',
        validator: OneOf(['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'])
      }
    },
    computed: {
      classes () {
        return [
          `timeline-${this.color}`
        ];
      }
    }
  };
</script>
