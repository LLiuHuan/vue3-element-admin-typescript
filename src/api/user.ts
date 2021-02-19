/*
 * @Description: 用户相关接口
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:25:27
 * @LastEditTime: 2021-02-19 13:26:09
 * @LastEditors: LLiuHuan
 */

import { RootObject } from '@/model/rootObject'
import { UserInfoModel } from '@/model/userModel'
import https from '@/utils/https'
import { LoginModel } from '@/views/UserManager/Login/Model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}
