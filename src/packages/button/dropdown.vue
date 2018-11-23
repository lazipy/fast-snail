<template>
  <div class="btn-dropdown">
    <button
      class="btn"
      :class="classes"
      @click="handleClick"
      :type="nativeType"
      v-if="!split">
      <slot></slot>
      <i class="icon-angle-down btn-arrow" :class="{ 'active': $parent.visible }"></i>
    </button>

    <div class="btn-group" v-if="split">
      <button
        class="btn"
        :class="classes"
        @mouseenter="handleButtonEnter"
        @click.stop="handleClick"
        :type="nativeType">
        <slot></slot>
      </button>
      <button
        class="btn btn-split"
        :class="classes">
        <i class="icon-angle-down btn-arrow" :class="{ 'active': $parent.visible }"></i>
      </button>
    </div>

  </div>
</template>

<script>
  import { themes, OneOf } from '../../utils';

  export default {
    name: 'SDropdownButton',
    props: {
      type: {
        type: String,
        default: 'primary',
        validator: OneOf([...themes, 'link'])
      },
      size: {
        type: String,
        validator: OneOf(['large', 'small'])
      },
      split: {
        type: Boolean,
        default: false
      },
      nativeType: {
        type: String,
        validator: OneOf(['button', 'submit', 'reset'])
      }
    },
    computed: {
      classes () {
        return [
          `btn-${this.type}`,
          this.size ? `btn-${this.size}` : ''
        ];
      }
    },
    methods: {
      handleClick () {
        this.$emit('click');
      },
      handleButtonEnter () {
        setTimeout(() =>{
          this.$parent.visible = false;
        }, this.$parent.showDelay);
      }
    }
  };
</script>
