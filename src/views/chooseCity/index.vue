<template>
  <div>
    <m-choose-city @changeCity="changeCity" @changeProvince="changeProvince"></m-choose-city>
  </div>
</template>

 
<script lang='ts' setup>
const changeCity = (data: any) => {
  console.log(data)
}
const changeProvince = (data: any) => {
  console.log(data)
}
</script>

 
<style scoped>
</style>

