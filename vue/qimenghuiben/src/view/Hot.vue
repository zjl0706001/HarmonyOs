<script setup>
import { onMounted, ref, watch } from "vue";
import { getHotList, getHotListInfo } from "../api/index.js";
import HotItemCard from "../components/HotItemCard.vue";
const ageIndex = ref(0);
const classIndex = ref(0);
const monthIndex = ref(0);
const data = ref([]);
const hotList = ref([]);
onMounted(() => {
  getHotList().then((res) => {
    data.value = res;
  });
  getHotListInfo("", "", 0).then((res) => {
    hotList.value = res;
  });
});

watch([ageIndex, classIndex, monthIndex], () => {
  getHotListInfo(
    ageIndex.value === 0 ? "" : data.value.age[ageIndex.value - 1].attr_val_id,
    classIndex.value === 0
      ? ""
      : data.value.category[classIndex.value - 1].category_id,
    monthIndex.value,
  ).then((res) => {
    hotList.value = res;
  });
});
</script>

<template>
  <van-tabs v-model:active="ageIndex" sticky>
    <van-tab title="全年龄" />
    <van-tab v-for="_ in data.age" :title="_.attr_name" />
  </van-tabs>
  <van-tabs v-model:active="classIndex" sticky>
    <van-tab title="全部分类" />
    <van-tab v-for="_ in data.category" :title="_.category_name" />
  </van-tabs>
  <van-tabs v-model:active="monthIndex" sticky>
    <van-tab title="月总榜" />
    <van-tab title="月上升榜" />
  </van-tabs>
  <div
    style="
      padding-top: 0.5rem;
      border-top: #dddddd 0.01rem solid;
      background: white;
    "
  >
    <HotItemCard v-for="(_, index) in hotList" :item="_" :index="index" />
  </div>
</template>

<style scoped></style>
