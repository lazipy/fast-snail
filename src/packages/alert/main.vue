<template>
  <transition name="fade">
    <div class="alert" v-if="visible" :style="customStyle" :class="classes" role="alert">
      <h4 class="alert-heading" v-if="title">
        <i class="alert-icon" :class="iconClass" v-if="showIcon"></i>
        {{ title }}
      </h4>
      <i class="alert-icon" :class="iconClass" v-if="showIcon && !title"></i>
      <slot></slot>
      <!-- <button
        class="close"
        v-if="closeable"
        @click="handleClickClose"
        data-dismiss="alert"
        aria-label="Close">
        <i class="icon-cancel"></i>
      </button> -->
    </div>
  </transition>
</template>

<script>
  import { themes, OneOf } from '../../utils';

  export default {
    name: 'BAlert',
    props: {
      type: {
        type: String,
        default: 'primary',
        validator: OneOf(themes)
      },
      title: String,
      showIcon: {
        type: Boolean,
        default: false
      },
      icon: String,
      closeable: {
        type: Boolean,
        default: false
      },
      customStyle: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        visible: true,
        iconConfig: {
          primary: 'info-circled',
          secondary: 'info-circled',
          success: 'ok-circled',
          warning: 'attention-circled',
          info: 'info-circled',
          danger: 'cancel-circled',
          light: 'info-circled',
          dark: 'info-circled'
        }
      };
    },
    computed: {
      classes () {
        return `alert-${this.type}`;
      },
      iconClass () {
        return this.icon || `icon-${this.iconConfig[this.type]}`
      }
    },
    methods: {
      handleClickClose () {
        this.visible = false;
        this.$emit('close');
      }
    }
  };
</script>
