/*
 * @Description: 角色模型
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:56:48
 * @LastEditTime: 2021-02-18 17:56:58
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

export interface Item {
  key: string
  name: string
  description: string
  routes: Route[]
}

export interface RolesModels {
  total: number
  items: Item[]
}
