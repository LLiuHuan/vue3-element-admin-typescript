/*
 * @Description: 配置文件
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:14:33
 * @LastEditTime: 2021-02-18 17:16:36
 * @LastEditors: LLiuHuan
 */

const { resolve } = require('path')
const path = require('path')
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const  {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  title,
  abbreviation,
  devPort,
  providePlugin,
  build7z
} = require('./src/config/default/vue.custom.config')
module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
        path.resolve(__dirname, 'src/styles/element-variables.scss')
      ]
    },
    i18n: {
      locale: 'ja',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableLegacy: false
    }
  },
  configureWebpack(){
    return {
      resolve:{
        alias:{
          '@':resolve('src'),
          '*':resolve(''),
          'Assets':resolve('src/assets')
        }
      },
      module:{
        rules: [
          {
            test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
            loader: '@intlify/vue-i18n-loader',
            include: [ // Use `Rule.include` to specify the files of locale messages to be pre-compiled
              path.resolve(__dirname, 'src/lang')
            ]
          },
        ],
      },
      plugins:[
        new WebpackBar({
          name:title,
        })
      ]
    }
  }
}
