/*
 * @Description: app state
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:55
 * @LastEditTime: 2021-03-01 18:23:55
 * @LastEditors: LLiuHuan
 */

import { getAToken, getRToken } from '@/utils/cookies'

export interface UserState{
    atoken: string
    rtoken: string
    name: string
    avatar: string
    introduction: string
    roles: string
    email: string
}

export const state: UserState = {
  atoken: getAToken() || '',
  rtoken: getRToken() || '',
  name: '',
  avatar: '',
  introduction: '',
  roles: '',
  email: ''
}
