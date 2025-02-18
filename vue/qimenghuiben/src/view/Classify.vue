<script setup>
import Item from "../components/Item.vue";
import { onMounted, ref } from "vue";
import { getIndexData } from "../api/index.js";

const data = ref("");
onMounted(() => {
  getIndexData().then((res) => {
    data.value = res;
  });
});
</script>

<template>
  <div style="background: #ffffff" v-for="_ in data">
    <van-row class="title">{{ _.name }}</van-row>
    <van-row class="itemList">
      <Item
        v-for="item in _['tag_list']"
        :key="item.name"
        :item="{ title: item.name, url: item.image, id: item.id }"
      />
    </van-row>
  </div>
</template>

<style scoped>
.title {
  padding: 0.7rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #404040;
}
.itemList {
  padding: 1rem;
}
</style>
