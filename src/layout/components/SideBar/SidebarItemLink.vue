<!--
 * @Description: 导航栏连接，目前取消了 使用的el-menu的router
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:29:00
 * @LastEditTime: 2021-02-19 19:05:06
 * @LastEditors: LLiuHuan
-->

<template>
  <div>
    <a
      v-if="isExternal(to)"
      :href="to"
      target="_blank"
      rel="noopener"
    >
      <slot />
    </a>
    <router-link
      v-else
      :to="to"
    >
      <slot />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      isExternal
    }
  }
})
</script>
