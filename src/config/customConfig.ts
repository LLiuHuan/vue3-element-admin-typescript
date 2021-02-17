/*
 * @Description: 自定义配置
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:18:02
 * @LastEditTime: 2021-02-17 19:26:47
 * @LastEditors: LLiuHuan
 */

 
import { NetworkConfig } from './default/net.config'
import { Theme } from './default/theme.config'
import { Settings } from './default/setting.config'

type CustomConfig = NetworkConfig & Theme & Settings

const customConfig: CustomConfig = {

}

export default customConfig
