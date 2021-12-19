<template>
  <choose-area @change="changeArea"></choose-area>
</template>

 
<script lang='ts' setup>
import ChooseArea from '@/components/chooseArea/src/index.vue'

const changeArea = (data: any) => {
  console.log(data)
}
</script>

 
<style scoped>
</style>

