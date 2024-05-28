<template>
  <div class="user-info">
    <el-skeleton :loading="loading" animated style="--el-skeleton-circle-size: 100px">
      <template #template>
        <el-skeleton-item variant="circle"/>
      </template>

      <template #default>
        <div class="info-container">
          <el-avatar :size="100"> user</el-avatar>

          <div class="info-list">
            <div class="info"><span>id</span> <span>{{ userInfo.info.uid }}</span></div>
            <div class="info"><span>昵称</span> <span>{{ userInfo.info.name }}</span></div>
            <div class="info"><span>邮箱</span> <span>{{ userInfo.info.email }}</span></div>
            <div class="info"><span>创建时间</span> <span>{{ userInfo.info.createTime }}</span></div>
          </div>
          <div class="button">
            <el-button v-if="isMe()" type="success">编辑个人信息</el-button>
            <el-button v-if="isMe()" type="success" @click="logout">退出登录</el-button>
          </div>
        </div>

      </template>
    </el-skeleton>
    <el-divider></el-divider>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import router from "@/router";

const props = defineProps({
  userId: {
    type: String,
    default: "1"
  }
})

let loading = ref(true)
let userInfo = ref({})

const isMe = () => {
  const id = localStorage.getItem("id")
  return id === props.userId;
}

onBeforeMount(() => {
  axios.get("http://47.93.134.155:8888/view/user/info",{
    params: {
      userId: props.userId
    }
  }).then((response) => {
    userInfo.value = response.data
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
})


const logout = () => {
  localStorage.clear()
  router.push("/login")
}

</script>

<style scoped>
.info-container {
  display: grid;
  grid-template-columns: 130px auto auto;
}

.info-list {
  display: grid;
  row-gap: 5px;
}

.info {
  display: flex;
  column-gap: 10px;
}
</style>