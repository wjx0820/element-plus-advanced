<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430" trigger="click">
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ 'rotate': visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select
            @change="changeSelect"
            size="small"
            v-model="selectValue"
            filterable
            :filter-method="filterMethod"
            placeholder="请搜索"
          >
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!-- 字母-->
          <div
            class="city-item"
            @click="clickChar(item)"
            v-for="(item, index) in Object.keys(cities)"
            :key="index"
          >{{ item }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px;" :id="key">
              <el-col :span="2">{{ key }}&#58</el-col>
              <el-col :span="22" class="city-name">
                <div
                  @click="clickItem(item)"
                  class="city-name-item"
                  v-for="(item, index) in value"
                  :key="item.id"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="clickChar(item)"
          >{{ item }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px;" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                  >
                    <div @click="clickProvince(item2)">{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

 
<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import city from '../lib/city'
import province from '../lib/province.json'
import { City } from './types'

const emits = defineEmits<{
  (event: 'changeCity', data: City): void
  (event: 'changeProvince', data: string): void
}>()

const visible = ref<boolean>(false)
const result = ref<string>('请选择')
const radioValue = ref<string>("按城市")
const selectValue = ref<string>("")
const cities = ref(city.cities)
const provinces = ref(province)
const options = ref<City[]>([])
const allCity = ref<City[]>([])

// 点击每个城市
const clickItem = (item: City) => {
  result.value = item.name
  visible.value = false
  emits('changeCity', item)
}
const clickProvince = (item: string) => {
  result.value = item
  visible.value = false
  emits('changeProvince', item)
}
// 点击字母区域
const clickChar = (item: string) => {
  const el = document.getElementById(item)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}
// 自定义搜索过滤
const filterMethod = (val: string) => {
  const values = Object.values(cities.value).flat(2)
  if (val === '') {
    options.value = values
  } else {
    if (radioValue.value === '按城市') {
      // 中文和拼音一起过滤
      options.value = values.filter(item => {
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else {
      // 中文过滤
      options.value = values.filter(item => {
        return item.name.includes(val)
      })
    }
  }
}
// 下拉框选择
const changeSelect = (val: number) => {
  const city = allCity.value.find(item => item.id === val)!
  result.value = city.name
  if (radioValue.value === '按城市') {
    emits('changeCity', city)
  } else {
    emits('changeProvince', city.name)
  }
}

onMounted(() => {
  // 获取下拉框的城市数据
  const values = Object.values(cities.value).flat(2)
  allCity.value = values
  options.value = values
})

</script>

 
<style lang='scss' scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.rotate {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.25s linear;
}
.container {
  padding: 0;
  margin: 0;
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>

