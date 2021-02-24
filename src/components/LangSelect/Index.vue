<!--
 * @Description: 语言选择
 * @Author: LLiuHuan
 * @Date: 2021-02-17 20:51:49
 * @LastEditTime: 2021-02-19 18:18:15
 * @LastEditors: LLiuHuan
-->

<template>
  <div>
    <el-dropdown>
      <svg
        class="icon"
        aria-hidden="true"
        font-size="20px"
      >
        <use xlink:href="#iconlanguage" />
      </svg>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in languages"
            :key="item.value"
            :disabled="language===item.value"
          >
            <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
type Language = {
    name: string
    value: string
}

export default defineComponent({
  setup() {
    const store = useStore()
    const { locale } = useI18n()

    const state = reactive({
      languages: [{ name: '中文', value: 'zh' }, { name: 'English', value: 'en' }, { name: 'Español', value: 'es' }, { name: '日本語', value: 'ja' }] as Array<Language>,
      handleSetLanguage: (lang: string) => {
        locale.value = lang
        store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang)
        ElMessage({
          message: 'Switch Language Success',
          type: 'success'
        })
      }
    })
    const language = computed(() => {
      return store.state.app.language
    })
    return {
      ...toRefs(state),
      language
    }
  }
})

</script>
