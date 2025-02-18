<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps(["item"]);
const go = (id) => {
  router.push({ name: "BookList", params: { id: id } });
};
</script>

<template>
  <div @click="go(item.goods_id)" class="book-list-card">
    <div>
      <img :src="item['gallery'][0].images" alt="" style="margin-left: 12%" />
      <img
        :src="item['gallery'][1].images"
        alt=""
        style="margin-left: -2.8rem"
      />
      <img
        :src="item['gallery'][2].images"
        alt=""
        style="margin-left: -2.8rem"
      />
    </div>
    <h2>{{ item["goods_name"] }}</h2>
    <p>{{ item.goods_id }}{{ item["expert_description"] }}</p>
  </div>
</template>

<style scoped>
img {
  height: 10rem;
  border-radius: 0 1rem 0 0;
}
.book-list-card {
  height: 24rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}
h2 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
p {
  line-height: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
