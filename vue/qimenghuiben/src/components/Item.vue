<script setup>
import router from "../router/index.js";
defineProps(["item"]);
const go = (id) => {
  router.push({ name: "Tag", params: { id: id } });
};
</script>

<template>
  <van-col @click="go(item.id)" style="width: 20%" class="item">
    <van-image width="3.5rem" height="3.5rem" fit="cover" :src="item.url" />
    <div class="itemDoc">{{ item.title }}</div>
  </van-col>
</template>

<style scoped>
.item {
  text-align: center;
}
.itemDoc {
  margin-top: 0.4rem;
  color: #808080;
}
</style>
