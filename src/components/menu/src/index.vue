<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item,index) in data" :key="index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
        <component v-if="item.icon" :is="`el-icon-${item.icon.toLowerCase()}`"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${item.icon.toLowerCase()}`"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(item1,index1) in item.children" :index="item1.index" :key="index1">
          <component v-if="item1.icon" :is="`el-icon-${item1.icon.toLowerCase()}`"></component>
          <span>{{ item1.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

 
<script lang='ts' setup>
import { PropType } from 'vue';
import { MenuItem } from './types'

let props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  },
})
</script>

 
<style lang='scss' scoped>
svg {
  margin-right: 4px;
}
</style>

