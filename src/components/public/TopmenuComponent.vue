<template>
  <div class="topmenu-component">
    <el-menu :default-active="activeIndex" :ellipsis="false" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index" class="item">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span class="text">{{ item.tag }}</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script lang="ts" setup>
import router from "@/router";
import {ref} from "vue";
import {Bell, Comment, Plus, User} from "@element-plus/icons-vue"

const id = localStorage.getItem("id")

const menuItems = [
  {index: "/none", tag: "", icon: Comment},
  {index: "/create", tag: "Create", icon: Plus},
  {index: "/none", tag: "", icon: Bell},
  {index: "/user/" + id, tag: "", icon: User}
]

let activeIndex = ref("")

function handleSelect(key: string, keyPath: any) {
  console.log(activeIndex)
  router.push({
    path: key
  })
}

</script>

<style scoped>
.el-menu {
  height: 55px;
  border: none;
}

.el-menu-item {
  border-radius: 60px;
  border: none;
}


.text {
  font-size: 15px;
}
</style>