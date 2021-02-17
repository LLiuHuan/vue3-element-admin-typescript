/*
 * @Description: app actions
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:59:16
 * @LastEditTime: 2021-02-17 21:32:23
 * @LastEditors: LLiuHuan
 */


import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { PermissionState } from './state'
import { Mutations } from './mutations'
import { PermissionMutationType } from './mutation-types'
import { PermissionActionType } from './action-types'
import { RouteRecordRaw } from 'vue-router'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<PermissionState, RootState>, 'commit'>

export interface Actions {
    [PermissionActionType.ACTION_SET_ROUTES](
      { commit }: AugmentedActionContext
      , routes: RouteRecordRaw[]): void
}

export const actions: ActionTree<PermissionState, RootState> & Actions = {
  [PermissionActionType.ACTION_SET_ROUTES](
    { commit }: AugmentedActionContext
    , routes: RouteRecordRaw[]) {
    commit(PermissionMutationType.SET_ROUTES, routes)
  }
}
