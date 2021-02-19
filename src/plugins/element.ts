/*
 * @Description: element 组件
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:09:00
 * @LastEditTime: 2021-02-18 14:12:24
 * @LastEditors: LLiuHuan
 */

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import { useStore } from '@/store'

export default function loadComponent (app: any) {
  app.use(ElementPlus, { size: useStore().state.app.size })
}
