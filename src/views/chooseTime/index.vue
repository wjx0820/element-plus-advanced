<template>
  <div>
    <m-choose-time
      :startOptions="startOptions"
      :endOptions="endOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></m-choose-time>
    <div style="height: 300px"></div>
    <m-choose-date
      :disableToday="false"
      :startOptions="startOptions"
      :endOptions="endOptions"
      @startChange="dateStartChange"
      @endChange="dateEndChange"
    ></m-choose-date>
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

const dateStartChange = (val: Date) => {
  console.log(val)
}
const dateEndChange = (val: {
  startDate: Date,
  endDate: Date
}) => {
  console.log(val)
}
</script>

 
<style scoped>
</style>

