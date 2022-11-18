<template>
  <div class="lang-select">
    <el-dropdown @command="clickItem">
    <span class="el-dropdown-link">
      选择语言
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>
<script setup>
const clickItem = (command) => {
  console.log(command)
}
</script>
<style lang="less" scoped>

</style>
