<script setup>
import { useRoute } from "vue-router";
import TalentGoodsCard from "../components/TalentGoodsCard.vue";
import { ref, watch } from "vue";
import { getTalentGoodsListInfo } from "../api/index.js";

const route = useRoute();
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const newId = ref(0);

// 定义 onLoad 函数
const onLoad = async () => {
  if (loading.value || finished.value) return; // 防止重复请求
  loading.value = true;

  try {
    const res = await getTalentGoodsListInfo(newId.value, route.params.id);
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

// 监听 route.params.id 的变化
watch(
  () => route.params.id,
  async () => {
    finished.value = false;
    list.value = [];
    newId.value = 0;

    // 调用加载函数
    await onLoad();
  },
  { immediate: true }, // 初次加载时也执行一次
);
</script>

<template>
  <div style="background: #ffffff; box-sizing: border-box; padding: 0.5rem">
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <TalentGoodsCard
        v-for="item in list"
        :onLoad="onLoad"
        :key="item.goods_id"
        :item="item"
      />
    </van-list>
  </div>
</template>
