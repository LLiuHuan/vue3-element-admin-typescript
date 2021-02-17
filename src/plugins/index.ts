/*
 * @Description: 加载插件文件
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:34:32
 * @LastEditTime: 2021-02-17 19:45:19
 * @LastEditors: LLiuHuan
 */

import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context('.', true, /\.ts$/)
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app)
    }
  })
}