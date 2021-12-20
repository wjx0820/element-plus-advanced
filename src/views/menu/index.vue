<template>
  <div class="menu">
    <m-menu
      style="width: 200px"
      :data="data1"
      defaultActive="2"
      active-text-color="red"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-menu>
    <m-infinite-menu
      style="width: 600px"
      :data="data2"
      defaultActive="1"
      active-text-color="red"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-infinite-menu>
  </div>
</template>

 
<script lang='ts' setup>
const data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
      },
      {
        a: '导航3-2',
        b: '3-2',
        c: 'Document',
      }
    ]
  }
]
const data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document',
                  },
                  {
                    a: '导航3-1-1-1-2',
                    b: '3-1-1-1-2',
                    c: 'Document',
                  }
                ]
              },
              {
                a: '导航3-1-1-2',
                b: '3-1-1-2',
                c: 'Document',
              }
            ]
          },
          {
            a: '导航3-1-2',
            b: '3-1-2',
            c: 'Document',
          }
        ]
      },
      {
        a: '导航3-2',
        b: '3-2',
        c: 'Document',
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

