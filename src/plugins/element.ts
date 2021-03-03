/*
 * @Description: element 组件
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:09:00
 * @LastEditTime: 2021-02-18 14:12:24
 * @LastEditors: LLiuHuan
 */

import {
    ElAside,
    ElMain,
    ElHeader,
    ElFooter,
    ElButton,
    ElLink,
    ElLoading,
    ElMessage,
    ElTable,
    ElScrollbar,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElMessageBox,
    ElSubmenu,
    ElRow,
    ElCol,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElTooltip,
    ElTabs,
    ElTag,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElContainer,
    ElSwitch,
    ElDrawer,
    ElColorPicker,
    ElTableColumn,
    ElTree,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElForm,
    ElFormItem,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElDialog,
} from 'element-plus'
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import {useStore} from '@/store'

export default function loadComponent(app: any) {
    // app.use(ElementPlus, { size: useStore().state.app.size })
    app.use(ElButton)
    app.use(ElAside)
    app.use(ElMain)
    app.use(ElLink)
    app.use(ElLoading)
    app.use(ElHeader)
    app.use(ElFooter)
    app.use(ElTable)
    app.use(ElScrollbar)
    app.use(ElMenu)
    app.use(ElMenuItem)
    app.use(ElMenuItemGroup)
    app.use(ElMessageBox)
    app.use(ElSubmenu)
    app.use(ElRow)
    app.use(ElCol)
    app.use(ElDropdown)
    app.use(ElDropdownItem)
    app.use(ElDropdownMenu)
    app.use(ElTooltip)
    app.use(ElTabs)
    app.use(ElTag)
    app.use(ElRadio)
    app.use(ElRadioButton)
    app.use(ElRadioGroup)
    app.use(ElContainer)
    app.use(ElSwitch)
    app.use(ElDrawer)
    app.use(ElColorPicker)
    app.use(ElTableColumn)
    app.use(ElTree)
    app.use(ElBreadcrumb)
    app.use(ElBreadcrumbItem)
    app.use(ElForm)
    app.use(ElFormItem)
    app.use(ElInput)
    app.use(ElInputNumber)
    app.use(ElIcon)
    app.use(ElImage)
    app.use(ElDialog)

    app.config.globalProperties.$message = ElMessage
}
