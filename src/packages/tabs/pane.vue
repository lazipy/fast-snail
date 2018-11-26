<template>
  <transition :name="animate">
    <div class="tab-pane" v-if="name === $parent.model">
      <slot></slot>

      <div class="tag-label" v-if="visible">
        <slot name="label"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'STabPane',
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      label: [String, Element],
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        animate: '',
        title: this.label,
        visible: true
      };
    },
    mounted () {
      if (this.$slots.label) {
        this.title = this.$slots.label[0].elm.innerHTML;
      }
      this.visible = false;
    }
  };
</script>
