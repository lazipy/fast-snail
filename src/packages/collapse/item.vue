<template>
  <div class="collapse-item">
    <div class="collapse-title" @click="handleTitleClick" :disabled="disabled">
      {{ title }}
      <i class="icon-angle-right arrow" :class="{ active: visible }"></i>
    </div>
    <CollapseAnimate>
      <div class="collapse-content" v-show="visible">
        <slot></slot>
      </div>
    </CollapseAnimate>
  </div>
</template>

<script>
  import { array_remove } from '../../utils/data';
  import CollapseAnimate from '../animate/collapse';

  export default {
    name: 'BCollapseItem',
    components: { CollapseAnimate },
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        accordion: this.$parent.accordion
      };
    },
    computed: {
      model: {
        get () {
          return this.$parent.value;
        },
        set (val) {
          this.$parent.$emit('input', val);
          this.$parent.$emit('change', val);
        }
      },
      visible () {
        return this.accordion ? this.model === this.name : this.model.includes(this.name);
      }
    },
    methods: {
      handleTitleClick () {
        if (this.disabled) return;
        if (this.visible) {
          this.accordion ? this.model = '' : array_remove(this.model, this.name);
        } else {
          this.accordion ? this.model = this.name : this.model = [...this.model, this.name];
        }
      }
    }
  };
</script>
