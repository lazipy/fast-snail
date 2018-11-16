<template>
  <div class="bar" :class="classes" :style="currentStyle">
    <slot>
      <div class="bar-img" v-if="src">
        <img :src="src" alt="">
      </div>
      <div class="bar-body">
        <slot name="body">
          <h5 class="bar-title" v-if="title">{{ title }}</h5>
          <p class="bar-text text-ellipsis-2" v-if="text">{{ text }}</p>
          <blockquote class="text-ellipsis" v-if="blockquote">{{ blockquote }}</blockquote>
        </slot>
      </div>
      <div class="bar-actions">
        <slot name="actions"></slot>
      </div>
    </slot>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'BBar',
    props: {
      status: {
        type: String,
        default: 'shadow',
        validator: OneOf(['shadow', 'border'])
      },
      height: Number,
      title: String,
      text: String,
      blockquote: String,
      src: String
    },
    computed: {
      classes () {
        return [
          `bar-${this.status}`
        ];
      },
      currentStyle () {
        return {
          height: this.height + 'px'
        };
      }
    }
  };
</script>
