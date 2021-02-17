/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:20:58
 * @LastEditTime: 2021-02-17 19:20:58
 * @LastEditors: LLiuHuan
 */

 
export enum Language{
  En='en',
  Zh='zh',
}

export enum Environment{
 Development = 'development',
 Production = 'production'
}

export enum RouterSource{
 Frontend = 'frontend',
 Backend = 'backend'
}

export enum RouterMode{
 Hash = 'hash',
 HISTORY = 'history'
}

export enum TokenStorageName{
 LocalStorage = 'localStorage',
 SessionStorage = 'sessionStorage',
 Cookie = 'cookie'
}
