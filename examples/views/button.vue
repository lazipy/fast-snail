<template>
  <div>
    <div class="docs">
      <h2 id="button">
        Button 按钮
        <a href="#button" class="header-anchor">¶</a>
      </h2>
      <p>提供一些常用的操作按钮</p>
      <h3 id="basic">
        基础用法
        <a href="#basic" class="header-anchor">¶</a>
      </h3>
      <p>按钮的基础用法</p>
    </div>
    <demo-block>
      <button>按钮</button>
      <span slot="hover">可以通过设置type,circle,round来控制按钮的样式</span>
      <span slot="code">
        &lt;template&gt;
          &lt;button&gt;按钮&lt;/button&gt;
        &lt;/template&gt;

        &lt;script&gt;
          console.log(1111);
        &lt;/script&gt;
      </span>
    </demo-block>
  </div>
</template>

<script>
  export default {
    name: 'Button'
  };
</script>
