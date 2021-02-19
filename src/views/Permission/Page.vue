<!--
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:08:52
 * @LastEditTime: 2021-02-19 13:28:28
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="app-container">
    <SwitchRoles @change="handleRolesChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import SwitchRoles from './Components/SwitchRoles.vue'
export default defineComponent({
  components: {
    SwitchRoles
  },
  setup() {
    const router = useRouter()
    const handleRolesChange = () => {
      router.push({ path: '/?' + +new Date() }).catch(err => {
        console.warn(err)
      })
    }

    return {
      handleRolesChange
    }
  }
})
</script>
