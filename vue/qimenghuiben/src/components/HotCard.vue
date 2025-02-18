<script setup>
defineProps(["item"]);
</script>

<template>
  <div class="book-list-card">
    <h2>{{ item["title"] }}</h2>
    <div>
      <img :src="item['gallery'][0].image" alt="" style="margin-left: 1.4rem" />
      <img
        :src="item['gallery'][1].image"
        alt=""
        style="margin-left: -2.8rem"
      />
      <img
        :src="item['gallery'][2].image"
        alt=""
        style="margin-left: -2.8rem"
      />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 8rem;
  border-radius: 0 1rem 0 0;
}
.book-list-card {
  background: #f6f6f6;
  height: 14rem;
  width: 14rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
}
h2 {
  text-align: center;
}
</style>
