/*
 * @Description: app Mutations
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:32
 * @LastEditTime: 2021-02-19 16:56:24
 * @LastEditors: LLiuHuan
 */

import { MutationTree } from 'vuex'
import { SettingsState } from './state'
import { SettingsMutationTypes } from './mutation-types'

export type Mutations<S = SettingsState> = {
  [SettingsMutationTypes.CHANGE_SETTING](state: S, payload: { key: string, value: any }): void

}

export const mutations: MutationTree<SettingsState> & Mutations = {
  [SettingsMutationTypes.CHANGE_SETTING](state: SettingsState, payload: { key: string, value: any }) {
    const { key, value } = payload
    // if (Object.prototype.hasOwnProperty.call(this, key)) {
    //   (this as any)[key] = value
    // }
    switch (key) {
      case 'theme':
        state.theme = value
        break
      case 'fixedHeader':
        state.fixedHeader = value
        break
      case 'showSettings':
        state.showSettings = value
        break
      case 'showSidebarLogo':
        state.showSidebarLogo = value
        break
      case 'showTagsView':
        state.showTagsView = value
        break
      case 'sidebarTextTheme':
        state.sidebarTextTheme = value
        break
      default:
        break
    }
  }

}
