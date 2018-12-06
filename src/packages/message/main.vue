<template>
  <transition name="fade-down">
    <div v-show="visible" v-transfer class="message">
      <i :class="iconClass"></i>
      <p class="message-content">
        <slot>
          {{message}}
        </slot>
      </p>

      <button class="close" v-if="closeable" @click="close">&times;</button>
    </div>
  </transition>
</template>

<script>
  import { OneOf } from '../../utils';
  import Transfer from '../../directives/transfer';

  export default {
    name: 'SMessage',
    directives: { Transfer },
    props: {
      type: {
        type: String,
        default: 'info',
        validator: OneOf(['info', 'success', 'warning', 'error'])
      },
      message: {
        type: String
      },
      duration: {
        type: Number,
        default: 2000
      },
      closeable: {
        type: Boolean,
        default: false
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        items: [],
        index: -1,
        visible: true,
        iconOptions: {
          info: 'info-circled',
          success: 'ok-circled',
          warning: 'attention-circled',
          error: 'cancel-circled'
        }
      };
    },
    computed: {
      iconClass () {
        return [
          `icon-${this.iconOptions[this.type]}`,
          `icon-${this.type}`
        ];
      }
    },
    mounted () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false;
          clearTimeout(this.timer);
        }, this.duration);
      }
    },
    destroyed () {
      this.timer = null
    },
    methods: {
      close () {
        this.visible = false;
        this.$emit('close');
      }
    }
  };
</script>
