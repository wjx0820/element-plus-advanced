<template>
  <div class="menu">
    <m-menu style="width: 200px" :data="data1" defaultActive="2" active-text-color="red"></m-menu>
    <m-infinite-menu style="width: 600px" :data="data2" defaultActive="1" active-text-color="red"></m-infinite-menu>
  </div>
</template>

 
<script lang='ts' setup>
let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'Document',
      }
    ]
  }
]
let data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
                children: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'Document',
                  },
                  {
                    name: '导航3-1-1-1-2',
                    index: '3-1-1-1-2',
                    icon: 'Document',
                  }
                ]
              },
              {
                name: '导航3-1-1-2',
                index: '3-1-1-2',
                icon: 'Document',
              }
            ]
          },
          {
            name: '导航3-1-2',
            index: '3-1-2',
            icon: 'Document',
          }
        ]
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'Document',
      }
    ]
  }
]
</script>

 
<style lang='scss' scoped>
.menu {
  display: flex;
}
</style>

