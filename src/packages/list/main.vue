<template>
  <div class="list-container">
    <ul class="list" :class="classes" :style="currentStyle">
      <li class="list-header list-item" v-if="$slots.header">
        <slot name="header"></slot>
      </li>
      <slot></slot>
      <li class="list-footer list-item" v-if="$slots.footer">
        <slot name="footer"></slot>
      </li>
    </ul>
    <s-loading v-if="loading" :text="loadingText"></s-loading>
  </div>
</template>

<script>
  import SLoading from '../loading/main';

  export default {
    name: 'SList',
    components: { SLoading },
    props: {
      flush: {
        type: Boolean,
        default: false
      },
      height: Number,
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: '加载中...'
      }
    },
    computed: {
      classes () {
        return [
          this.flush ? 'list-flush' : '',
          this.height ? 'fixed-height' : ''
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
