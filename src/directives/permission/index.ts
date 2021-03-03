/*
 * @Description: 权限指令
 * @Author: LLiuHuan
 * @Date: 2021-02-18 13:44:18
 * @LastEditTime: 2021-03-01 20:32:33
 * @LastEditors: LLiuHuan
 */

import { useStore } from '@/store'
import { Directive } from 'vue'

export const permission: Directive = {
  mounted(el, binding) {
    const { value } = binding
    const roles = useStore().state.user.roles
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value
      const hasPermission = permissionRoles.includes(roles)
      if (!hasPermission) {
        el.style.display = 'none'
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    }
  }
}
