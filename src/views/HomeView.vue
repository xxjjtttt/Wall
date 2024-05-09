<template>

  <div class="home-view">
    <el-scrollbar>
      <div class="home-container">
        <div class="setting">

          <el-select :placeholder="sortSelection.title" v-model="sortBy">
            <el-option v-for="item in sortSelection.selectionList" :key="item" :value="item" :lable="item"></el-option>
          </el-select :placeholder="displaySelection.title" v-model="displayBy">

          <el-select>
            <el-option v-for="item in displaySelection.selectionList" :key="item" :value="item" :lable="item">
              <template #prefix>
                <el-icon>
                  <component :is="item"></component>
                </el-icon>
              </template>
            </el-option>
          </el-select>

        </div>

        <div class="postlist">
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
          <el-skeleton :rows="5" />
        </div>

      </div>
    </el-scrollbar>
  </div>


</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Postcard } from "@element-plus/icons-vue";

const sortSelection = {
  title: "排序方式",
  selectionList: [
    "最近", "最热"
  ]
}

const displaySelection = {
  title: "展示方式",
  selectionList: [Postcard]
}

let sortBy = ref("最近")
let displayBy = ref(Postcard)

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
  margin-top: 10px;
  margin: auto;
  /* background-color: bisque; */
  grid-template-rows: 40px auto;
}

.setting {
  display: grid;
  grid-template-columns: 100px 100px;
  column-gap: 10px;
}
</style>