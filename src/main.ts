/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:13:28
 * @LastEditTime: 2021-02-17 21:02:42
 * @LastEditors: LLiuHuan
 */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { loadAllPlugins } from './plugins'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)

app.use(store)
app.use(router)
app.mount('#app')
