<template>
  <el-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <el-image
          src="https://pic1.zhimg.com/daa3c5b52b93b069bf118b43244f1552_r.jpg?source=1def8aca"
      />
    </template>
    <template #extra>
      <el-button type="primary" @click="back">上一页</el-button>
      <el-button type="primary" @click="backToHome">主页</el-button>
    </template>
  </el-result>
</template>


<script setup lang="ts">


import router from "@/router";

const back = ()=> {
  router.go(-1)
}

const backToHome = () => {
  router.push("/")
}
</script>


<style scoped>

</style>