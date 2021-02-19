/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 21:34:05
 * @LastEditTime: 2021-02-19 13:24:32
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const tableRouter: Array<RouteRecordRaw> = [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
      title: 'table',
      icon: '#icontable'
    },
    children: [
      {
        path: 'dynamic-table',
        component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/Table/DynamicTable/Index.vue'),
        name: 'DynamicTable',
        meta: { title: 'complexTable' }
      },
      {
        path: 'Draggable_table',
        component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/Table/DraggableTable.vue'),
        name: 'DraggableTable',
        meta: { title: 'draggableTable' }
      },
      {
        path: 'Inline_edit_table',
        component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/Table/InlineEditTable.vue'),
        name: 'InlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'Complex_table',
        component: () => import(/* webpackChunkName: "complex-table" */ '@/views/Table/ComplexTable.vue'),
        name: 'ComplexTable',
        meta: { title: 'dynamicTable' }
      }
    ]
  }
]

export default tableRouter
