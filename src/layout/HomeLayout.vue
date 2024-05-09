<template>
  <div class="home-layout">
    <div class="topnav">
      <TopnavComponent />
    </div>
    <div class="bottom-content">
      <div class="sidenav">
        <SidenavComponent />
      </div>
      <div class="content">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopnavComponent from "../components/public/TopnavComponent.vue";
import SidenavComponent from "@/components/public/SidenavComponent.vue";
</script>

<style scoped>
.home-layout {
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 55px auto;
}

.topnav {
  display: grid;
  /* background-color: rgb(34, 202, 202); */
}

.bottom-content {
  display: grid;
  height: calc(100vh - 56px);
  grid-template-columns: 200px auto;
  /* background-color: rgb(42, 187, 139); */
}

.sidenav {
  display: grid;
  /* background-color: rgb(23, 117, 124); */
}
</style>