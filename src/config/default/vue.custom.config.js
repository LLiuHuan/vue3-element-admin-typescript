/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 16:23:20
 * @LastEditTime: 2021-02-19 13:03:37
 * @LastEditors: LLiuHuan
 */

const vueDefaultConfig = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  //webpack 配置的项目名称
  title: 'vue3-element-admin-typescript',
  titleSeparator: ' - ',
  titleReverse: false,
  devPort: '9999',
  version: '1.0',
  abbreviation: 'vt2at',
  providePlugin: {},
  build7z: false,
  donation: false,
  startMessage: '欢迎使用vue3-element-admin-typescript,使用composition API和TS 玩转最潮技术'
}

module.exports = vueDefaultConfig
