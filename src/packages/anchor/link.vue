<template>
  <div class="anchor-link" :class="{ active: active }">
    <a :href="href" class="anchor-link-title" @click.prevent="clickLink">{{ title }}</a>
  </div>
</template>

<script>
  import { getRect, scrollTop } from '../../utils/dom';

  export default {
    name: 'SAnchorLink',
    inject: ['bounds', 'offsetTop', 'offsetBottom'],
    props: {
      href: {
        type: String,
        required: true
      },
      title: String
    },
    data () {
      return {
        active: false
      };
    },
    methods: {
      clickLink () {
        const scrollElement = this.$parent.scrollElement;
        const anchor = document.querySelector(this.href);
        const offsetHeight = this.$parent.containerIsWindow ? this.$parent.scrollContainer.innerHeight : this.$parent.scrollContainer.offsetHeight;

        const from = this.$parent.containerIsWindow ? this.$parent.scrollContainer.pageYOffset : this.$parent.scrollContainer.scrollTop;
        const to = this.offsetBottom || this.offsetBottom === 0 ? getRect(anchor, scrollElement).bottom - offsetHeight + this.bounds + this.offsetBottom : getRect(anchor, scrollElement).top - this.bounds - this.offsetTop;

        scrollTop(this.$parent.scrollContainer, from, to, 1000);
      }
    }
  };
</script>
