<template>
  <div class="container">
    <div class="logo">
      <Logo/>
    </div>
    <div class="search">
      <Search/>
    </div>
    <div class="shortcut">
      <Shortcut/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/components/Topbar/Logo.vue'
import Search from "@/components/Topbar/Search.vue";
import Shortcut from "@/components/Topbar/Shortcut.vue";
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;
}

.logo {
  margin: 5px auto 5px 10px;
}

.search {
  margin: 8px auto;
}
</style>