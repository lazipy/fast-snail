<template>
  <div class="container">
    <p>默认</p>
    <s-steps :active="1">
      <s-step ></s-step>
      <s-step ></s-step>
      <s-step ></s-step>
    </s-steps>
    <p>带有标题</p>
    <s-steps :active="1">
      <s-step title="步骤1"></s-step>
      <s-step title="步骤2"></s-step>
      <s-step title="步骤3"></s-step>
    </s-steps>
    <p>带有简介</p>
    <s-steps :active="1">
      <s-step title="步骤1" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
      <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
      <s-step title="步骤3" description="这是步骤3"></s-step>
    </s-steps>
    <p>居中</p>
    <s-steps :active="1" center>
      <s-step title="步骤1" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
      <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
      <s-step title="步骤3" description="这是步骤3"></s-step>
    </s-steps>
    <p>right</p>
    <s-steps :active="1" placement="right">
      <s-step title="步骤1" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
      <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
      <s-step title="步骤3" description="这是步骤3"></s-step>
    </s-steps>

    <s-steps :active="1" placement="right">
      <s-step title="步骤1" status="success" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
      <s-step title="步骤2" status="error" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
      <s-step title="步骤3" description="这是步骤3"></s-step>
    </s-steps>
    <p>小型</p>
    <s-steps :active="1" size="small">
      <s-step title="步骤1"></s-step>
      <s-step title="步骤2"></s-step>
      <s-step title="步骤3"></s-step>
    </s-steps>
    <p>vertical</p>
    <div style="height: 300px;">
      <s-steps :active="1" placement="right" direction="vertical">
        <s-step title="步骤1" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
        <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
        <s-step title="步骤3" description="这是步骤3"></s-step>
      </s-steps>
    </div>
    <div style="height: 300px;">
      <s-steps :active="1" placement="right" size="small" direction="vertical">
        <s-step title="步骤1" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
        <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
        <s-step title="步骤3" description="这是步骤3"></s-step>
      </s-steps>
    </div>

    <div style="height: 300px;">
      <s-steps :active="1" placement="right" size="small" dot direction="vertical">
        <s-step title="步骤1" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
        <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
        <s-step title="步骤3" description="这是步骤3"></s-step>
      </s-steps>
    </div>


    <div style="height: 300px;">
      <s-steps :active="1" placement="right" size="small" dot direction="vertical">
        <s-step title="步骤1" status="success" description="这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1这是步骤1"></s-step>
        <s-step title="步骤2" description="这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2这是步骤2"></s-step>
        <s-step title="步骤3" description="这是步骤3"></s-step>
      </s-steps>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
