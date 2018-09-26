<template>
  <div class="source">
    <div class="demo">
      <slot></slot>
    </div>
    <p class="hover">
      <slot name="hover"></slot>
      <i class="iconfont icon-daima" @click="showCode = !showCode"></i>
    </p>
    <div v-if="showCode" class="code">
      <pre v-highlightjs>
        <code class="xml">
          <slot name="code"></slot>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
  import hljs from 'highlight.js';

  export default {
    name: 'DemoBlock',
    data () {
      return {
        showCode: false
      };
    }
  };
</script>
