/*
 * @Description: 网络模块
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:18:55
 * @LastEditTime: 2021-02-17 20:19:15
 * @LastEditors: LLiuHuan
 */

 
import { ContentType, Device } from '@/constant/headers'
import { InfoShowType } from '@/constant/network'

interface Headers{
    token: string
    contentType: string
    version: string | undefined
    device: Device
}

const _header: Headers = {
  token: '',
  contentType: ContentType.JSON,
  version: process.env.VUE_APP_VERSION,
  device: Device.PC
}

export interface NetworkConfig{
    host?: string
    timeout?: number
    loading?: false
    errorShowType?: InfoShowType
    header?: {}
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header
}

export default networkConfig
