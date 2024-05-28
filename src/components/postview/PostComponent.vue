<template>

  <div class="post">
    <el-skeleton :loading="loading" :rows="100" animated>
      <template #template></template>
      <template #default>
        <div class="main-content">
          <div class="post-content">

            <el-page-header @back="getBack">
              <template #content>
                <span> {{ postViewData.post.title }} </span>
              </template>
            </el-page-header>

            <el-card>
              {{ postViewData.post.content }}
            </el-card>

            <div class="like">
              <span class="like-number"><el-icon>
                  <component :is="Star"></component>
                </el-icon>{{ voteNum }}</span>

              <el-button-group>
                <el-button :icon="ArrowUp" circle type="success" @click="upVote"/>
                <el-button :icon="ArrowDown" circle type="danger" @click="downVote"/>
              </el-button-group>
            </div>

          </div>

          <div class="comment-content">
            <div class="comment-title">
              COMMENTS
            </div>
            <div class="input">
              <el-input type="textarea" :rows="row" resize="none"  @focus="focus" v-model="content"/>
              <div class="button">
                <el-button v-show="show" type="success" @click="createComment">发送评论</el-button>
                <el-button v-show="show" type="success" @click="blur">取消</el-button>
              </div>
            </div>


            <div class="comments">

              <el-card class="comment" v-for="comment in postViewData.comments" :key="comment.cid">
                <div class="comment-header">
                  <span>{{ comment.userData.name }}</span>
                  <span>{{ comment.createTime }}</span>
                </div>
                <div class="comment-content">{{ comment.content }}</div>
              </el-card>

            </div>
            <br>
            <br>
            <br>
            <br>
          </div>

        </div>
      </template>
    </el-skeleton>
  </div>


</template>


<script lang="ts" setup>

import {ArrowDown, ArrowUp, Star} from "@element-plus/icons-vue";
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import router from "@/router";
import {ElMessage} from "element-plus";

const props = defineProps({
  pid: {
    type: String,
    default: "1"
  }
})

let postViewData = ref({})
let loading = ref(true)

let row = ref(1)
let show = ref(false)

let content = ref("")

let voteNum = ref(0)

const getBack = () => {
  router.go(-1)
}

const focus = () => {
  show.value = true
  row.value = 6
}

const blur = () => {
  show.value = false
  row.value = 1
  content.value = ""
}

const uid = localStorage.getItem("id")
const password = localStorage.getItem("password")

const createComment = () => {
  axios.post("http://47.93.134.155:8888/comment/create", {
    content: content.value,
    pid: props.pid,
    uid: uid,
    password: password
  }).then((response)=>{
    if (response.data === "success") {
      ElMessage.success("评论成功")
      blur()
    }else {
      ElMessage.error("评论失败，请稍后重试")
    }
  })
}

const getData = ()=>{
  axios.get("http://47.93.134.155:8888/view/post", {
    params: {
      postId: props.pid
    }
  }).then((response) => {
    postViewData.value = response.data
    voteNum.value = response.data.vote
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
}

const upVote = ()=> {
  axios.post("http://47.93.134.155:8888/post/vote",{
    voteType: "u",
    postId: props.pid,
    userId: uid
  }).then((response)=>{
    if (response.data === "success") {
      ElMessage.success("点赞成功");
      voteNum.value += 1
    }else {
      ElMessage.error("一个人只能点一次赞哦");
    }
  }).catch(()=>{
    ElMessage.error("一个人只能点一次踩哦");
  })
}
const downVote = ()=> {
  axios.post("http://47.93.134.155:8888/post/vote",{
    voteType: "d",
    postId: props.pid,
    userId: uid
  }).then((response)=>{
    if (response.data === "success") {
      ElMessage.success("点踩成功");
      voteNum.value -= 1
    }else {
      ElMessage.error("一个人只能点一次踩哦");
    }
  }).catch(()=>{
    ElMessage.error("一个人只能点一次踩哦");
  })
}

onBeforeMount(() => {
  getData()
})

</script>


<style scoped>
.main-content {
  display: grid;
}

.el-card {
  margin-top: 10px;
}

.comment-content {
  display: grid;
  font-size: 20px;
  margin-top: 10px;
}

.like {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  margin-top: 20px;
}

.like-number {
  font-size: 25px;
}

.input {
  padding-top: 30px;
  padding-bottom: 30px;
}

.comment {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.comment-header span {
  font-weight: bold;
}

.comment-content {
  font-size: 14px;
}

.button {
  padding-top: 10px;
}
</style>