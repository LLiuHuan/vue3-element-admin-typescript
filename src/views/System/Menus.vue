<template>
  <div style="padding: 20px;">
    <el-table
        :data="tableData"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
          prop="id"
          label="id"
          sortable
          width="100">
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="title"
          label="显示名称"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="path"
          sortable
          label="路由">
      </el-table-column>
      <el-table-column
          prop="component"
          sortable
          label="路径">
      </el-table-column>
      <el-table-column
          prop="redirect"
          sortable
          label="重定向">
      </el-table-column>
      <el-table-column
          prop="level"
          sortable
          label="级别">
        <template #default="{ row }">
          <el-tag size="medium" v-if="row.level === 1">一级</el-tag>
          <el-tag size="medium" v-else-if="row.level === 2">二级</el-tag>
          <el-tag size="medium" v-else-if="row.level === 3">三级</el-tag>
          <el-tag size="medium" v-else>四级</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="sort"
          sortable
          label="排序">
      </el-table-column>
      <el-table-column
          prop="icon"
          sortable
          label="图标">
      </el-table-column>
      <el-table-column
          prop="hidden"
          sortable
          label="是否显示">
        <template #default="{ row }">
          <el-tag size="medium" v-if="row.hidden">是</el-tag>
          <el-tag size="medium" type="danger" v-else>否</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="breadcrumb"
          sortable
          label="面包屑导航">
          <template #default="{ row }">
            <el-tag size="medium" v-if="row.breadcrumb">是</el-tag>
            <el-tag size="medium" type="danger" v-else>否</el-tag>
          </template>
      </el-table-column>
      <el-table-column
          prop="create_time"
          sortable
          label="创建时间">
      </el-table-column>
      <el-table-column
          prop="update_time"
          sortable
          label="修改时间">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="220">
        <template #default="scope">
          <el-button
              size="mini"
              type="primary"
              click="">添加
          </el-button>
          <el-button
              size="mini"
              type="warning"
              click="">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              click="">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onBeforeMount, computed} from 'vue'
import {getMenuByPId} from '@/api/roles'
import {RoutesJson} from '@/model/routesModel'

export default defineComponent({
  name: 'Menus',
  setup() {
    const state = reactive({
      tableData: [] as Array<RoutesJson>
    })

    getMenuByPId("0").then((res: any) => {
      res?.data.forEach((router: any) => {
        console.log(router, "router")
        state.tableData.push(router)
      })
    })

    const load = (tree: any, treeNode: any, resolve: any) => {
      let data = [] as Array<RoutesJson>
      getMenuByPId(tree.id).then((res: any) => {
        res?.data.forEach((router: any) => {
          console.log(router)
          data.push(router)
        })
        console.log(data.length, "tableData")
        resolve(data)
      })

    }
    return {
      ...toRefs(state),
      load
    }
  }
})
</script>
