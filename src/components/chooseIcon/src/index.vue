<template>
  <el-button type="primary" @click="visible = true">
    <slot></slot>
  </el-button>

  <div>
    <el-dialog v-model="visible" :title="title">
      <div class="container">
        <div class="icon" v-for="(i, index) in Object.keys(Icons)" :key="index" @click="onClick(i)">
          <el-tooltip class="item" effect="light" content="点击复制" placement="top">
            <component :is="`el-icon-${i.toLowerCase()}`"></component>
          </el-tooltip>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as Icons from "@element-plus/icons-vue";
import { ref } from 'vue'
import { useCopy } from "@/hooks/useCopy";

const visible = ref(false)

const props = defineProps<{
  title: string,
}>()

const onClick = (i: string) => {
  const text = `<el-icon-${i.toLowerCase()} />`
  useCopy(text)
  visible.value = false
}


</script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.icon {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
svg {
  width: 2em;
  height: 2em;
}
:deep(.el-dialog__body) {
  height: 500px;
  overflow-y: auto;
}
</style>
