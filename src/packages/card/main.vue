<template>
  <div class="card" :class="classes" :style="currentStyle">
    <slot>
      <!-- 标题 -->
      <div class="card-header" v-if="header || $slots.header">
        <slot name="header">{{ header }}</slot>
      </div>

      <!-- 主体 -->
      <div class="card-body">
        <!-- 图片 -->
        <div class="card-img" v-if="position === 'before' && src">
          <img :src="src" alt="">
        </div>
        <div class="card-inner">
          <slot name="body">
            <h5 class="card-title" v-if="title">{{ title }}</h5>
            <h6 class="card-subtitle" v-if="subtitle">{{ subtitle }}</h6>
            <p class="card-text" v-if="text">{{ text }}</p>
          </slot>
        </div>
        <div class="card-actions">
          <slot name="actions"></slot>
        </div>
        <!-- 图片 -->
        <div class="card-img" v-if="position === 'after' && src">
          <img :src="src" alt="">
        </div>
      </div>

      <!-- 尾部 -->
      <div class="card-footer" v-if="footer || $slots.footer">
        <slot name="footer">{{ footer }}</slot>
      </div>
    </slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'BCard',
    props: {
      status: {
        type: String,
        default: 'shadow',
        validator: OneOf(['shadow', 'border'])
      },
      width: Number,
      height: Number,
      header: String,
      footer: String,
      title: String,
      subtitle: String,
      text: String,
      src: String,
      position: {
        type: String,
        default: 'before',
        validator: OneOf(['before', 'after'])
      }
    },
    computed: {
      classes () {
        return [
          `card-${this.status}`
        ];
      },
      currentStyle () {
        return {
          width: this.width + 'px',
          height: this.height + 'px'
        };
      }
    }
  };
</script>
