<!--
 * @Description: 
 * @Author: LLiuHuan
 * @Date: 2021-02-18 21:35:39
 * @LastEditTime: 2021-02-19 22:01:25
 * @LastEditors: LLiuHuan
-->

<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      {{ t("table.dynamicTips1") }}
    </div>
    <fixed-thead />

    <div style="margin:30px 0 5px 20px">
      {{ t("table.dynamicTips2") }}
    </div>
    <unfixed-thead />
  </div>
</template>

<script>
import FixedThead from './components/FixedThead.vue'
import UnfixedThead from './components/UnfixedThead.vue'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'DynamicTable',
  components: { FixedThead, UnfixedThead },
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>

