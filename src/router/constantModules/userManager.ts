/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 16:42:39
 * @LastEditTime: 2021-02-24 22:58:46
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'

const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "userManager" */'@/views/UserManager/Login/Index.vue')
  }
]
export default UserManagerRouter
