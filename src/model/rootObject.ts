/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:55:03
 * @LastEditTime: 2021-02-18 14:19:06
 * @LastEditors: LLiuHuan
 */

export interface RootObject<T>{
  code: number
  msg: string
  data: T
}
