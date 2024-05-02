<template>
    <el-scrollbar>
      <div class="container">
        <div class="setting">
          <div class="select">
            <el-select  v-model="sortMode" placeholder="sortMode">

            </el-select>
            </div>
            <div class="select">
            <el-select  v-model="displayMode" placeholder="displayMode"></el-select>
            </div>
        </div>
        <el-divider></el-divider>
        <el-skeleton :rows="5" />
        <el-divider></el-divider>
        <el-skeleton :rows="5" />
                <el-divider></el-divider>
        <el-skeleton :rows="5" />
                <el-divider></el-divider>
        <el-skeleton :rows="5" />
                <el-divider></el-divider>
        <el-skeleton :rows="5" />

      </div>

    </el-scrollbar>
</template>


<script lang="ts" setup>
import {ref} from 'vue';

const sortMode = ref("")
const displayMode = ref("")


</script>

<style scoped>
.container {
  margin: auto;
  width: 1200px;
}
.setting {
  margin-top: 20px;
  display: flex;
}

.select {
  width: 150px;
}
</style>