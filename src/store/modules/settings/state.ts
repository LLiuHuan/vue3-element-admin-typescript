/*
 * @Description: app state
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:55
 * @LastEditTime: 2021-02-17 21:23:17
 * @LastEditors: LLiuHuan
 */

import elementVariables from '@/styles/element-variables.scss'
import layoutSettings from '@/config/default/layout'
export interface SettingsState {
  theme: string
  fixedHeader: boolean
  showSettings: boolean
  showTagsView: boolean
  showSidebarLogo: boolean
  sidebarTextTheme: boolean
}

export const state: SettingsState = {
  theme: elementVariables.theme,
  fixedHeader: layoutSettings.fixedHeader,
  showSettings: layoutSettings.showSettings,
  showTagsView: layoutSettings.showTagsView,
  showSidebarLogo: layoutSettings.showSidebarLogo,
  sidebarTextTheme: layoutSettings.sidebarTextTheme
}
