<!--
 * @Description: 左侧导航栏
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:17:31
 * @LastEditTime: 2021-02-22 20:24:26
 * @LastEditors: LLiuHuan
-->

<template>
  <div :class="{'has-logo': showLogo}">
    <sidebar-logo
      v-if="showLogo"
      :collapse="isCollapse"
    />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="!isCollapse"
        :unique-opened="true"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="menuActiveTextColor"
        :router="true"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'
import variables from '@/styles/_variables.scss'
import { useStore } from '@/store'
import { RouteRecordRaw, useRoute } from 'vue-router'
import router from '@/router'

export default defineComponent({
  components: {
    SidebarItem,
    SidebarLogo
  },
  setup() {
    const store = useStore()
    const sidebar = computed(() => {
      return store.state.app.sidebar
    })
    const routes = computed(() => {
      return store.state.permission.routes
    })
    const showLogo = computed(() => {
      return store.state.settings.showSidebarLogo
    })

    const menuActiveTextColor = computed(() => {
      console.log(store.state.settings.sidebarTextTheme)
      if (store.state.settings.sidebarTextTheme) {
        return store.state.settings.theme
      } else {
        return variables.menuActiveText
      }
    })

    const activeMenu = computed(() => {
      const route = useRoute()
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    const isCollapse = computed(() => {
      return sidebar.value.opened
    })
    console.log("左侧路由", routes)
    return {
      sidebar,
      routes,
      showLogo,
      menuActiveTextColor,
      variables,
      activeMenu,
      isCollapse
    }
  }
})
</script>

<style lang="scss">
.sidebar-container {
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
  color: rgb(191, 203, 217);
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
