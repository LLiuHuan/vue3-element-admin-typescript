/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:13:28
 * @LastEditTime: 2021-02-17 21:31:33
 * @LastEditors: LLiuHuan
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const files = require.context('./modules', true, /\.ts$/)
let modules: Array<RouteRecordRaw> = []
files.keys().forEach((key) => {
  if (key === './index.ts') return
  modules = modules.concat(files(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  ...modules
]

export const asyncRoutes: Array<RouteRecordRaw> = [

]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
