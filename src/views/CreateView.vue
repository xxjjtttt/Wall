<template>
  <div class="create-view">
    <div class="create-container">
      <div class="header">
        <el-page-header @back="back" class="page-header">
          <template #content>
            <span class="text-large font-600 mr-3">编辑帖子</span>
          </template>
        </el-page-header>
      </div>

      <div class="form">
        <div class="input">
          <span>标题</span>
          <el-input v-model="title"></el-input>
        </div>
        <div class="input">
          <span>正文</span>
          <el-input type="textarea" v-model="content" :rows="20" resize="none"></el-input>
        </div>

        <div class="button">
          <el-button type="success" size="large" :loading="loading" @click="createPost">发送帖子</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";

let loading = ref(false)

let title = ref("")
let content = ref("")

const id = localStorage.getItem("id")
const password = localStorage.getItem("password")
const createPost = () => {
  loading.value = true
  axios.post("http://47.93.134.155:8888/post/create",{
    uid: id,
    content: content.value,
    title: title.value,
    password: password
  }).then((response)=>{
    setTimeout(()=>{
      if (response.data === "success") {
        ElMessage.success("发帖成功")
        router.push("/")
      }else {
        ElMessage.error("你的信息有误，请重新登录")
      }
      loading.value = false
    },1000)
  })
}



const back = () => {
  router.go(-1)
}
</script>

<style scoped>
.create-view {
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-items: center;
}

.create-container {
  width: 66%;
  //background-color: #79bbff;
}

.header {
  margin-top: 30px;
}

.input {
  padding-top: 20px;
  display: grid;
  row-gap: 10px;
  font-size: 30px;
}

.button {
  padding-top: 20px;
}
</style>