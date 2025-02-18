<script setup>
import { onMounted, ref } from "vue";
import { getNecessaryGoodsList } from "../api/index.js";
import BookListCard from "../components/BookListCard.vue";
import SearchCard from "../components/SearchCard.vue";

const necessaryGoodsList = ref("");

onMounted(() => {
  getNecessaryGoodsList().then((res) => {
    necessaryGoodsList.value = res;
  });
});
</script>

<template>
  <SearchCard />
  <div style="background: #ffffff; padding-bottom: 1rem; margin-bottom: 0.8rem">
    <BookListCard v-for="item in necessaryGoodsList" :key="item" :item="item" />
  </div>
</template>

<style scoped></style>
