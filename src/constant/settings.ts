/*
 * @Description: 基础配置常量
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:20:58
 * @LastEditTime: 2021-02-18 17:01:00
 * @LastEditors: LLiuHuan
 */

// 可选语言
export enum Language{
  En='en',
  Zh='zh-cn',
}

// 编译模式
export enum Environment{
  Development = 'development',
  Production = 'production'
}

// 路由来源 前端后端
export enum RouterSource{
  Frontend = 'frontend',
  Backend = 'backend'
}

// 路由模式
export enum RouterMode{
  Hash = 'hash',
  HISTORY = 'history'
}

// token存储名称
export enum TokenStorageName{
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage',
  Cookie = 'cookie'
}
