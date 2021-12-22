<template>
  <div>
    <m-form :options="options" label-width="100px"></m-form>
  </div>
</template>

 
<script lang='ts' setup>
import { FormOptions } from '@/components/form/src/types/types';

const options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      { required: true, message: '用户名在2-6位之间', trigger: 'blur' }
    ],
    attrs: {
      clearable: true,
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { required: true, message: '用户名在6-15位之间', trigger: 'blur' }
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not'
      }
    ]
  },
]
</script>

 
<style scoped>
</style>

