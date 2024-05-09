<template>

  <div class="sidenav-component">
    <el-menu :default-active="activeIndex" @select="handleSelect">
      <el-scrollbar>
        <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index" class="item">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.tag }}</span>
        </el-menu-item>
        <el-divider></el-divider>
        <el-sub-menu v-for="items in subMenuItems" :index="items.title" :key="items.title">
          <template #title>
            <el-icon>
              <component :is="items.icon"></component>
            </el-icon>
            <span>{{ items.title }}</span>
          </template>
          <el-menu-item v-for="item in items.menuItems" :key="item.index" :index="item.index" class="item">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.tag }}</span>
          </el-menu-item>
          <el-divider></el-divider>
        </el-sub-menu>
      </el-scrollbar>
    </el-menu>
  </div>

</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue';
import { House, Message, User } from '@element-plus/icons-vue'

const mainMenuItems = [
  { index: "/", tag: "Home", icon: House },
  { index: "/message", tag: "Message", icon: Message },
  { index: "/me", tag: "Me", icon: User }
]

const subMenuItems = [
  {
    title: "COMMUNITYa", icon: House, menuItems: [
      { index: "/", tag: "Home", icon: House },
      { index: "/a", tag: "Home", icon: House },
      { index: "/b", tag: "Home", icon: House },
      { index: "/c", tag: "Home", icon: House }
    ]
  },
  {
    title: "COMMUNITYb", icon: House, menuItems: [
      { index: "/d", tag: "Home", icon: House },
      { index: "/e", tag: "Home", icon: House },
      { index: "/f", tag: "Home", icon: House },
      { index: "/g", tag: "Home", icon: House }
    ]
  },
  {
    title: "COMMUNITYc", icon: House, menuItems: [
      { index: "/h", tag: "Home", icon: House },
      { index: "/i", tag: "Home", icon: House },
      { index: "/j", tag: "Home", icon: House },
      { index: "/k", tag: "Home", icon: House }
    ]
  },
  {
    title: "COMMUNITYd", icon: House, menuItems: [
      { index: "/l", tag: "Home", icon: House },
      { index: "/m", tag: "Home", icon: House },
      { index: "/n", tag: "Home", icon: House },
      { index: "/o", tag: "Home", icon: House }
    ]
  }
]

let menuItems = shallowRef(mainMenuItems)


let activeIndex = ref("1")

const handleSelect = (index: string) => {
  console.log(index)
}

</script>

<style scoped>
.sidenav-component {
  height: 100vh;
}

.el-menu {
  height: 100%;
  top: 1px;
}

.el-menu-item {
  height: 50px;
  border-radius: 18px;
  font-size: 15px;
}
</style>