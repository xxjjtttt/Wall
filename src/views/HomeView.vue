<template>

  <div class="home-view">
    <el-scrollbar>
      <div class="home-container">
        <div class="setting">

          <el-select v-model="sortBy" :placeholder="sortSelection.title">
            <el-option v-for="item in sortSelection.selectionList" :key="item" :lable="item" :value="item"></el-option>
          </el-select>

          <el-select v-model="displayBy" :placeholder="displaySelection.title">
            <el-option v-for="item in displaySelection.selectionList" :key="item" :lable="item" :value="item">
            </el-option>
          </el-select>

        </div>

        <div class="posts">
          <el-skeleton v-for="post in postViewData.list" :key="post.pid" :loading="loading" :rows="3" animated>
            <template #template>
            </template>
            <template #default>
              <el-card shadow="hover" @click="viewPost(post.pid)">
                <div class="card-header">
                  <span>{{ post.title }}</span>
                </div>
<!--                <template #footer>-->
<!--                  <span>{{ post.createTime }}</span>-->
<!--                </template>-->
              </el-card>
              <br>
              <br>
            </template>
          </el-skeleton>
        </div>

        <div class="page">
          <el-pagination
              :current-page="i"
              :page-size="10"
              :pager-count="10"
              :total="postViewData.num"
              layout="prev, pager, next"
              @current-change="indexChange"
          />
        </div>
        <br>
        <br>
        <br>
        <br>
      </div>
    </el-scrollbar>
  </div>


</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import router from "@/router";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import axios from "axios";


const sortSelection = {
  title: "排序方式",
  selectionList: [
    "最近", "最热", "随机"
  ]
}

const displaySelection = {
  title: "展示方式",
  selectionList: [
    "卡片"
  ]
}

const route = useRoute()
let i = ref()
let sortBy = ref(sortSelection.selectionList[0])
let displayBy = ref(displaySelection.selectionList[0])


let loading = ref(true)

const viewPost = (postId: number) => {
  router.push("/post/" + postId)
}

let postViewData = ref({})

const getData = ()=>{
  axios.get("http://47.93.134.155:8888/view/home", {
    params: {
      index: i.value
    }
  }).then((response) => {
    postViewData.value = response.data
    setTimeout(() => {
      loading.value = false
    }, 1000);
  })
}


onBeforeMount(() => {
  i.value = route.params.index
  getData()
})

const indexChange = (index: number) => {
  loading.value = true
  i.value = index.toString()
  router.push(index.toString())
  getData()
}
</script>

<style scoped>
.home-view {
  width: 100%;
  height: 100vh;
  display: grid;
  /* background-color: aqua; */
}

.home-container {
  display: grid;
  width: 55%;
  margin: auto;
  /* background-color: bisque; */
  grid-template-rows: 40px auto;
  margin-top: 10px;
}

.setting {
  display: grid;
  grid-template-columns: 100px 100px;
  column-gap: 10px;
}

.page {
  margin: auto;
  margin-top: 20px;
}
</style>