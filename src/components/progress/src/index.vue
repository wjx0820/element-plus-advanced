<template>
  <el-progress v-bind="$attrs" :percentage="p"></el-progress>
</template>

 
<script lang='ts' setup>
import { ref, onMounted } from 'vue';

let props = withDefaults(defineProps<{
  percentage: number
  isAnimate?: boolean
  time?: number
}>(), { isAnimate: false, time: 3000 });

let p = ref(0)

onMounted(() => {
  if (props.isAnimate) {
    let t = Math.ceil(props.time / props.percentage)
    let timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else {
    p.value = props.percentage
  }
});
                                                                                </script>

 
<style lang='scss' scoped>
</style>

