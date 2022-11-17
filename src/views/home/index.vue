<template>
  <div>
    home
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.matched)
</script>
<style lang="less" scoped>

</style>
