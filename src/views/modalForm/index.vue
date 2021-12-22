<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <m-modal-form
      :options="options"
      title="编辑用户"
      width="50%"
      v-model:visible="visible"
      :on-change="handleChange"
      :on-success="handleSuccess"
    >
      <template #footer="scope">
        <el-button @click="cancel(scope.form)">取消</el-button>
        <el-button type="primary" @click="confirm(scope.form)">确认</el-button>
      </template>
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500kb</div>
      </template>
    </m-modal-form>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { formOptions } from '@/formOption'

const visible = ref<boolean>(false)
const open = () => {
  visible.value = true
}

const options = formOptions

const confirm = (form: any) => {
  const validate = form.validate()
  validate((valid: boolean) => {
    if (valid) {
      console.log(form.getFormData)
      ElMessage.success('验证成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}

const cancel = (form: any) => {
  visible.value = false
}
const handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}
const handleChange = (val: any) => {
  console.log('change')
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>