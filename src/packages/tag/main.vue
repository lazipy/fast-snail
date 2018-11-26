<template>
  <transition name="zoom-center">
    <span class="tag" :class="classes" :style="currentStyle" @click="handleClick" v-if="visible">
      <slot></slot>
      <span class="tag-close" @click="close" v-if="closable">
        <i class="icon-cancel"></i>
      </span>
    </span>
  </transition>
</template>

<script>
  import { OneOf } from '../../utils';

  export default {
    name: 'STag',
    props: {
      color: String,
      closable: {
        type: Boolean,
        default: false
      },
      navigator: String
    },
    data () {
      return {
        colors: ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'],
        visible: true
      };
    },
    computed: {
      classes () {
        return [
          this.colors.includes(this.color) ? `tag-${this.color}` : ''
        ];
      },
      currentStyle () {
        let style = {};
        if (this.color && !this.colors.includes(this.color)) {
          style = Object.assign(style, {
            backgroundColor: this.color,
            borderColor: this.color,
            color: '#fff'
          });
        }
        return style;
      }
    },
    methods: {
      handleClick () {
        this.navigator && this.$router.push(this.navigator);
        this.$emit('click');
      },
      close () {
        this.visible = false;
      }
    }
  };
</script>
