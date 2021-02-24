<!--
 * @Description: 柱形图
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:07:58
 * @LastEditTime: 2021-02-19 22:24:44
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="chart-container">
    <keyboard
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Keyboard from '@/components/Charts/Keyboard.vue'
export default defineComponent({
  components: {
    Keyboard
  }
})
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
