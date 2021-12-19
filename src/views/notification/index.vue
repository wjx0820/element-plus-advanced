<template>
  <div class="flex">
    <m-notification></m-notification>
    <m-notification :value="33"></m-notification>
    <m-notification :value="33" :max="30"></m-notification>
    <m-notification :value="33" :max="30" isDot></m-notification>
    <m-notification icon="infoFilled" isDot></m-notification>
  </div>
</template>

 
<script lang='ts' setup>

</script>

 
<style lang='scss' scoped>
.flex {
  display: flex;
  justify-content: space-around;
}
</style>

