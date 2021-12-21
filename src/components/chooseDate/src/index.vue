<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
        v-bind="$attrs.startOptions"
      ></el-date-picker>
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabledDate="endDisabledDate"
        v-bind="$attrs.endOptions"
      ></el-date-picker>
    </div>
  </div>
</template> 

 
<script lang='ts' setup>
import { defineAsyncComponent, ref, watch } from 'vue'

interface Props {
  startPlaceholder?: string
  endPlaceholder?: string
  // 是否禁用今天之前的日期
  disableToday?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  startPlaceholder: '请选择开始日期',
  endPlaceholder: '请选择结束日期',
  disableToday: true
})

const emits = defineEmits<{
  (event: 'startChange', data: Date): void
  (event: 'endChange', data: { startDate: Date | null, endDate: Date | null }): void
}>()


const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)
// 控制结束日期的禁用状态
const endDateDisabled = ref<boolean>(true)

// 禁用开始日期的函数
const startDisabledDate = (time: Date) => {
  // 减去一天，当前日期前一天
  if (props.disableToday) return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}
// 禁用结束日期的函数
const endDisabledDate = (time: Date) => {
  if (startDate.value) {
    // 加上一天，选择日期后一天
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
  }
}
// 监听开始的日期
watch(() => startDate.value, (val) => {
  if (!val) {
    endDateDisabled.value = true
    endDate.value = null
  } else {
    emits('startChange', val)
    endDateDisabled.value = false
  }
})
// 监听结束的日期
watch(() => endDate.value, val => {
  if (val) {
    emits('endChange', {
      startDate: startDate.value,
      endDate: val
    })
  }
})
</script>

 
<style scoped>
</style>

