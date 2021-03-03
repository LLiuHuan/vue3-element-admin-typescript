<!--
 * @Description: 混合图表
 * @Author: LLiuHuan
 * @Date: 2021-02-18 17:08:21
 * @LastEditTime: 2021-02-19 22:26:03
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="chart-container">
    <mix-chart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MixChart from '@/components/Charts/MixChart.vue'
export default defineComponent({
  components: {
    MixChart
  }
})
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 144px);
}
</style>
