/*
 * @Description: axios 封装网络请求
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:34:07
 * @LastEditTime: 2021-02-18 21:06:22
 * @LastEditors: LLiuHuan
 */

import { useStore } from '@/store'
import HttpClient, { HttpClientConfig } from 'axios-mapper'

const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: 'https://admin-tmpl-mock-test.rencaiyoujia.cn',
    headers: {
      token: hasToken ? useStore().state.user.token : ''
    }
  }
  return new HttpClient(config)
}

export default https
