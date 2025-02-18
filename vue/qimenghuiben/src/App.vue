<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import router from "./router/index.js";
const active = ref(0);
const route = useRoute();
watch(route, () => {
  if (route.path.includes("FindPictureBook")) active.value = 0;
  else if (route.path.includes("FindBookList")) active.value = 1;
  else if (route.path.includes("ListenStory")) active.value = 2;
  else if (route.path.includes("Me")) active.value = 3;
  else active.value = -1;
});
onMounted(() => {
  console.log(router === useRouter());
});
</script>

<template>
  <router-view />
  <van-tabbar v-model="active" router>
    <van-tabbar-item icon="home-o" to="/FindPictureBook">
      找绘本
    </van-tabbar-item>
    <van-tabbar-item icon="search" to="/FindBookList">找书单</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/ListenStory">听故事</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/Me">我</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>
