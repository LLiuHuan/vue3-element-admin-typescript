<!--
 * @Description: 主视图
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:18:21
 * @LastEditTime: 2021-02-18 17:22:20
 * @LastEditors: LLiuHuan
-->

<template>
  <el-main class="app-main">
    <div class="main-content">
      <transition
          name="fade-transform"
          mode="out-in"
      >
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </el-main>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const route = useRoute()
    const cachedViews = () => {
      return store.state.tagViews.cachedViews
    }
    const key = () => {
      return route.path
    }
    return {
      cachedViews,
      key
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 90px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .main-content {
    min-height: calc(100vh - 144px);
    background-color: #ffffff;
  }
}

.fixed-header+.app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 124px);
  }

  .fixed-header+.app-main {
    padding-top: 104px;
  }
}
</style>
