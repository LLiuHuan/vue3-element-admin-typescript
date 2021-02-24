/*
 * @Description: 用户相关接口
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:25:27
 * @LastEditTime: 2021-02-22 20:52:49
 * @LastEditors: LLiuHuan
 */

import { RootObject } from '@/model/rootObject'
import { UserInfoModel } from '@/model/userModel'
import https from '@/utils/https'
import { LoginModel } from '@/views/UserManager/Login/Model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('v1/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>('v1/userInfo', Method.GET, undefined, ContentType.form)
}
