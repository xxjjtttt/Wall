<template>
  <div class="search-view">
    <el-scrollbar>

      <div class="search-container">
        <div class="select">
          <el-radio-group v-model="type" size="large">
            <el-radio-button label="帖子" value="post"></el-radio-button>
            <el-radio-button label="用户" value="user"></el-radio-button>
          </el-radio-group>
          <el-divider/>
        </div>

        <div class="search-data">
          <el-skeleton :loading="loading" :rows="20" animated>
            <template #template></template>
            <template #default>
              <div v-if="type === 'post'" class="posts">
                <div v-if="searchData.accurate">
                  <span>精确查找</span>
                  <el-card shadow="hover" @click="viewPost(searchData.accurate.pid)">
                    <div class="search-post">
                      <span>{{searchData.accurate.title}}</span>
                    </div>

                  </el-card>
                </div>

                <div v-if="searchData.fuzzy">
                  <span>模糊查找</span>
                </div>
                <div class="post" v-for="post in searchData.fuzzy" :key="post.pid">
                  <el-card shadow="hover" @click="viewPost(post.pid)">
                    {{ post.title}}
                  </el-card>
                </div>
              </div>

              <div v-else class="user">
                <div v-if="searchData.accurate">
                  <span>精确查找</span>
                  <el-card shadow="hover" @click="viewUser(searchData.accurate.uid)">
                    <div class="search-user">
                      <span>{{searchData.accurate.uid}}</span>
                      <span>{{searchData.accurate.name}}</span>
                    </div>
                  </el-card>
                </div>

                <div v-if="searchData.fuzzy">
                  <span>模糊查找</span>
                </div>
                <div class="post" v-for="post in searchData.fuzzy" :key="post.uid">
                  <el-card shadow="hover" @click="viewUser(post.uid)">
                    <div class="search-user">
                      <span>{{post.uid}}</span>
                      <span>{{post.name}}</span>
                    </div>
                  </el-card>
                </div>
              </div>
              <div class="tip"><p>没有数据了</p></div>
            </template>
          </el-skeleton>
        </div>

      </div>

    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {onBeforeMount, ref, watch} from "vue";
import axios from "axios";
import router from "@/router";

const route = useRoute()

let key = ref(route.query.key)
let loading = ref(true)
let type = ref("post")
let searchData = ref({})

const getData = () => {
  axios.get("http://47.93.134.155:8888/view/search/"+type.value,{
    params: {
      key: key.value
    }
  }).then((response) => {
    searchData.value = response.data
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
}

const viewPost = (postId: number) => {
  router.push("/post/" + postId)
}

const viewUser = (userId: number) => {
  router.push("/user/" + userId)
}

onBeforeMount(() => {
  getData()
})

onBeforeRouteUpdate((to, from, next) => {
  key.value = to.query.key
  loading.value = true
  getData()
})

watch(type, () => {
  loading.value = true
  getData()
})
</script>

<style scoped>
.search-view {
  height: 100vh;
  width: 100%;
}

.search-container {
  width: 66.66%;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto;
  margin: auto;
  margin-top: 20px;
}

.search-user {
  display: grid;
  grid-template-columns: 20px auto;
  font-size: 20px;
  column-gap: 10px;
}

.search-post {
  font-size: 20px;

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