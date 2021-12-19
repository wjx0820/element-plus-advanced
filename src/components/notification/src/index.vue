<template>
  <div class="notification">
    <el-badge :value="value" :max="max" :is-dot="isDot">
      <component :is="`el-icon-${icon.toLowerCase()}`"></component>
    </el-badge>
  </div>
</template>

 
<script lang='ts' setup>
interface Props {
  icon?: string
  value?: string | number
  max?: number
  isDot?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  icon: 'Bell',
  value: 0,
  max: 99,
  isDot: false,
})

</script>

 
<style lang='scss' scoped>
.notification {
  cursor: pointer;
}
</style>

