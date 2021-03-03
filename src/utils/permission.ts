/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:58:07
 * @LastEditTime: 2021-02-18 17:58:07
 * @LastEditors: LLiuHuan
 */

import { useStore } from '@/store'

export const checkPermission = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const roles = useStore().state.user.roles
    const permissionRoles = value
    const hasPermission = permissionRoles.includes(roles)
    return hasPermission
  } else {
    console.error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    return false
  }
}
