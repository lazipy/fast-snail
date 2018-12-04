<template>
  <div class="modal" :class="wrapClass" v-transfer="transfer">
    <transition name="fade-up" @afterLeave="closed">
      <draggable-resizable
        class="modal-wrap"
        :active="true"
        v-if="currentVisble"
        :y="top"
        :w="width"
        :resizable="false"
        :draggable="draggable">
        <button class="close" v-if="closeable" @click="close">&times;</button>
        <div class="modal-header" v-if="$slots.title || this.title">
          <slot name="title">
            <div class="modal-title">{{ title }}</div>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <s-button type="light" @click="handleCancel">{{cancelText}}</s-button>
            <s-button type="primary" @click="handleConfirm">{{confirmText}}</s-button>
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

  export default {
    name: 'SModal',
    components: { DraggableResizable, SMasker },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
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
        default: false
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      confirmText: {
        type: String,
        default: 'Confirm'
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
      }
    }
  };
</script>
