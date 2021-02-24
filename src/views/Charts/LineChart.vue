<!--
 * @Description: 折线图
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:08:07
 * @LastEditTime: 2021-02-19 22:25:53
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="chart-container">
    <line-marker
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LineMarker from '@/components/Charts/LineMarker.vue'
export default defineComponent({
  components: {
    LineMarker
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
