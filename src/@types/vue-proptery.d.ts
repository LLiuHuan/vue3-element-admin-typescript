/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:12:22
 * @LastEditTime: 2021-02-17 21:12:23
 * @LastEditors: LLiuHuan
 */

import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }
