<script setup>
import { useRoute } from "vue-router";
import SearchCard from "../components/SearchCard.vue";
import { onMounted, ref } from "vue";
import { getSearchList } from "../api/index.js";
import TalentGoodsCard from "../components/TalentGoodsCard.vue";
const route = useRoute();
const active = ref(0);
const list = ref([]);
onMounted(() => {
  getSearchList(route.params.keyWord).then((res) => {
    list.value = res;
  });
});
const RY = () => {
  getSearchList("入园").then((res) => {
    list.value = res;
  });
};
const SG = () => {
  getSearchList("诗歌").then((res) => {
    list.value = res;
  });
};
const DW = () => {
  getSearchList("大卫").then((res) => {
    list.value = res;
  });
};
const getTB = (index) => {
  getSearchList(route.params.keyWord, index.name + 1).then((res) => {
    list.value = res;
  });
};
</script>

<template>
  <van-sticky style="background: white">
    <SearchCard />
    <div style="background: white">
      <button @click="RY">入园</button> <button @click="SG">诗歌</button>
      <button @click="DW">大卫</button>
    </div>
    <van-tabs v-model:active="active" @click-tab="getTB">
      <van-tab title="绘本" />
      <van-tab title="书单" />
      <van-tab title="音频故事" />
    </van-tabs>
  </van-sticky>
  <div style="background: white">
    <TalentGoodsCard v-for="item in list" :key="item" :item="item" />
    <div
      v-if="active === 1 && list.length === 0"
      style="border: white solid 1rem"
    >
      <img
        src="https://static.cdnmama.com/hb/dist/asset/img/no-order.png?v=5a633f3c"
        alt=""
      />
      <div
        style="
          margin-bottom: 19rem;
          text-align: center;
          font-size: 1rem;
          color: #8a8a8a;
        "
      >
        暂无书单
      </div>
    </div>
    <div
      v-if="active === 2 && list.length === 0"
      style="border: white solid 1rem"
    >
      <img
        src="https://static.cdnmama.com/hb/dist/asset/img/no-order.png?v=5a633f3c"
        alt=""
      />
      <div
        style="
          margin-bottom: 19rem;
          text-align: center;
          font-size: 1rem;
          color: #8a8a8a;
        "
      >
        暂无音频故事
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background: #ffffff;
  margin: 0.5rem 0 1rem 1rem;
  padding: 0.5rem 1rem;
  border: 0.11rem solid #f3f3f3;
  border-radius: 1rem;
}
img {
  display: block;
  width: 40%;
  margin: 4rem auto;
}
</style>
