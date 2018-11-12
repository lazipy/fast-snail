<template>
  <transition name="b-fade">
    <div v-if="visible" class="alert" :class="classes" role="alert">
      <h4 v-if="title" class="alert-heading">
        {{ title }}
        <button v-if="close" @click="close" type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </h4>
      <slot></slot>
      <button v-if="close && !title"  @click="close" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </transition>
</template>

<script>
import { OneOf } from '../../utils/index'

export default {
  name: 'BAlert',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: OneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
    },
    title: String,
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: true
    };
  },
  computed: {
    classes () {
      return [
        this.close ? 'alert-dismissible' : '',
        `alert-${this.type}`
      ]
    }
  },
  methods: {
    close () {
      this.visible = false;
      this.$emit('closed');
    }
  }
};
</script>

<style lang="scss" scoped>
  button:focus {
    outline: none;
  }
</style>
