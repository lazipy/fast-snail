<template>
  <div class="timeline">
    <slot></slot>

    <s-timeline-item v-if="pending">
      <slot name="pendingIcon" slot="icon">
        <i class="icon-spinner spinner"></i>
      </slot>
      {{ pending }}
    </s-timeline-item>
  </div>
</template>

<script>
  import STimelineItem from './item';

  export default {
    name: 'STimeline',
    components: { STimelineItem },
    props: {
      pending: String
    }
  };
</script>
