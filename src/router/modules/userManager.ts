/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:35:16
 * @LastEditTime: 2021-02-17 19:40:02
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'

const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user_manager/login/Login.vue')
  }
]
export default UserManagerRouter