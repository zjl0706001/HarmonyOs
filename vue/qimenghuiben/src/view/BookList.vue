<script setup>
import { getGoodsDetail } from "../api/index.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import TalentGoodsCard from "../components/TalentGoodsCard.vue";
const data = ref();
const son_list = ref([]);
const goods_img = ref([]);
const goods_name = ref("");
const label_list = ref([]);
const expert_speak = ref("");
onMounted(() => {
  getGoodsDetail(useRoute().params.id).then((res) => {
    data.value = res;
    son_list.value = data.value.son_list;
    goods_img.value.push(data.value.son_list[0].goods_img);
    goods_img.value.push(data.value.son_list[1].goods_img);
    goods_img.value.push(data.value.son_list[2].goods_img);
    goods_name.value = data.value.goods_name;
    label_list.value = data.value.label_list;
    expert_speak.value = data.value.expert_speak_list[0].description;
  });
});
</script>
<template>
  <div style="background: #ffffff; padding-bottom: 1rem">
    <div>
      <img
        :src="goods_img[0]"
        alt=""
        style="margin-left: 10%; margin-top: 2rem"
      />
      <img :src="goods_img[1]" alt="" style="margin-left: -2.8rem" />
      <img :src="goods_img[2]" alt="" style="margin-left: -2.8rem" />
    </div>
    <div
      style="
        font-weight: bold;
        font-size: 1.6rem;
        text-align: center;
        width: 60%;
        margin: 1rem auto;
      "
    >
      {{ goods_name }}
    </div>
    <div style="text-align: center">
      <van-button
        style="margin: 0.2rem"
        size="small"
        type="primary"
        color="#efefef"
        v-for="_ in label_list"
      >
        <span style="color: #666666"> {{ _.label_name }} </span>
      </van-button>
    </div>
  </div>
  <div style="background: #ffffff; padding: 0.1rem 0.5rem; margin-top: 1rem">
    <h2>书籍列表</h2>
    <TalentGoodsCard
      v-for="item in son_list"
      :key="item"
      :item="{
        goods_id: item.goods_id,
        goods_thumb: item.goods_img,
        goods_name: item.goods_name,
        expert_info: {
          expert_introduction:
            item.goods_desc === undefined ||
            item.goods_desc == '' ||
            item.goods_desc === null
              ? item.expert_speak_info.description
              : item.goods_desc,
        },
      }"
    />
  </div>
  <div style="background: #ffffff; padding: 0.1rem 0.5rem; margin: 1rem 0">
    <h2>达人怎么说</h2>
    <div class="expert-speak" v-html="expert_speak"></div>
  </div>
</template>
<style scoped>
img {
  height: 13rem;
  border-radius: 0 1rem 0 0;
}
.expert-speak {
  overflow: hidden;
  padding-bottom: 2rem;
}
</style>
