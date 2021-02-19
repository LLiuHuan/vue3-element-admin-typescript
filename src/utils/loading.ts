/*
 * @Description: 全局loading
 * @Author: LLiuHuan
 * @Date: 2021-02-19 16:20:23
 * @LastEditTime: 2021-02-19 16:20:32
 * @LastEditors: LLiuHuan
 */

import { ElLoading } from 'element-plus'

export default function() {
  const loading = (title: string) => {
    const loadingInstance = ElLoading.service({ text: title })
    return loadingInstance
  }

  return {
    loading
  }
}
