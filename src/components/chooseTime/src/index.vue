<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      ></el-time-select>
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      ></el-time-select>
    </div>
  </div>
</template>

 
<script lang='ts' setup>
import { ref, watch } from 'vue'

interface Props {
  // 开始时间的占位符
  startPlaceholder?: string
  // 结束时间的占位符
  endPlaceholder?: string
  // 开始时间的开始选择
  startTimeStart?: string
  // 开始时间的步进
  startStep?: string
  // 开始时间的结束选择
  startTimeEnd?: string
  // 结束时间的开始选择
  endTimeStart?: string
  // 结束时间的步进
  endStep?: string
  // 结束时间的结束选择
  endTimeEnd?: string
}

const props = withDefaults(defineProps<Props>(), {
  startPlaceholder: '请选择开始时间',
  endPlaceholder: '请选择结束时间',
  startTimeStart: '08:00',
  startStep: '00:30',
  startTimeEnd: '24:00',
  endTimeStart: '08:00',
  endStep: '00:30',
  endTimeEnd: '24:00'
})

const emits = defineEmits<{
  (event: 'startChange', data: string): void
  (event: 'endChange', data: { startTime: string, endTime: string }): void
}>()

const startTime = ref<string>('')
const endTime = ref<string>('')
const endTimeDisabled = ref<boolean>(true)

// 监听开始时间的变化
watch(() => startTime.value, val => {
  if (val === '') {
    endTime.value = ''
    endTimeDisabled.value = true
  }
  else {
    endTimeDisabled.value = false
    emits('startChange', val)
  }
})

// 监听开始时间的变化
watch(() => endTime.value, val => {
  if (val !== '') {
    emits('endChange', {
      startTime: startTime.value,
      endTime: val
    })
  }
})

</script>

 
<style scoped>
</style>

