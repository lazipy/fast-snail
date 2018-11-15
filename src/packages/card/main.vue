<template>
  <div class="card" :class="classes">
    <slot>
      <!-- 标题 -->
      <div class="card-header" v-if="header || $slots.header">
        <slot name="header">{{ header }}</slot>
      </div>
      <!-- 主体 -->
      <div class="card-body">
        <!-- 图片 -->
        <div class="card-img-top" v-if="['top', 'left'].includes(fixed) && src">
          <img :src="src" alt="">
        </div>
        <!-- 内容 -->
        <div class="card-inner">
          <h5 class="card-title" v-if="title">{{ title }}</h5>
          <h6 class="card-subtitle" v-if="subtitle">{{ subtitle }}</h6>
          <slot name="body">
            <p class="card-text" v-if="text">{{ text }}</p>
          </slot>
          <div class="card-operation" v-if="$slots.actions">
            <slot name="actions"></slot>
          </div>
        </div>
        <!-- 图片 -->
        <div class="card-img-bottom" v-if="['bottom', 'right'].includes(fixed) && src">
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
      mode: {
        type: String,
        default: 'vertical',
        validator: OneOf(['horizontal', 'vertical'])
      },
      header: String,
      footer: String,
      title: String,
      subtitle: String,
      text: String,
      src: String,
      fixed: {
        type: String,
        default: 'top',
        validator: OneOf(['top', 'bottom', 'left', 'right'])
      }
    },
    computed: {
      classes () {
        return [
          `card-${this.mode}`
        ];
      }
    }
  };
</script>
