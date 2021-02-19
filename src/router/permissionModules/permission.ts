/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:05:47
 * @LastEditTime: 2021-02-19 13:23:11
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const permissionRouter: Array<RouteRecordRaw> = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/directive',
    meta: {
      title: 'permission',
      icon: '#iconsuo',
      roles: ['admin', 'editor'], // you can set roles in root nav
      alwaysShow: true // will always show the root menu
    },
    children: [
      {
        path: 'page',
        component: () => import(/* webpackChunkName: "permission-page" */ '@/views/Permission/Page.vue'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import(/* webpackChunkName: "permission-directive" */ '@/views/Permission/Directive.vue'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import(/* webpackChunkName: "permission-role" */ '@/views/Permission/Role/Role.vue'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  }
]
export default permissionRouter
