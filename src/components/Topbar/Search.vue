<template>
  <div class="container">
    <el-input v-model="searchText" class="input" clearable placeholder="Search Wall">
      <template #suffix>
        <el-button :icon="Search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Search} from "@element-plus/icons-vue";

let searchText = ref("")
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;
}

:deep(.el-input__wrapper) {
  border-radius: 40px;
  width: 500px;
  background-color: #EAEDEF;
}

:deep(.el-button) {
  border-radius: 100px;
}
</style>