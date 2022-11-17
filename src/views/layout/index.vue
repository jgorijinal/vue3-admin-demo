<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">
        <!--菜单-->
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="2">
          <component :is="'location'"></component>
          <span>Navigator Two</span>
        </el-menu-item>

        <el-sub-menu index="1">
          <template #title>
            <!-- <el-icon><location /></el-icon> -->
            <component :is="'location'"></component>
            <span>Navigator One</span>
          </template>
            <el-menu-item index="1-4-1">
              <component :is="'location'"></component>
              <span>item one</span>
            </el-menu-item>
        </el-sub-menu>
      </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <!--dropdown 下拉菜单-->
            <el-dropdown>
              <span class="el-dropdown-link">
                {{$store.getters.userInfo.username}}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logoutClick">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
const store = useStore()
// 点击 退出登录
const logoutClick = () => {
  store.dispatch('user/logoutAction')
}
</script>
<style lang="less" scoped>
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
    width:18px;
    margin:4px;
  }
</style>
