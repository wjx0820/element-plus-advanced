import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";

export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    },
  },
  setup(props, ctx) {
    let attrs = useAttrs()
    console.log(attrs)

    // 渲染无限层级菜单
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        item.i = `el-icon-${item.icon?.toLowerCase()}`
        // sub-menu的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          }
        }
        // 递归渲染子菜单
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        } else {
          return (
            <el-menu-item index={item.index}>
              <item.i />
              <span>{item.name}</span>
            </el-menu-item>
          )
        }
      })
    }

    return () => (
      <el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
        {renderMenu(props.data)}
      </el-menu>
    )
  }
})