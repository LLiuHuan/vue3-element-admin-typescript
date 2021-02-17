<!--
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:43:12
 * @LastEditTime: 2021-02-17 20:39:16
 * @LastEditors: LLiuHuan
-->
<template>
  <div>
    1213123123
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
