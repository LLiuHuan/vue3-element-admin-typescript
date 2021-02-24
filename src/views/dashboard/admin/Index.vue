<!--
 * @Description: 首页内容
 * @Author: LLiuHuan
 * @Date: 2021-02-19 18:36:50
 * @LastEditTime: 2021-02-19 20:44:08
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart-1></line-chart-1>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import GithubCorner from '@/components/GithubCorner/Index.vue'
import PanelGroup from './components/PanelGroup.vue'
import LineChart from './components/LineChart.vue'
import LineChart1 from './components/LineChart1.vue'

export default defineComponent({
  name: '',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    LineChart1
  },
  setup () {
    const data = {
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
      },
      shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
      }
    }

    let lineChartData = ref(data.newVisitis)

    const handleSetLineChartData = (type: 'newVisitis' | 'messages' | 'purchases' | 'shoppings') => {
      lineChartData.value = data[type]
    }

    watch(lineChartData.value, () => {
      console.log(lineChartData.value)
    })

    return {
      lineChartData,
      handleSetLineChartData
    }
  }
})
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>