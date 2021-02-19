/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:55:18
 * @LastEditTime: 2021-02-18 13:55:27
 * @LastEditors: LLiuHuan
 */

export interface UserInfoModel {
  id: number
  username: string
  password: string
  name: string
  avatar: string
  introduction: string
  email: string
  phone: string
  roles: string[]
}
