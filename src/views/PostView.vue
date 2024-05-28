<template>
  <div class="post-view">
    <el-scrollbar>

      <div class="post-container">

        <div class="post-content">
          <PostComponent :pid="i" />
        </div>

        <div class="info-content">
          <PostInfo :pid="i"/>
        </div>

      </div>
    </el-scrollbar>
  </div>

</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import PostInfo from "@/components/postview/PostinfoComponent.vue";
import PostComponent from "@/components/postview/PostComponent.vue";
import axios from "axios";
import {onBeforeMount, ref} from "vue";


const route = useRoute()
const i = route.params.postId
</script>

<style scoped>
.post-view {
  width: 100%;
  height: 100vh;
  display: grid;
}

.post-container {
  display: grid;
  width: 66.66%;
  height: 100vh;
  grid-template-columns: 68.82% 31.07%;
  margin: auto;
  margin-top: 10px;
}

.post-content {
  margin-top: 20px;
}

.info-content {
  margin-top: 20px;
  margin-left: 10px;
}


</style>
