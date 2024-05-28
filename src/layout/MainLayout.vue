<template>
  <div class="home-layout">
    <div class="topnav">
      <TopnavComponent/>
    </div>
    <div class="bottom-content">
<!--      <div class="sidenav">-->
<!--                <SidenavComponent/>-->
<!--      </div>-->

      <div class="search-user">
        <RouterView></RouterView>
      </div>

      <div class="link">
        <!--千斧云互联底部友链开始-->
      <!-- todo 友链显示-->

        <p>本站服务器由<a href="https://idc.qqfy.cn" target="_blank">
          <img src="https://idc.qqfy.cn/themes/web/zjmf/qflogo.png" style="height: 50px" alt="Rob Roy Glacier">
        </a>提供服务<br>本站安全由<a href="https://idc.qqfy.cn" target="_blank">
          <img src="https://idc.qqfy.cn/themes/web/zjmf/qflogo.png" style="height: 50px" alt="Rob Roy Glacier">
        </a>提供防护</p>
        <!--千斧云互联底部友链结束-->
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>
import TopnavComponent from "../components/public/TopnavComponent.vue";
// import SidenavComponent from "@/components/public/SidenavComponent.vue";
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
  //grid-template-columns: 200px auto;
  /* background-color: rgb(42, 187, 139); */
}

.sidenav {
  display: grid;
  /* background-color: rgb(23, 117, 124); */
}

.search-user {
  display: grid;
  justify-items: center;
}

.link {
  background-color: #a0cfff;
}
</style>