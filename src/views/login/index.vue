<template>
  <div class="login">
    <div class="login-form">
      <h1>后台管理系统</h1>
      <el-form
    ref="formRef"
    :model="formData"
    status-icon
    :rules="rules"
    label-width="80px"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="formData.password"
        type="password"
        show-password
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="rememberMe" label="记住我" size="default" />
      <el-button type="primary" @click="submitForm"
        >登录</el-button
      >
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

// 表单对象
const formData = reactive({
  username: 'super-admin',
  password: ''
})
// 密码自定义校验规则函数
const validatePassword = (rules, value, callback) => {
  value.length < 6 ? callback(new Error('密码不能小于6位')) : callback()
}
// 校验规则
const rules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { validator: validatePassword, trigger: 'blur' }
  ]
}
// 记住我 (默认 true)
const rememberMe = ref(false)
// 表单实例
const formRef = ref()
const store = useStore()
const submitForm = (value) => {
  formRef.value.validate((isOk) => {
    if (!isOk) return
    if (rememberMe.value) {
      // 记住我
    } else {
      // 不记住我
    }
    // 聚义登陆操作
    console.log('登陆操作')
    store.dispatch('user/loginAction', formData)
  })
}
</script>
<style lang="less" scoped>
.login {
  height:100%;
  width:100%;
  position: relative;
.login-form {
  width:450px;
  position: absolute;
  left:0;
  right:0;
  top:20%;
  margin:0 auto;
  h1 {
    text-align: center;
  }
  .el-button {
    width:100%;
  }
}
}
</style>
