/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:52:20
 * @LastEditTime: 2021-02-18 21:55:32
 * @LastEditors: LLiuHuan
 */

export interface ArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface Article<T> {
  total: number
  items: T
}

interface articleId {
  article: any
}
interface articleIdInfo {
  id?: number | 0
  timestamp?: any
}
interface pageviews　{
  pageviews: any
}
export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}
