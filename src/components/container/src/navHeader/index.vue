<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

 
<script lang='ts' setup>
const props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits(['update:collapse'])

const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

 
<style scoped>
.header {
  height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(150, 148, 148, 0.466);
}
svg {
  width: 1em;
  height: 1em;
}
</style>

