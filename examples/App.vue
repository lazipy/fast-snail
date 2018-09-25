<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
  body {
    font-size: 14px;
    color: #34495e;
    font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1, h2, h3, h4, h5, h6, p, ul, li, ol {
    margin: 0;
    padding: 0;
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    color: #34495e;
    text-decoration: none;

    &:hover, &.active {
      color: #1890ff;
    }
  }
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .content {
    .hljs {
      padding: 2em;
    }
    .hljs-tag {
      color: #999;
      line-height: 20px;
      font-size: 14px;
    }
    .hljs-name {
      color: #f81d22;
    }
    .hljs-string, .hljs-title, .hljs-constant, .hljs-parent, .hljs-tag .hljs-value, .hljs-rules .hljs-value, .hljs-preprocessor, .hljs-pragma, .haml .hljs-symbol, .ruby .hljs-symbol, .ruby .hljs-symbol .hljs-string, .hljs-template_tag, .django .hljs-variable, .smalltalk .hljs-class, .hljs-addition, .hljs-flow, .hljs-stream, .bash .hljs-variable, .apache .hljs-tag, .apache .hljs-cbracket, .tex .hljs-command, .tex .hljs-special, .erlang_repl .hljs-function_or_atom, .asciidoc .hljs-header, .markdown .hljs-header, .coffeescript .hljs-attribute {
      color: #008dff;
    }
    .hljs-attr {
      color: #0b8235;
    }
    h1 {
      color: #0d1a26;
      font-weight: 500;
      margin-bottom: 20px;
      margin-top: 8px;
      font-family: Avenir, "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 30px;
      font-variant: tabular-nums;
      line-height: 38px;
    }
    h2 {
      font-size: 24px;
      line-height: 32px;
    }
    h2, h3, h4, h5, h6 {
      color: #0d1a26;
      font-family: Avenir, "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-variant: tabular-nums;
      margin: 1.6em 0 0.6em;
      font-weight: 500;
    }
    h3 {
      font-size: 18px;
    }
    h4 {
      font-size: 16px;
    }
    h5 {
      font-size: 14px;
    }
    h6 {
      font-size: 12px;
    }
    hr {
      height: 1px;
      border: 0;
      background: #ebedf0;
      margin: 56px 0;
      clear: both;
    }
    pre {
      margin: 1em 0;
    }
    ul > li {
      list-style-type: circle;
      margin-left: 20px;
      padding-left: 4px;
    }
    ul > li:empty {
      display: none;
    }
    ol > li {
      list-style-type: decimal;
      margin-left: 20px;
      padding-left: 4px;
    }
    ol > li > p {
      margin: 0.2em 0;
    }
    code {
      margin: 0 1px;
      background: #f2f4f5;
      padding: .2em .4em;
      border-radius: 3px;
      font-size: .9em;
      border: 1px solid #eee;
    }
    pre {
      border-radius: 2px;
      background: #f2f4f5;
      font-family: "Lucida Console", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    }
    pre code {
      border: none;
      background: #f2f4f5;
      margin: 0;
      padding: 0;
      font-size: 13px;
      color: #314659;
      overflow: auto;
    }
    b {
      font-weight: 500;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      border: 1px solid #ebedf0;
      width: 100%;
      margin: 8px 0 16px;
    }
    table th {
      white-space: nowrap;
      color: #5c6b77;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.02);
      padding: 16px 24px;
    }
    table td {
      border: 1px solid #ebedf0;
      padding: 16px 24px;
      text-align: left;
    }
    blockquote {
      font-size: 90%;
      color: #697b8c;
      border-left: 4px solid #ebedf0;
      padding-left: 0.8em;
      margin: 1em 0;
    }
    blockquote p {
      margin: 0;
    }
    .header-anchor {
      opacity: 0;
      -webkit-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
      margin-left: 8px;
    }
    .waiting {
      color: #ccc;
      cursor: not-allowed;
    }
    a.edit-button {
      display: inline-block;
      margin-left: 8px;
      text-decoration: none;
    }
    a.edit-button i {
      color: #697b8c;
    }
    a.edit-button i:hover {
      color: #1890ff;
    }
    a.edit-button .anticon {
      display: block;
      font-size: 16px;
    }
    h1:hover .header-anchor,
    h2:hover .header-anchor,
    h3:hover .header-anchor,
    h4:hover .header-anchor,
    h5:hover .header-anchor,
    h6:hover .header-anchor {
      opacity: 1;
      display: inline-block;
    }
    br,
    p > br {
      clear: both;
    }
    #attributes + table {
      font-size: 14px;
      line-height: 1.5;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      border-width: 0;
      margin: 2em 0;
    }
    #attributes + table th,
    #attributes + table td {
      padding: 14px 16px;
      border-width: 1px 0;
      border-color: #e8e8e8;
      text-align: left;
    }
    #attributes + table th {
      border-width: 0 0 2px 0;
    }
    #attributes + table td:first-child {
      font-weight: 500;
      width: 20%;
      color: #003a8c;
    }
    #attributes + table td:nth-child(3) {
      width: 22%;
      font-size: 13px;
      color: #c41d7f;
      word-break: break-all;
    }
    #attributes + table td:last-child {
      width: 13%;
      font-size: 13px;
    }
  }
</style>
