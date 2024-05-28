<template>

  <div class="post-info">
    <el-skeleton :loading="loading" :rows="100" animated>
      <div class="user-info"  @click="viewUser(postViewData.post.userData.uid)">
        <el-avatar :size="50">USER</el-avatar>
        <span class="name">{{ postViewData.post.userData.name }}</span>
        <el-divider></el-divider>
      </div>

<!--      <div class="user-post">-->
<!--        <el-scrollbar>-->
<!--          <div v-for="post in userPosts" :key="post.pid" class="post">-->
<!--            <el-card>-->
<!--              {{ post.ptitle }}-->
<!--            </el-card>-->
<!--          </div>-->
<!--        </el-scrollbar>-->
<!--      </div>-->
    </el-skeleton>
  </div>

</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import router from "@/router";

const props = defineProps({
  pid: {
    type: String,
    default: "1"
  }
})


let loading = ref(true)
// let userPosts = ref([]);

const viewUser = (uid: number)=>{
  router.push("/user/"+uid.toString())
}

// onBeforeMount(() => {
//   axios.get("http://localhost:8080/view/user/info").then((response) => {
//     userPosts.value = response.data
//     setTimeout(() => {
//       loading.value = false
//     }, 1000)
//   })
// });
let postViewData = ref({})

const getData = ()=>{
  axios.get("http://47.93.134.155:8888/view/post", {
    params: {
      postId: props.pid
    }
  }).then((response) => {
    postViewData.value = response.data
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
}

onBeforeMount(()=>{
  getData()
  console.log()
})
</script>

<style scoped>
.post-info {
  display: grid;
  grid-template-rows: 80px auto;
}

.name {
  font-size: 28px;
}

.user-post {
  height: 100vh;
}

.post {
  margin-bottom: 10px;
}
</style>