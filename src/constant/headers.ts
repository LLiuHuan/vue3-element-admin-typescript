/*
 * @Description: 网络请求参数及平台
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:20:32
 * @LastEditTime: 2021-02-18 10:58:39
 * @LastEditors: LLiuHuan
 */

export enum ContentType{
  FORM = 'application/x-www-form-urlencoded',
  JSON = 'application/json; charset=utf-8'
}

export enum Device{
  IOS = 'iOS',
  ANDROID = 'Android',
  WINDOWS = 'Windows',
  PC='PC'
}
