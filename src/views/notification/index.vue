<template>
  <div class="flex">
    <m-notification :value="33">
      <template #default>
        <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list>
      </template>
    </m-notification>
    <m-notification :value="33" :max="30"></m-notification>
    <m-notification :value="33" :max="30" isDot></m-notification>
    <m-notification icon="infoFilled" isDot></m-notification>
  </div>
</template>

 
<script lang='ts' setup>
import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>

 
<style lang='scss' scoped>
.flex {
  display: flex;
  justify-content: space-around;
}
</style>

