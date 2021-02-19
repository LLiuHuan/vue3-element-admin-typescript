/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:05:32
 * @LastEditTime: 2021-02-19 13:44:04
 * @LastEditors: LLiuHuan
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const chartsRouter: Array<RouteRecordRaw> = [
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'Charts',
    meta: {
      title: 'charts',
      icon: '#iconzhuzhuangtu'
    },
    children: [
      {
        path: 'BarChart',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/Charts/BarChart.vue'
          ),
        name: 'BarChartDemo',
        meta: {
          title: 'barChart',
          noCache: true
        }
      },
      {
        path: 'LineChart',
        component: () =>
          import(
            /* webpackChunkName: "LineChart" */ '@/views/Charts/LineChart.vue'
          ),
        name: 'LineChartDemo',
        meta: {
          title: 'lineChart',
          noCache: true
        }
      },
      {
        path: 'MixedChart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/Charts/MixedChart.vue'
          ),
        name: 'MixedChartDemo',
        meta: {
          title: 'mixedChart',
          noCache: true
        }
      }
    ]
  }
]

export default chartsRouter
