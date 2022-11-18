<template>
  <div class="lang-select">
    <el-dropdown @command="clickItem">
    <span class="el-dropdown-link">
      选择语言 {{$t('msg.test')}}
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
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const store = useStore()
const i18n = useI18n()
const clickItem = (command) => {
  i18n.locale.value = command
  store.commit('app/setLang', command)
  console.log('语言切换成功')
}
</script>
<style lang="less" scoped>

</style>
