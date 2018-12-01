<template>
  <div class="drawer" :class="wrapClass" v-transfer="transfer">
    <transition :name="`fade-${placement}`">
      <div class="drawer-content" v-scroller v-if="currentVisble" :class="classes" :style="currentStyle">
        <button class="close" @click="close">&times;</button>
        <h5 class="drawer-title" v-if="this.$slots.title">
          <slot name="title"></slot>
        </h5>
        <div class="drawer-body" v-if="this.$slots.default">
          <slot></slot>
        </div>
      </div>
    </transition>
    <s-masker
      v-if="mask"
      :color="maskColor"
      :transfer="false"
      :visible.sync="currentVisble"
      :closeable="maskClickClose">
    </s-masker>
  </div>
</template>

<script>
  import { OneOf } from '../../utils';
  import SMasker from '../masker/main';

  export default {
    name: 'SDrawer',
    components: { SMasker },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 260
      },
      placement: {
        type: String,
        default: 'right',
        validator: OneOf(['left', 'right'])
      },
      customClass: {
        type: String
      },
      transfer: {
        type: Boolean,
        default: false
      },
      closeable: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskColor: {
        type: String
      },
      maskClickClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
      };
    },
    computed: {
      currentVisble: {
        get () {
          return this.visible;
        },
        set (val) {
          this.$emit('update:visible', val);
          this.$emit('change', val);
        }
      },
      wrapClass () {
        return [
          this.currentVisble ? 'drawer-show' : '',
          this.customClass
        ];
      },
      classes () {
        return [
          `drawer-${this.placement}`
        ];
      },
      currentStyle () {
        return {
          width: this.width + 'px'
        };
      }
    },
    methods: {
      close () {
        this.currentVisble = false;
        this.$emit('close');
      }
    }
  };
</script>
