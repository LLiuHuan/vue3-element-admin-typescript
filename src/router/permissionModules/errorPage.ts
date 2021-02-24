/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-19 22:29:30
 * @LastEditTime: 2021-02-19 22:34:13
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const errorRouter: Array<RouteRecordRaw> = [
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'errorPages',
      icon: '#icon404'
    },
    children: [
      {
        path: '401',
        component: () => import(/* webpackChunkName: "error-page-401" */ '@/views/ErrorPage/401.vue'),
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () => import(/* webpackChunkName: "error-page-404" */ '@/views/ErrorPage/404.vue'),
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }
    ]
  }
]

export default errorRouter