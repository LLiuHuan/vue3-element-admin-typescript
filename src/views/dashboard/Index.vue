<!--
 * @Description: 首页内容
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:43:12
 * @LastEditTime: 2021-03-02 18:40:33
 * @LastEditors: LLiuHuan
-->
<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import adminDashboard from './admin/Index.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    adminDashboard
  },
  setup() {
    const state = reactive({
      currentRole: 'adminDashboard'
    })
    console.log("进首页")
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
