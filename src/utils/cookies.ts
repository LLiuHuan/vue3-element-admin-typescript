/*
 * @Description: 设置Cookie
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:41:43
 * @LastEditTime: 2021-02-22 19:41:31
 * @LastEditors: LLiuHuan
 */

import Keys from '@/constant/key'
import Cookies from 'js-cookie'

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(Keys.sidebarStatusKey, sidebarStatus)

export const getLanguage = () => Cookies.get(Keys.languageKey)
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language)

export const getSize = () => Cookies.get(Keys.sizeKey)
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size)

export const getAToken = () => Cookies.get(Keys.atokenKey)
export const setAToken = (token: string) => Cookies.set(Keys.atokenKey, token)
export const removeAToken = () => Cookies.remove(Keys.atokenKey)

export const getRToken = () => Cookies.get(Keys.rtokenKey)
export const setRToken = (token: string) => Cookies.set(Keys.rtokenKey, token)
export const removeRToken = () => Cookies.remove(Keys.rtokenKey)
