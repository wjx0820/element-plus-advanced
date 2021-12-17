<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

 
<script lang='ts' setup>
defineProps(['collapse'])
</script>

 
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical-demo {
  background-color: pink;
}
</style>

