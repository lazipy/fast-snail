<template>
  <i class="icon-spinner spinner" :style="currentStyle"></i>
</template>

<script>
  export default {
    name: 'SSpinner',
    props: {
      delay: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 12
      },
      color: String
    },
    data () {
      return {
        visible: false
      };
    },
    computed: {
      currentStyle () {
        return {
          fontSize: this.size + 'px',
          color: this.color,
          width:this.size+10 + 'px',
          height:this.size+10 + 'px',
          lineHeight:this.size+10+ 'px',
          textAlign:'center'
        };
      }
    },
    mounted () {
      setTimeout(() => {
        this.visible = true;
      }, this.delay);
    }
  };
</script>
