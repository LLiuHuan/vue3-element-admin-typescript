/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 21:34:05
 * @LastEditTime: 2021-02-19 22:04:30
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const tableRouter: Array<RouteRecordRaw> = [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/DynamicTable',
    name: 'Table',
    meta: {
      title: 'table',
      icon: '#icontable'
    },
    children: [
      {
        path: 'DynamicTable',
        component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/Table/DynamicTable/Index.vue'),
        name: 'DynamicTable',
        meta: { title: 'complexTable' }
      },
      {
        path: 'DraggableTable',
        component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/Table/DraggableTable.vue'),
        name: 'DraggableTable',
        meta: { title: 'draggableTable' }
      },
      {
        path: 'InlineEditTable',
        component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/Table/InlineEditTable.vue'),
        name: 'InlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'ComplexTable',
        component: () => import(/* webpackChunkName: "complex-table" */ '@/views/Table/ComplexTable.vue'),
        name: 'ComplexTable',
        meta: { title: 'dynamicTable' }
      }
    ]
  }
]

export default tableRouter
