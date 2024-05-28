<template>
  <div class="user-view">
    <el-scrollbar>
      <div class="overview">

        <div class="user-info">
          <UserinfoComponent :user-id="i"/>
        </div>

        <div class="user-data">
          <UserdataComponent :user-id="i"/>
        </div>

      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import UserinfoComponent from "@/components/userview/UserinfoComponent.vue";
import {useRoute} from "vue-router";
import UserdataComponent from "@/components/userview/UserdataComponent.vue";

const route = useRoute()
const i = route.params.userId

</script>

<style scoped>
.user-view {
  width: 100%;
  height: 100vh;
}

.overview {
  display: grid;
  width: 66.66%;
  margin: auto;
  margin-top: 20px;
  grid-template-rows: 150px auto;
}

.user-info {
  //background-color: antiquewhite;
}

.user-data {
  //background-color: blueviolet;
}
</style>