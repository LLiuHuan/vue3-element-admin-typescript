<!--
 * @Description: app 布局入口
 * @Author: LLiuHuan
 * @Date: 2021-02-17 19:34:38
 * @LastEditTime: 2021-02-19 18:26:19
 * @LastEditors: LLiuHuan
-->

<template>
  <el-container
    :class="classObj"
    class="app-wrapper"
  >
    <div
      v-if="classObj.mobile && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <el-container
      :class="{hasTagsView: showTagsView}"
      class="main-container"
    >
      <el-aside :class="{'fixed-header': fixedHeader}">
        <navbar />
        <tags-view v-if="showTagsView" />
      </el-aside>
      <app-main />
      <right-panel v-if="showSettings">
        <Settings />
      </right-panel>
      <el-footer>
        底部栏
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { DeviceType } from '@/store/modules/app/state'
import { computed, defineComponent, onBeforeMount, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import RightPanel from '@/components/RightPanel/Index.vue'
import resize from './mixin/ResizeHandler'
export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
  },
  setup() {
    const { t } = useI18n()
    const store = useStore()
    const { sidebar, device, addEventListenerOnResize, resizeMounted, removeEventListenerResize, watchRouter } = resize()
    const state = reactive({
      handleClickOutside: () => {
        store.dispatch(AppActionTypes.ACTION_CLOSE_SIDEBAR, false)
      }
    })

    const classObj = computed(() => {
      return {
        hideSidebar: !sidebar.value.opened,
        openSidebar: sidebar.value.opened,
        withoutAnimation: sidebar.value.withoutAnimation,
        mobile: device.value === DeviceType.Mobile
      }
    })

    const showSettings = computed(() => {
      console.log(showSettings)
      return store.state.settings.showSettings
    })
    const showTagsView = computed(() => {
      return store.state.settings.showTagsView
    })
    const fixedHeader = computed(() => {
      return store.state.settings.fixedHeader
    })

    watchRouter()
    onBeforeMount(() => {
      addEventListenerOnResize()
    })

    onMounted(() => {
      resizeMounted()
    })

    onBeforeUnmount(() => {
      removeEventListenerResize()
    })
    return {
      t,
      classObj,
      sidebar,
      showSettings,
      showTagsView,
      fixedHeader,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #E9EEF3 !important;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth})!important;
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: 60px;
  }

  .sidebar-container {
    width: 60px !important;
  }

  .fixed-header {
    width: calc(100% - 50px)!important
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform .28s;
    width: $sideBarWidth !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-$sideBarWidth, 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>

<style lang="scss">
.el-aside {
  width: calc(100% - #{$sideBarWidth})!important;
  padding: 0;
}
.el-footer {
  height: 20px!important;
}
</style>