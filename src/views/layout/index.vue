<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
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
  }
}
</style>
