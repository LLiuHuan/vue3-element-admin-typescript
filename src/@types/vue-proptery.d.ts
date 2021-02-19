/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:12:22
 * @LastEditTime: 2021-02-18 13:49:07
 * @LastEditors: LLiuHuan
 */

import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    roles?: string[]
  }
}
