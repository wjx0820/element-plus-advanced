<template>
  <choose-area @change="changeArea"></choose-area>
</template>

 
<script lang='ts' setup>
const changeArea = (data: any) => {
  console.log(data)
}
</script>

 
<style scoped>
</style>

