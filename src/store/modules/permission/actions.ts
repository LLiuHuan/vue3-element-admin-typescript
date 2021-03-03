/*
 * @Description: app actions
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:59:16
 * @LastEditTime: 2021-03-02 18:35:30
 * @LastEditors: LLiuHuan
 */

import { ActionTree, ActionContext, useStore } from 'vuex'
import { RootState } from '@/store'
import { PermissionState } from './state'
import { Mutations } from './mutations'
import { PermissionMutationType } from './mutation-types'
import { PermissionActionType, RouterJson } from './action-types'
import { RouteRecordRaw } from 'vue-router'
import { getRoutes } from '@/api/roles'
import Layout from '@/layout/Index.vue'
import { flatMap } from 'lodash'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<PermissionState, RootState>, 'commit'>

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles.includes(role)
      }
    })
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface Actions {
    [PermissionActionType.ACTION_SET_ROUTES](
      { commit }: AugmentedActionContext
      , roles: string): void
}

export const actions: ActionTree<PermissionState, RootState> & Actions = {
  async [PermissionActionType.ACTION_SET_ROUTES](
    { commit }: AugmentedActionContext
    , roles: string) {
    await getRoutes(roles).then((res: any) => {
      if (res?.code === 0) {
        let accessedRoutes: Array<RouteRecordRaw> | RouteRecordRaw[]
        accessedRoutes = jsonTurnRouter(res.data)
        commit(PermissionMutationType.SET_ROUTES, accessedRoutes)
      } else {
        throw Error('get router api failed, error')
      }
    }).catch((err) => {
      throw Error(err)
    })
  }
}

const jsonTurnRouter = (routers: Array<RouterJson>) => {
  const newRouter: Array<RouteRecordRaw> = []
  routers.forEach((router) => {
    if (router.children == null) {
      newRouter.push({
        path: router.path,
        component: Promise.resolve(require(`@/views/${router.component}`).default),
        redirect: router.redirect,
        name: router.name,
        meta: {
          title: router.meta.title,
          icon: router.meta.icon,
          noCache: router.meta.cache,
          hidden: router.meta.hidden,
          alwaysShow: router.meta.always_show,
          affix: router.meta.affix,
          breadcrumb: router.meta.breadcrumb
        }
      })
    }else{
      newRouter.push({
        path: router.path,
        component: Layout,
        redirect: router.redirect,
        name: router.name,
        meta: {
          title: router.meta.title,
          icon: router.meta.icon,
          noCache: router.meta.cache,
          hidden: router.meta.hidden,
          alwaysShow: router.meta.always_show,
          affix: router.meta.affix,
          breadcrumb: router.meta.breadcrumb
        },
        children: jsonTurnRouter(router.children)
      })
    }
  })
  return newRouter
}