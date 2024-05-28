<template>
  <div class="search-component">
    <el-input v-model="searchText" class="input" clearable placeholder="Search Wall">
      <template #suffix>
        <el-button :icon="Search" @click="doSearch"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Search} from "@element-plus/icons-vue";
import router from "@/router";

let searchText = ref("")

const doSearch = () => {
  router.push({
    path: "/search",
    query: {
      key: searchText.value
    }
  })
}
</script>

<style scoped>
.search-component {
  margin: auto;
}

:deep(.el-input__wrapper) {
  height: 40px;
  border-radius: 40px;
  background-color: #EAEDEF;
}

:deep(.el-button) {
  border-radius: 100px;
}
</style>