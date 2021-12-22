<template>
  <el-form
    v-if="model"
    :model="model"
    :rules="rules"
    :validate-on-rule-change="false"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        ></component>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

 
<script lang='ts' setup>
import { PropType, ref, onMounted, watch, nextTick } from 'vue'
import { FormInstance, FormOptions } from './types/types'
import { cloneDeep } from 'lodash-es'

const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function
  }
})

// const props = defineProps<{
//   options: FormOptions[]
// }>()

const model = ref<any>(null)
const rules = ref<any>(null)

// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    const m: any = {}
    const r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      // if (item.type === 'editor') {
      //   // 初始化富文本
      //   nextTick(() => {
      //     if (document.getElementById('editor')) {
      //       const editor = new E('#editor')
      //       editor.config.placeholder = item.placeholder!
      //       editor.create()
      //       // 初始化富文本的内容
      //       editor.txt.html(item.value)
      //       editor.config.onchange = (newHtml: string) => {
      //         model.value[item.prop!] = newHtml
      //       }
      //       edit.value = editor
      //     }
      //   })
      // }
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

onMounted(() => {
  initForm()
})

// 监听父组件传递进来的options
watch(() => props.options, () => {
  initForm()
}, { deep: true })


</script>

 
<style scoped>
</style>

