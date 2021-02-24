/*
 * @Description: 国际化配置
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:33:20
 * @LastEditTime: 2021-02-19 18:15:43
 * @LastEditors: LLiuHuan
 */

import { createI18n } from 'vue-i18n' // import from runtime only

import { getLanguage } from '@/utils/cookies'

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import elementEsLocale from 'element-plus/lib/locale/lang/es'
import elementJaLocale from 'element-plus/lib/locale/lang/ja'

// User defined lang
import enLocale from './en'
import zhLocale from './zh-cn'
import esLocale from './es'
import jaLocale from './ja'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale
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
  locale: getLocale(),
  messages: messages
})

export default i18n
