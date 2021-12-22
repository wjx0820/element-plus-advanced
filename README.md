### 学到的

- $attrs 属性传递
- defineProps, defineEmits 的 ts 写法
- element-plus 表单组件二次封装(抽离配置选项 Options，可以进一步抽离成文件单独维护,代码解耦，维护方便)

  - ## 功能

    1. 可配置型表单，通过 json 对象的方式自动生成表单
    2. 具备更完善的功能，表单验证，动态删减表单，集成第三方的插件...
    3. 用法简单，扩展性强，可维护性强
    4. 能够用在更多的场景，比如弹框嵌套表单

    ## 准备工作

    1. 分析`element-plus`表单能够在哪些方面做优化
    2. 完善我们封装表单的类型，支持 ts
    3. 封装的表单要具备`element-plus`原表单的所有功能
    4. 集成第三方的插件: markdown 编辑器，富文本编辑器...

- [defineExpose](<(https://v3.vuejs.org/api/sfc-script-setup.html#defineexpose)>) 重写表单重置方法
  - vue3 移除了$children,因此父组件要获取子组件的实例和方法，需要通过 defineExpose
