/*
 * @Description: axios 封装网络请求
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:34:07
 * @LastEditTime: 2021-03-01 14:39:57
 * @LastEditors: LLiuHuan
 */

import { useStore } from '@/store'
import HttpClient, { HttpClientConfig } from 'axios-mapper'

const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: '',
    headers: {
      Authorization: hasToken ? 'Bearer ' + useStore().state.user.atoken : ''
    }
  }
  return new HttpClient(config)
}

export default https
