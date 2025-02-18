<script setup>
import { useRouter } from "vue-router";

const { item, onLoad } = defineProps(["item", "onLoad"]);
const router = useRouter();
const go = (id) => {
  router.push({ name: "Detail", params: { id: id } });
};
const goToTag = (labelId) => {
  router.push(`/Tag/${labelId}`);
  onLoad();
};
</script>

<template>
  <div @click="go(item['goods_id'])" class="good-book-card">
    <img :src="item['goods_thumb']" alt="" />
    <div class="good-book-card-info">
      <div class="good-book-card-title">{{ item.goods_name }}</div>
      <p>
        {{
          item.goods_desc === "" ||
          item.goods_desc === null ||
          item.goods_desc === undefined
            ? item["expert_info"].expert_introduction
            : item.goods_desc
        }}
      </p>
      <div>
        <van-button
          v-for="label in item.label_list ? item.label_list.slice(0, 3) : []"
          :key="label.label_id"
          style="margin: 0.1rem"
          size="small"
          type="primary"
          color="#efefef"
          @click.stop="goToTag(label.label_id)"
        >
          <span style="color: #6f6a66">{{ label.label_name }}</span>
        </van-button>
      </div>
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
