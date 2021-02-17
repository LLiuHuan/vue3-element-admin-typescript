/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:13:28
 * @LastEditTime: 2021-02-17 21:33:58
 * @LastEditors: LLiuHuan
 */

import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { store as app, AppStore, AppState } from '@/store/modules/app'
import { store as settings, SettingStore, SettingsState } from '@/store/modules/settings'
import { store as permission, PermissionStore, PermissionState } from '@/store/modules/permission'

export interface RootState {
    app: AppState
    settings: SettingsState
    permission: PermissionState
}

export type Store = AppStore<Pick<RootState, 'app'>> & SettingStore<Pick<RootState, 'settings'>> & PermissionStore<Pick<RootState, 'permission'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    app,
    settings,
    permission
  }
})

export function useStore(): Store {
  return store as Store
}
