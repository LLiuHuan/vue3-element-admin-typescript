/*
 * @Description: element 组件
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:09:00
 * @LastEditTime: 2021-02-17 21:31:14
 * @LastEditors: LLiuHuan
 */

 import ElementPlus, { ElMessage } from 'element-plus'
 import 'element-plus/lib/theme-chalk/index.css'
 import '@/styles/element-variables.scss'
 
 export default function loadComponent (app: any) {
   app.use(ElementPlus)
   app.config.globalProperties.$message = ElMessage
 }
