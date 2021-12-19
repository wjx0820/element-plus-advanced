<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${upIcon.toLowerCase()}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`el-icon-${downIcon.toLowerCase()}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></component>
    </div>
  </div>
</template>

 
<script lang='ts' setup>
import { computed, useSlots } from 'vue';

interface Props {
  type: string
  text: string
  upIconColor: string
  downIconColor: string
  // 颜色翻转只在默认的颜色下生效
  reverseColor: boolean
  upTextColor: string
  downTextColor: string
  upIcon: string
  downIcon: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'up',
  text: '文字',
  upIconColor: '#f5222d',
  downIconColor: '#52c41a',
  upTextColor: '#000000',
  downTextColor: '#000000',
  reverseColor: false,
  upIcon: 'CaretTop',
  downIcon: 'CaretBottom',
})

// 获取插槽内容
const slots = useSlots()

const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})

</script>

<style lang='scss' scoped>
.trend {
  display: flex;
  .text {
    font-size: 14px;
    margin-right: 4px;
  }
  .icon {
    display: flex;
    align-self: center;
    svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>

