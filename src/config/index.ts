/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:17:40
 * @LastEditTime: 2021-02-17 19:27:07
 * @LastEditors: LLiuHuan
 */

 // 默认配置
import { netConfig, settingConfig, themeConfig } from './default'
// 自定义配置
import customConfig from './customConfig'

// 导出配置（自定义配置优先级高）
export default Object.assign({}, netConfig, settingConfig, themeConfig, customConfig)