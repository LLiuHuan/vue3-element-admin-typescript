/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:54:47
 * @LastEditTime: 2021-02-18 21:49:59
 * @LastEditors: LLiuHuan
 */

import { RolesModels } from '@/model/getRolesModel'
import { RootObject } from '@/model/rootObject'
import { Routes } from '@/model/routesModel'
import https from '@/utils/https'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const getRoutes = () => {
  return https().request<RootObject<Routes>>('roles/getRoutes', Method.GET, undefined, ContentType.form)
}

export const getRoles = () => {
  return https().request<RootObject<RolesModels>>('roles/getRoles', Method.GET, undefined, ContentType.form)
}

export const delRole = (id: number) => {
  return https().request<RootObject<String>>('roles/deleteRole', Method.DELETE, { id }, ContentType.form)
}

export const updateRole = (id: number, data: any) => {
  return https().request<RootObject<any>>(`roles/updateRole/${id}`, Method.POST, data, ContentType.form)
}

export const createRole = (role: RequestParams) => {
  return https().request<RootObject<any>>('roles/createRole', Method.PUT, role, ContentType.form)
}
