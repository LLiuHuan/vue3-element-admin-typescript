/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:35:16
 * @LastEditTime: 2021-02-19 13:22:30
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
