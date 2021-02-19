/*
 * @Description: app Mutations
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:32
 * @LastEditTime: 2021-02-19 13:18:55
 * @LastEditors: LLiuHuan
 */

import { MutationTree } from 'vuex'
import { PermissionState } from './state'
import { PermissionMutationType } from './mutation-types'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '@/router'

export type Mutations<S = PermissionState> = {
  [PermissionMutationType.SET_ROUTES](state: S, routes: RouteRecordRaw[]): void
}

export const mutations: MutationTree<PermissionState> & Mutations = {
  [PermissionMutationType.SET_ROUTES](state: PermissionState, routes: RouteRecordRaw[]) {
    console.log('PermissionMutationType.SET_ROUTES')
    console.log(routes)
    state.routes = constantRoutes.concat(routes)
    state.dynamicRoutes = routes
  }

}
