<template>
  <transition :name="animate">
    <div class="carousel-item" v-if="index === activeIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SCarouselItem',
    data () {
      return {
        animate: ''
      };
    },
    computed: {
      activeIndex () {
        return this.$parent.activeIndex;
      },
      index () {
        return this.$parent.items.findIndex(item => {
          return item._uid === this._uid;
        });
      }
    }
  };
</script>
