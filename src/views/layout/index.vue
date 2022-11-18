<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">
        <!--菜单-->
        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router>
          <el-menu-item index="/profile">
            <component :is="'location'"></component>
            <span>profile</span>
          </el-menu-item>
          <template v-for="value,key in map" :key="key">
            <el-sub-menu :index="value.path">
            <template #title>
              <!-- <el-icon><location /></el-icon> -->
              <component :is="value.meta.icon"></component>
              <span>{{value.meta.title}}</span>
            </template>
            <template v-for="item,index in value.children" :key="index">
              <el-menu-item :index="item.path" v-if="item.meta.icon">
                <component :is="item.meta.icon"></component>
                <span>{{item.meta.title}}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <!--dropdown 下拉菜单-->
            <el-dropdown>
              <span class="el-dropdown-link">
                {{ $store.getters.userInfo.username }}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logoutClick"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <!--选择语言-->
            <lang-select></lang-select>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import langSelect from '@/components/langSelect.vue'
const store = useStore()
// 点击 退出登出
const logoutClick = () => {
  store.dispatch('user/logoutAction')
}

const map = computed(() => {
  const filterRoutes = store.state.permission.routes.filter(
    (route) => route.meta
  )
  const obj = {}
  filterRoutes.forEach((route) => {
    let value = obj[route.path]
    if (!value) {
      value = {}
      obj[route.path] = value
      value.children = []
    }
    value.path = route.path
    value.meta = route.meta
    value.children.push(...route.children)
  })
  return obj
})
const route = useRoute()
const defaultActive = ref('')
watch(route, (newRoute) => {
  defaultActive.value = newRoute.path
}, { immediate: true })
</script>
<style lang="less" scoped>
.header{
display: flex;
}
.common-layout {
  height: 100%;
  .container {
    height: 100%;
    .header {
      background-color: bisque;
      line-height: 60px;
    }
  }
}
svg {
  width: 18px;
  margin: 4px;
}
</style>
