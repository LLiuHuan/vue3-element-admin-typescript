<!--
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-19 21:23:41
 * @LastEditTime: 2021-02-19 21:50:18
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="apple">
          apple
        </el-checkbox>
        <el-checkbox label="banana">
          banana
        </el-checkbox>
        <el-checkbox label="orange">
          orange
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="fruitName" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template #default="{row}">
          {{ row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { defineComponent, toRefs, watch, reactive } from 'vue'

const defaultFormThead = ['apple', 'banana']

export default defineComponent({
  setup() {
    const state = reactive({
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20'
        }
      ],
      key: 1, // table key
      formTheadOptions: ['apple', 'banana', 'orange'],
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead // 默认表头 Default header
    })

    watch(() => state.checkboxVal, (valArr) => {
      state.formThead = state.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
      state.key = state.key + 1
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

