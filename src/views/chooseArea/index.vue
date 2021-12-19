<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

 
<script lang='ts' setup>
const changeArea = (data: any) => {
  console.log(data)
}
</script>

 
<style scoped>
</style>

