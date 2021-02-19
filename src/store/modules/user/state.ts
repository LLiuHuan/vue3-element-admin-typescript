/*
 * @Description: app state
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:55
 * @LastEditTime: 2021-02-18 13:30:48
 * @LastEditors: LLiuHuan
 */

import { getToken } from '@/utils/cookies'

export interface UserState{
    token: string
    name: string
    avatar: string
    introduction: string
    roles: string[]
    email: string
}

export const state: UserState = {
  token: getToken() || '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: ''
}
