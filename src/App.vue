<!--
 * @Description: 项目主文件
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:13:28
 * @LastEditTime: 2021-02-19 19:04:56
 * @LastEditors: LLiuHuan
-->
<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  setup () {
    console.log(process.env.VUE_APP_BASE_API)
    console.log(process.env.NODE_ENV)
    return {}
  }
})
</script>

