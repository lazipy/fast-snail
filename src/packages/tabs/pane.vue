<template>
  <div>
    <template v-if="$parent.animated">
      <transition :name="animate">
        <div class="tab-pane" v-if="name === $parent.model">
          <slot></slot>
          <!-- <slot name="label"></slot> -->
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="tab-pane" v-if="name === $parent.model">
        <slot></slot>
        <!-- <slot name="label"></slot> -->
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'STabPane',
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        animate: ''
      };
    }
  };
</script>
