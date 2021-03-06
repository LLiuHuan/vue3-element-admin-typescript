/*
 * @Description: app actions
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:59:16
 * @LastEditTime: 2021-03-01 20:35:51
 * @LastEditors: LLiuHuan
 */

import { ActionTree, ActionContext } from 'vuex'
import { RootState, useStore } from '@/store'
import { state, UserState } from './state'
import { Mutations } from './mutations'
import { UserMutationTypes } from './mutation-types'
import { UserActionTypes } from './action-types'
import { loginRequest, userInfoRequest } from '@/api/user'
import { removeAToken, setAToken, removeRToken, setRToken } from '@/utils/cookies'
import { PermissionActionType } from '../permission/action-types'
import router from '@/router'
import { RouteRecordRaw } from 'vue-router'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string}
    ): void
  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext
  ): void
  [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ): void
  [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext, role: string
    ): void
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext,
  ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  // 登录
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string}
  ) {
    let { username, password } = userInfo
    username = username.trim()
    await loginRequest({ username, password }).then(async(res: any) => {
      console.log(res)
      if (res?.code === 0 && res.data.rToken && res.data.aToken) {
        setAToken(res.data.aToken)
        setRToken(res.data.rToken)
        commit(UserMutationTypes.SET_ATOKEN, res.data.aToken)
        commit(UserMutationTypes.SET_RTOKEN, res.data.rToken)
        // commit(UserMutationTypes.SET_ROLES, ['admin'])
      }
    }).catch((err: any) => {
      console.log(err)
    })
  },

  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext) {
    removeAToken()
    removeRToken()
    commit(UserMutationTypes.SET_ATOKEN, '')
    commit(UserMutationTypes.SET_ROLES, '')
  },

  async [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ) {
    if (state.atoken === '') {
      throw Error('token is undefined!')
    }
    console.log("1234")
    await userInfoRequest().then((res: any) => {
      console.log("asdasdasda........",res)
      if (res?.code === 0) {
        commit(UserMutationTypes.SET_ROLES, res.data.roles)
        commit(UserMutationTypes.SET_NAME, res.data.name)
        commit(UserMutationTypes.SET_AVATAR, res.data.avatar)
        commit(UserMutationTypes.SET_INTRODUCTION, res.data.introduction)
        commit(UserMutationTypes.SET_EMAIL, res.data.email)
        return res
      } else {
        throw Error('Verification failed, please Login again.')
      }
    })
  },

  async [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext,
    role: string
  ) {
    const token = role + '-token'
    const store = useStore()
    commit(UserMutationTypes.SET_ATOKEN, token)
    setAToken(token)
    // await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
    store.dispatch(PermissionActionType.ACTION_SET_ROUTES, state.roles)
    store.state.permission.dynamicRoutes.forEach((item: RouteRecordRaw) => {
      router.addRoute(item)
    })
  },

  // 退出登录
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ) {
    console.log(commit)
    removeAToken()
    removeRToken()
    commit(UserMutationTypes.SET_ATOKEN, '')
    commit(UserMutationTypes.SET_RTOKEN, '')
  }

}
