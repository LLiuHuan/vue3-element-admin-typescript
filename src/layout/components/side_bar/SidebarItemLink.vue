<!--
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:29:00
 * @LastEditTime: 2021-02-17 21:40:06
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
