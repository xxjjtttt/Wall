<template>

  <div class="sidenav-component">
    <el-menu :collapse="isCollapse" :default-active="activeIndex" @select="handleSelect">
      <el-scrollbar>
        <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index" class="item">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.tag }}</span>
        </el-menu-item>
        <el-divider></el-divider>
        <el-sub-menu v-for="items in subMenuItems" :key="items.id" :index="items.id">
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
import {ref, shallowRef} from 'vue';
import {House, Message, User} from '@element-plus/icons-vue'

const mainMenuItems = [
  {index: "/", tag: "主页", icon: House},
  {index: "/Popular", tag: "流行", icon: Message},
  {index: "/All", tag: "所有", icon: User}
]

const subMenuItems = [
  {
    id: "1", title: "社区", icon: "", menuItems: [
      {index: "/a", tag: "a", icon: House},
      {index: "/b", tag: "b", icon: House},
      {index: "/c", tag: "c", icon: House},
      {index: "/d", tag: "d", icon: House}
    ]
  }
]
//   },
//   {
//     id: "2", title: "COMMUNITYb", icon: House, menuItems: [
//       { index: "/d", tag: "Home", icon: House },
//       { index: "/e", tag: "Home", icon: House },
//       { index: "/f", tag: "Home", icon: House },
//       { index: "/g", tag: "Home", icon: House }
//     ]
//   }
// ]
let menuItems = shallowRef(mainMenuItems)

const isCollapse = ref(false)

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