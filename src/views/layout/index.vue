<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <div class="header">
            123
            <!--TODO 退出登录-->
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

</script>
<style lang="less" scoped>
.common-layout {
  height: 100%;
  .container {
    height: 100%;
    .header {
      background-color: bisque;
      line-height:60px;
    }
  }
}
</style>
