<template>
  <div>
    <m-choose-time
      :startOptions="startOptions"
      :endOptions="endOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></m-choose-time>
  </div>
</template>

 
<script lang='ts' setup>
const startChange = (val: string) => {
  console.log('startChange:', val)
}
const endChange = (val: { startTime: string, endTime: string }) => {
  console.log('endChange', val)
}
const startOptions = {
  // size: 'mini',
  // clearable: false
}
const endOptions = {
  // size: 'mini',
  // clearable: false
}
</script>

 
<style scoped>
</style>

