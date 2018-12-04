<template>
  <div class="drawer" :class="wrapClass" v-transfer="transfer">
    <transition :name="`fade-${placement}`">

      <draggable-resizable
        class="drawer-content"
        :active="true"
        :class="classes"
        v-if="currentVisble"
        :handles="['ml', 'mr']"
        :w="currentWidth"
        @resizing="resize"
        :resizable="resizable"
        :draggable="false">
        <s-scroller ref="scroll">
          <button class="close" v-if="closeable" @click="close">&times;</button>
          <h5 class="drawer-title" v-if="this.$slots.title">
            <slot name="title"></slot>
          </h5>
          <div class="drawer-body" v-if="this.$slots.default">
            <slot></slot>
          </div>
        </s-scroller>
      </draggable-resizable>

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
  import DraggableResizable from 'vue-draggable-resizable';
  import SMasker from '../masker/main';
  import SScroller from '../scroller/main';

  export default {
    name: 'SDrawer',
    components: { DraggableResizable, SMasker, SScroller },
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
      resizable: {
        type: Boolean,
        default: false
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
        currentWidth: this.width
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
          width: this.currentWidth + 'px'
        };
      }
    },
    methods: {
      resize (left, top, w, h) {
        this.currentWidth = w;
        this.$refs.scroll.refresh();
      },
      close () {
        this.currentVisble = false;
        this.$emit('close');
      }
    }
  };
</script>
