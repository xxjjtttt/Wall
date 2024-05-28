<template>
  <div class="user-data">
    <div class="select">
      <el-radio-group v-model="type" size="large" @change="changeType">
        <el-radio-button label="帖子" value="post"></el-radio-button>
        <el-radio-button label="喜欢" value="vote"></el-radio-button>
        <el-radio-button label="评论" value="comment"></el-radio-button>
      </el-radio-group>
    </div>
    <el-skeleton :loading="loading" :rows="30" animated>
      <template #template></template>
      <template #default>
        <div class="posts" v-if="type==='post'">
          <div class="post" v-for="post in data" :key="post.pid">
            <el-card @click="viewPost(post.pid)" shadow="hover">
              {{ post.title }}
            </el-card>
          </div>
        </div>
        <div class="votes" v-else-if="type==='vote'">
          <div class="vote" v-for="vote in data" :key="vote.vid">
            <el-card @click="viewPost(vote.pid)" shadow="hover">
              <span v-if="vote.type==='u'">点赞了{{ vote.pid }}</span>
              <span v-if="vote.type==='d'">点踩了{{ vote.pid }}</span>
            </el-card>
          </div>
        </div>
        <div class="comments" v-else-if="type==='comment'">
          <div class="comment" v-for="comment in data" :key="comment.cid">
            <el-card @click="viewPost(comment.pid)" shadow="hover">
              {{ comment.content }}
            </el-card>
          </div>
        </div>
        <div class="tip"><p>没有数据了</p></div>
      </template>
    </el-skeleton>
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

let type = ref("post")
let loading = ref(true)

let data = ref([])

const getData = () => {
  axios.get("http://47.93.134.155:8888/view/user/"+type.value, {
    params: {
      userId: props.userId
    }
  }).then((response) => {
    data.value = response.data
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
}

onBeforeMount(() => {
  getData()
})

const changeType = () => {
  loading.value = true
  getData()
}

const viewPost = (postId: number)=> {
  router.push("/post/"+ postId.toString())
}
</script>

<style scoped>
.select {
  padding-bottom: 30px;
}

.el-card {
  margin-top: 10px;
}

.tip {
  display: grid;
  margin-top: 30px;
  justify-content: center;
}
</style>