<template>
  <div class="topnav-component">
    <div class="logo-content">
      <LogoComponent />
    </div>
    <div class="search-content">
      <SearchComponent />
    </div>
    <div class="topmenu-content">
      <TopmenuComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoComponent from "./LogoComponent.vue";
import SearchComponent from "./SearchComponent.vue";
import TopmenuComponent from "./TopmenuComponent.vue";
</script>

<style scoped>
.topnav-component {
  border-bottom: 1px solid var(--el-border-color);
  display: grid;
  grid-template-columns: 7.93px 76.96fr 15.19fr;
}

.logo-content {
  margin-left: 10px;
}

.search-content {
  align-content: center;
  margin: auto;
}

.topmenu-content {
  margin-right: 10px;
}
</style>