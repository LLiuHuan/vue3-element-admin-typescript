/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:57:13
 * @LastEditTime: 2021-02-18 17:57:14
 * @LastEditors: LLiuHuan
 */

export interface Meta {
  hidden: boolean
}

export interface Children {
  path: string
  component: string
}

export interface Route {
  path: string
  component: string
  meta: Meta
  children: Children[]
}

export interface Routes {
  routes: Route[]
}
