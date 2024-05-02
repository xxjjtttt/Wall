<template>
  <div class="container">
    <div class="topbar-container">
      <Topbar/>
    </div>
    <div class="main-container">
      <div class="sidebar-container">
        <Sidebar/>
      </div>

      <div class="content-container">
          <router-view></router-view>
      </div>
    </div>
  </div>


</template>

<script setup>
import Topbar from '@/components/Topbar.vue'
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;
}

.topbar-container {
  position: fixed; /* 固定在顶部 */
  top: 0; /* 距离顶部的距离为0 */
  width: 100%; /* 宽度为100% */
  height: 55px;
  border-bottom: 1px solid var(--el-border-color);
  z-index: 999;
  background-color: white;
}

.main-container {
  margin-top: 56px;
  margin-left: 251px;
  width: 100%;
  height: calc(100vh - 56px);
}

.sidebar-container {
  position: fixed; /* 固定侧边栏位置 */
  width: 200px; /* 设置侧边栏宽度 */
  top: 56px; /* 距离顶部栏56px */
  height: 100%; /* 设置侧边栏高度为100% */
}

.content-container {
  height: 100%;
  width: 100%;
}
</style>
