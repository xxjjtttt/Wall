<template>
  <div class="signup-view">
<!--    <img src="https://api.kdcc.cn" alt="" class="background">-->
    <div class="signup-container">
        <el-text class="title" type="primary">注册</el-text>

        <el-form size="large" label-position="top">
          <el-form-item label="用户名">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" >
            <el-input v-model="email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="passwordAgain"></el-input>
          </el-form-item>
        </el-form>

        <el-button type="primary" :loading="loading" size="large" @click="signup">注册</el-button>

        <div class="login">
          <span>已有账号？<RouterLink to="/login">去登录</RouterLink></span>
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">


import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import router from "@/router";

let loading = ref(false)

let name = ref("")
let email = ref("")
let password = ref("")
let passwordAgain = ref("")


const signup = () => {
  loading.value = true
  if (passwordAgain.value !== password.value) {
    ElMessage.error("两次输入的密码不一致")
    loading.value = false
  }else {
    axios.post("http://47.93.134.155:8888/signup",{
      name: name.value,
      email: email.value,
      password: password.value
    }).then((response) =>{
      if (response.data === "success") {
        setTimeout(()=>{
          ElMessage.success("注册成功")
          router.push("/login")
        },1000)
      }else {
        ElMessage.error("注册失败")
      }
      loading.value = false
    })
  }
}

</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.signup-view {
  height: 100vh;
  display: grid;
  width: 30%;
  margin: auto;
}

.signup-container {
  display: grid;
  row-gap: 10px;
  align-content: center;
  align-self: center;
  height: fit-content;
}

.login {
  margin-top: 20px;
  display: grid;
  justify-content: center;
}

.title {
  padding-bottom: 20px;
  font-size: 20px;
}
</style>