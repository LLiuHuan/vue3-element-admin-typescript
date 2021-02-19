/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:13:28
 * @LastEditTime: 2021-02-19 13:24:43
 * @LastEditors: LLiuHuan
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  constantModules = constantModules.concat(constantFiles(key).default)
})

const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []
asyncFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  console.log(key)
  console.log(asyncFiles(key).default)
  permissionModules = permissionModules.concat(asyncFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/Redirect/Index.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/Index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  },
  ...constantModules
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  ...permissionModules
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
