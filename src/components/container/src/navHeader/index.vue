<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

 
<script lang='ts' setup>
let props = defineProps(['collapse'])

let emits = defineEmits(['update:collapse'])

let toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

 
<style scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: aquamarine;
}
svg {
  width: 1em;
  height: 1em;
}
</style>

