/*
 * @Description: app actions type
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:58:45
 * @LastEditTime: 2021-03-01 22:19:20
 * @LastEditors: LLiuHuan
 */

export enum PermissionActionType{
  ACTION_SET_ROUTES = 'ACTION_SET_ROUTES'
}

export interface RouterJson {
  id: string,
  create_time: string,
  update_time:string,
  pid: string,
  path: string,
  component: any,
  redirect: string,
  name: string,
  level: number,
  sort: number,
  meta: {
    title: string,
    icon: string,
    roles: string,
    always_show: boolean,
    affix: boolean,
    hidden: boolean,
    cache: boolean,
    breadcrumb: boolean
  }
  children: Array<RouterJson>
}