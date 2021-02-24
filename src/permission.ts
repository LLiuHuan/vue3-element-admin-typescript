/*
 * @Description: 权限
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:40:05
 * @LastEditTime: 2021-02-22 21:11:55
 * @LastEditors: LLiuHuan
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useI18n } from 'vue-i18n'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { useStore } from './store'
import { UserActionTypes } from './store/modules/user/action-types'
import { PermissionActionType } from './store/modules/permission/action-types'
import { ElMessage } from 'element-plus'
import whiteList from './config/default/whitelist'
import settings from '@/config/default/setting.config'
NProgress.configure({ showSpinner: false })

const getPageTitle = (key: string) => {
  const i18n = useI18n()
  const title = settings.title
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName} - ${title}`
  }
  return `${title}`
}

router.beforeEach(async(to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  // Start progress bar
  NProgress.start()
  const store = useStore()
  console.log("进入：", to.path)
  // Determine whether the user has logged in
  if (store.state.user.atoken) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      console.log("登录跳转首页")
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      console.log(store.state.user.roles)
      if (store.state.user.roles.length === 0) {
        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
          const roles = store.state.user.roles
          console.log('roles')
          console.log(roles)
          // Generate accessible routes map based on role
          store.dispatch(PermissionActionType.ACTION_SET_ROUTES, roles)
          // Dynamically add accessible routes
          console.log(store.state.permission.dynamicRoutes)
          store.state.permission.dynamicRoutes.forEach((route) => {
            console.log(route)
            if (route != undefined) {
              router.addRoute(route)
            }
          })
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          console.log("roles....")
          console.log(store.state.user.roles)
          console.log("准备跳转至原来路径", to.path)
          next({ ...to, replace: true })
        } catch (err) {
          console.log("跳转路由报错", err)
          // Remove token and redirect to login page
          store.dispatch(UserActionTypes.ACTION_RESET_TOKEN, undefined)
          ElMessage.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
      next()
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
