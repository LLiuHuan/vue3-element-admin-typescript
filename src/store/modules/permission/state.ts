/*
 * @Description: app state
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:55
 * @LastEditTime: 2021-02-17 21:33:04
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'

export interface PermissionState {
    routes: RouteRecordRaw[]
    dynamicRoutes: RouteRecordRaw[]
}

export const state: PermissionState = {
  routes: [],
  dynamicRoutes: []
}
