<template>
  <div class="modal" :class="wrapClass" v-transfer="transfer">
    <transition name="fade-up" @afterLeave="closed">
      <draggable-resizable
        class="modal-wrap"
        :active="true"
        v-if="currentVisble"
        :x="currentLeft"
        :y="currentTop"
        :w="width"
        :resizable="false"
        @dragging="handleDrag"
        :draggable="draggable">
        <button class="close" v-if="closeable" @click="close">&times;</button>
        <div class="modal-title" :class="{ 'modal-dragable': draggable }" v-if="$slots.title || this.title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div class="modal-body" @touchdown.stop="() => false" @mousedown.stop="() => false">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer" @touchdown.stop="() => false" @mousedown.stop="() => false">
          <slot name="footer">
            <s-button type="light" @click="handleCancel">{{cancelText}}</s-button>
            <s-button :type="confirmType" @click="handleConfirm">{{confirmText}}</s-button>
          </slot>
        </div>
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
  import Transfer from '../../directives/transfer';

  export default {
    name: 'SModal',
    components: { DraggableResizable, SMasker },
    directives: { Transfer },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      },
      left: {
        type: Number,
        default: 0
      },
      top: {
        type: Number,
        default: 80
      },
      width: {
        type: Number,
        default: 560
      },
      customClass: {
        type: String
      },
      draggable: {
        type: Boolean,
        default: true
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      confirmText: {
        type: String,
        default: 'Confirm'
      },
      confirmType: {
        type: String,
        default: 'primary'
      },
      transfer: {
        type: Boolean,
        default: false
      },
      closeable: {
        type: Boolean,
        default: true
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
          this.currentVisble ? 'modal-show' : '',
          this.customClass
        ];
      },
      currentLeft: {
        get () {
          return this.left;
        },
        set (val) {
          this.$emit('dragging', val);
        }
      },
      currentTop: {
        get () {
          return this.top;
        },
        set (val) {
          this.$emit('dragging', val);
        }
      }
    },
    methods: {
      handleCancel () {
        this.currentVisble = false;
        this.$emit('cancel');
      },
      handleConfirm () {
        this.$emit('confirm');
      },
      close () {
        this.currentVisble = false;
        this.$emit('close');
      },
      closed () {
        this.$emit('closed')
      },
      handleDrag (x, y) {
        this.currentLeft = x;
        this.currentTop = y;
      }
    }
  };
</script>
