<template>
  <li class="dropdown-item" :class="classes" :disabled="disabled" @click="handleItemClick">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'SDropdownItem',
    inject: ['clickHidden'],
    props: {
      name: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      },
      divided: {
        type: Boolean,
        default: false
      },
      navigator: String
    },
    computed: {
      classes () {
        return {
          disabled: this.disabled,
          divided: this.divided
        };
      }
    },
    methods: {
      handleItemClick () {
        if (this.disabled) return;
        this.clickHidden && this.$parent.$parent.delayHide();
        this.name && this.$parent.$parent.$emit('select', this.name);
        this.navigator && this.$router.push(this.navigator);
      }
    }
  };
</script>
