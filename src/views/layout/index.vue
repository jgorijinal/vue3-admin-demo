<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">Aside</el-aside>
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
const logoutClick = () => {
  console.log('logout')
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
</style>
