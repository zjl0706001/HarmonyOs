<script setup>
import router from "../router/index.js";

defineProps(["item"]);
const go = (id) => {
  router.push({ name: "Detail", params: { id: id } });
};
</script>

<template>
  <div class="good-book-card" @click="go(item.id)">
    <img :src="item.url" alt="" />
    <div class="good-book-card-info">
      <div class="good-book-card-title">{{ item.title }}</div>
      <p>{{ item.info }}</p>
    </div>
  </div>
</template>

<style scoped>
.good-book-card {
  height: 10rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}
img {
  height: 100%;
  border-radius: 0 1rem 0 0;
}
.good-book-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.good-book-card-info {
  box-sizing: border-box;
  padding: 0 1rem;
}
.good-book-card-info p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
