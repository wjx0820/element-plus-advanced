import { defineComponent, PropType, useAttrs } from "vue";
import * as Icons from '@element-plus/icons-vue'
import { MenuItem } from './types'

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
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    },
  },
  setup(props, ctx) {
    // 渲染无限层级菜单
    const renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        item.i = (Icons as any)[item[props.icon!]]
        // sub-menu的插槽
        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            )
          }
        }
        // 递归渲染子菜单
        if (item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          )
        } else {
          return (
            <el-menu-item index={item[props.index]}>
              <item.i />
              <span>{item[props.name]}</span>
            </el-menu-item>
          )
        }
      })
    }

    const attrs = useAttrs()

    return () => (
      <el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
        {renderMenu(props.data)}
      </el-menu>
    )
  }
})