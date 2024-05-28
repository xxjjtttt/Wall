<template>
  <div class="login-view">
<!--    <img src="https://api.kdcc.cn" alt="" class="background">-->
    <div class="login-container">

      <el-text class="title" type="primary">登录方式</el-text>

      <el-radio-group label="登录方式" v-model="type" size="large" class="select">
        <el-radio-button label="UID" value="id"></el-radio-button>
        <el-radio-button label="邮箱" value="email"></el-radio-button>
        <el-radio-button label="用户名" value="name"></el-radio-button>
      </el-radio-group>
      <el-form size="large" label-position="top">
        <el-form-item label="用户ID" v-if="type==='id'" >
          <el-input v-model="account" clearable/>
        </el-form-item>
        <el-form-item label="用户邮箱" v-if="type==='email'">
          <el-input v-model="account" clearable/>
        </el-form-item>
        <el-form-item label="用户名" v-if="type==='name'" >
          <el-input v-model="account" clearable/>
        </el-form-item>
        <el-form-item label="密码" >
          <el-input v-model="password" clearable show-password/>
        </el-form-item>
      </el-form>
      <el-button type="primary" :loading="loading" size="large" @click="login">登录</el-button>

      <div class="sign-up">
        <span>没有账号？<RouterLink to="/signup">去注册</RouterLink></span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

import axios from "axios";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import router from "@/router";

let type = ref("id")
let loading = ref(false)

let account = ref("")
let password = ref("")


const login = ()=> {
  axios.post("http://47.93.134.155:8888/login",{
    type: type.value,
    account: account.value,
    password: password.value
  }).then((response)=>{
    loading.value = true
    setTimeout(()=>{
      if (response.data.msg === "success") {
        const user = response.data.user
        localStorage.setItem("id", user.uid)
        localStorage.setItem("name", user.uname)
        localStorage.setItem("email", user.uemail)
        localStorage.setItem("password", user.upassword)
        ElMessage.success("登录成功")
        router.push("/")
      } else {
        ElMessage.error("你的信息出错了")
        loading.value = false
      }
    },1000)
  })
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

.select {
  margin-bottom: 20px;
}

.login-view {
  height: 100vh;
  display: grid;
  width: 30%;
  margin: auto;
}

.login-container {
  display: grid;
  row-gap: 10px;
  align-content: center;
  align-self: center;
  height: fit-content;
}

.sign-up {
  margin-top: 20px;
  display: grid;
  justify-content: center;
}

.title {
  padding-bottom: 20px;
  font-size: 20px;
}
</style>
