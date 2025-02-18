<script setup>
import Item from "../components/Item.vue";
import GoodBookCard from "../components/GoodBookCard.vue";
import BookListCard from "../components/BookListCard.vue";
import HotCard from "../components/HotCard.vue";
import TalentGoodsCard from "../components/TalentGoodsCard.vue";
import {
  getIndexData,
  getGoodBookList,
  getNecessaryGoodsList,
  getHomeLeaderboard,
  getTalentGoodsList,
  getAudioList,
} from "../api/index.js";
import { ref, onMounted } from "vue";
import SearchCard from "../components/SearchCard.vue";

const data = ref("");
const goodBookList = ref("");
const necessaryGoodsList = ref("");
const hotList = ref("");
onMounted(() => {
  getIndexData().then((res) => {
    data.value = res;
  });
  getGoodBookList().then((res) => {
    goodBookList.value = res;
  });
  getNecessaryGoodsList().then((res) => {
    necessaryGoodsList.value = res;
  });
  getHomeLeaderboard().then((res) => {
    hotList.value = res;
  });
});
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const newId = ref(0);
const onLoad = async () => {
  if (loading.value || finished.value) return; // 防止重复请求
  loading.value = true;

  try {
    const res = await getTalentGoodsList(newId.value);
    if (res.length === 0) {
      finished.value = true;
    } else {
      list.value = list.value.concat(res);
      newId.value += 10;
    }
  } catch (error) {
    console.error("加载数据失败:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <SearchCard />
  <div style="background: #ffffff; padding-bottom: 1rem; margin-bottom: 0.8rem">
    <div v-for="_ in data">
      <van-row class="title">{{ _.name }}</van-row>
      <van-row class="itemList">
        <Item
          v-for="item in _['tag_list']"
          :key="item.name"
          :item="{ title: item.name, url: item.image, id: item.id }"
        />
      </van-row>
    </div>

    <van-button
      type="primary"
      color="#eefaf7"
      style="display: block; margin: 0 auto"
      to="/Classify"
    >
      <span style="color: #5cd3b4">全部分类 <van-icon name="arrow" /> </span>
    </van-button>
  </div>
  <div
    style="
      background: #ffffff;
      box-sizing: border-box;
      padding: 0.5rem;
      margin-bottom: 0.8rem;
    "
  >
    <van-row class="title"> 好书速递 </van-row>
    <van-swipe :show-indicators="false" :loop="false" :width="400">
      <van-swipe-item v-for="item in goodBookList">
        <GoodBookCard
          :key="item.title"
          :item="{
            url: item['goods_thumb'],
            title: item['goods_name'],
            info: item['goods_desc'],
            id: item['goods_id'],
          }"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div
    style="
      background: #ffffff;
      box-sizing: border-box;
      padding: 0.5rem;
      margin-bottom: 0.8rem;
    "
  >
    <van-row class="title">
      达人书单
      <van-button
        type="primary"
        color="#fcfcfc"
        style="display: block; margin-left: 10%"
        to="/FindBookList"
      >
        <span style="color: #8a8a8a">
          200位阅读推广人联手推荐 37个书单
          <van-icon name="arrow" />
        </span>
      </van-button>
    </van-row>
    <van-swipe :show-indicators="false" :loop="false" :width="400">
      <van-swipe-item v-for="item in necessaryGoodsList">
        <BookListCard :key="item" :item="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div
    style="
      background: #ffffff;
      box-sizing: border-box;
      padding: 0.5rem;
      margin-bottom: 0.8rem;
    "
  >
    <van-row class="title">
      热门榜单
      <van-button
        type="primary"
        color="#fcfcfc"
        style="display: block; margin-left: 50%"
        to="/Hot"
      >
        <span style="color: #8a8a8a">
          详细榜单
          <van-icon name="arrow" />
        </span>
      </van-button>
    </van-row>
    <van-swipe :show-indicators="false" :loop="false" :width="280">
      <van-swipe-item v-for="item in hotList">
        <HotCard :key="item" :item="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div style="background: #ffffff; box-sizing: border-box; padding: 0.5rem">
    <van-row class="title">
      达人精选
      <span
        style="
          margin: 0.5rem 0 0 1rem;
          font-weight: normal;
          font-size: 1.1rem;
          color: #999999;
        "
        >8年绘本馆馆长精选绘本</span
      ></van-row
    >
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <TalentGoodsCard v-for="item in list" :key="item" :item="item" />
    </van-list>
  </div>
</template>

<style scoped>
.title {
  box-sizing: border-box;
  padding: 0.7rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #404040;
}
.itemList {
  padding: 1rem;
}
</style>
