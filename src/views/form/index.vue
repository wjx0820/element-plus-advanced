<template>
  <div>
    <m-form
      ref="form"
      label-width="100px"
      :options="options"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-exceed="handleExceed"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500kb</div>
      </template>
      <template #action="{ form, model }">
        <el-button type="primary" @click="submitForm(form, model)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </m-form>
  </div>
</template>

 
<script lang='ts' setup>
import { ref } from 'vue'
import { FormInstance, FormOptions } from '@/components/form/src/types/types';
import { ElMessage, ElMessageBox } from 'element-plus';
import { formOptions } from '@/formOption'

const options = formOptions

const handleRemove = (file: any, fileList: any) => {
  console.log('handleRemove')
  console.log(file, fileList)
}
const handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}
const handleExceed = (val: any) => {
  console.log('handleExceed', val)
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}
const handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}
const handleChange = (val: any) => {
  console.log('change')
  console.log(val)
}
const handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val)
}



const submitForm = (form: FormInstance, model: any) => {
  form.validate((valid) => {
    if (valid) {
      console.log(model)
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}

const form = ref()

const resetForm = () => {
  form.value.resetFields()
}
</script>

 
<style scoped>
</style>

