/*
 * @Description: app Mutations
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:32
 * @LastEditTime: 2021-03-01 20:37:14
 * @LastEditors: LLiuHuan
 */

import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './mutation-types'

export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_ATOKEN](state: S, token: string): void
  [UserMutationTypes.SET_RTOKEN](state: S, token: string): void
  [UserMutationTypes.SET_NAME](state: S, name: string): void
  [UserMutationTypes.SET_AVATAR](state: S, avatar: string): void
  [UserMutationTypes.SET_INTRODUCTION](state: S, introduction: string): void
  [UserMutationTypes.SET_ROLES](state: S, roles: string): void
  [UserMutationTypes.SET_EMAIL](state: S, email: string): void
}

export const mutations: MutationTree<UserState> & Mutations = {
  [UserMutationTypes.SET_ATOKEN](state: UserState, token: string) {
    state.atoken = token
  },

  [UserMutationTypes.SET_RTOKEN](state: UserState, token: string) {
    state.rtoken = token
  },

  [UserMutationTypes.SET_NAME](state: UserState, name: string) {
    state.name = name
  },

  [UserMutationTypes.SET_AVATAR](state: UserState, avatar: string) {
    state.avatar = avatar
  },

  [UserMutationTypes.SET_INTRODUCTION](state: UserState, introduction: string) {
    state.introduction = introduction
  },

  [UserMutationTypes.SET_ROLES](state: UserState, roles: string) {
    state.roles = roles
  },

  [UserMutationTypes.SET_EMAIL](state: UserState, email: string) {
    state.email = email
  }

}
