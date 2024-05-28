<template>
  <div class="logo-component">
    <div class="logo-container">
      <img alt="logo" src="/icon.png">
    </div>
    <div class="title-container">
      <span>WALL</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.logo-component {
  display: grid;
  width: 100%;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 10px;
}

img {
  width: 50px;
}

.title-container {
  font-size: 28px;
}
</style>
