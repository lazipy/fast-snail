<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
  import { OneOf } from '../../utils'
  import { addClass, removeClass } from '../../utils/dom';

  export default {
    name: 'BAnimate',
    props: {
      name: {
        type: String,
        required: true,
        validator: OneOf(['bounce', 'swing', 'shake'])
      }
    },
    methods: {
      run () {
        addClass(this.$slots.default[0].elm, this.name);
        this.stop();
      },
      stop () {
        let timer = setTimeout(() => {
          removeClass(this.$slots.default[0].elm, this.name)
          clearTimeout(timer);
        }, 800);
      }
    }
  };
</script>
