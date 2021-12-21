<template>
  <div>
    <m-progress isAnimate :percentage="60"></m-progress>
    <m-progress isAnimate :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></m-progress>
    <m-progress type="circle" isAnimate :percentage="100" status="success"></m-progress>
  </div>
</template>

 
<script lang='ts' setup>

</script>

 
<style lang='scss' scoped>
</style>

