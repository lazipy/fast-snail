<template>
  <div class="step" :class="classes" :style="currentStyle">
    <div class="step-icon">
      <span :class="currentIcon" v-if="currentIcon && !dot"></span>
      <span class="step-dot" v-if="dot"></span>
      <span v-if="!currentIcon && !dot">{{ index + 1 }}</span>
    </div>
    <div class="step-content">
      <div class="step-title" v-if="title">{{ title }}</div>
      <p class="step-description" v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'SStep',
    props: {
      title: String,
      description: String,
      icon: String,
      status: {
        type: String,
        validator: OneOf(['success', 'error', 'finish', 'process', 'wait'])
      }
    },
    inject: ['finishStatus', 'processStatus', 'dot'],
    computed: {
      index () {
        return this.$parent.items.findIndex(item => {
          return item._uid === this._uid;
        });
      },
      currentStatus () {
        let status = (
          this.status ? this.status :
          this.index === this.$parent.active ? this.processStatus :
          this.index === this.$parent.active - 1 ? this.finishStatus :
          'wait'
        );

        return status;
      },
      currentIcon () {
        let icon = (
          this.icon ? this.icon :
          this.currentStatus === 'success' ? 'icon-ok' :
          this.currentStatus === 'error' ? 'icon-cancel' :
          ''
        );
        return icon;
      },
      classes () {
        return [
          `step-${this.currentStatus}`
        ];
      },
      currentStyle () {
        if (this.index === this.$parent.items.length - 1) {
          return {
            maxWidth: 1 / this.$parent.items.length * 100 + '%'
          };
        }
        return {};
      }
    }
  };
</script>
