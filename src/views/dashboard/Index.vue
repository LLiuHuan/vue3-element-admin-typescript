<!--
 * @Description: 首页内容
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:43:12
 * @LastEditTime: 2021-02-22 23:21:38
 * @LastEditors: LLiuHuan
-->
<template>
  <div class="dashboard-container">
    <p>admin组:<span v-permission="['admin']">可看见v-permission="['admin']"</span></p>
    <p>editor:<span v-permission="['editor']">可看见v-permission="['editor']"</span></p>
    <p>admin editor组:<span v-permission="['admin','editor']">可看见v-permission="['admin','editor']"</span></p>
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
