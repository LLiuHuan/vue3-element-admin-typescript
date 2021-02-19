/*
 * @Description: 布局配置
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:14:31
 * @LastEditTime: 2021-02-18 10:50:32
 * @LastEditors: LLiuHuan
 */

interface LayoutSettings {
  // Controls settings panel display
  showSettings: boolean 
  // Controls tagsview display
  showTagsView: boolean 
  // Controls siderbar logo display
  showSidebarLogo: boolean 
  // If true, will fix the header component
  fixedHeader: boolean 
  // If true, will change active text color for sidebar based on theme
  sidebarTextTheme: boolean 
}

// You can customize below settings :)
const layoutSettings: LayoutSettings = {
  showSettings: true,  // 设置显示
  showTagsView: true,  // 显示 Tags-View
  fixedHeader: true,  // 固定 Header
  showSidebarLogo: true,  // 显示侧边栏 Logo
  sidebarTextTheme: true,  // 侧边栏文字主题色
}

export default layoutSettings
