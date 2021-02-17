/*
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:33:20
 * @LastEditTime: 2021-02-17 20:34:15
 * @LastEditors: LLiuHuan
 */

import { createI18n } from 'vue-i18n'

import { getLanguage } from '@/utils/cookies'

// antdv built-in lang
import antdEnLocale from 'element-plus/lib/locale/lang/en'
import antdZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// User defined lang
import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
  en: {
    ...enLocale,
    ...antdEnLocale
  },
  zh: {
    ...zhLocale,
    ...antdZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }

  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is english
  return 'en'
}

const i18n = createI18n({
  locale: getLocale()
  // messages: messages
})

export default i18n
