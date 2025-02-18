<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const { item, index } = defineProps(["item", "index"]);
const value = ref(2);
onMounted(() => {
  value.value = item.avg_score / 2;
});
const go = (id) => {
  router.push({ name: "Detail", params: { id: id } });
};
</script>

<template>
  <div
    @click="go(item.goods_id)"
    style="
      display: grid;
      grid-template-columns: 1fr 2fr 6fr;
      padding: 1rem 2rem;
      font-size: 1.4rem;
    "
  >
    <div style="color: #d1aa42; line-height: 8rem">
      {{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}
    </div>
    <div><img style="height: 8rem" :src="item.goods_thumb" alt="" /></div>
    <div style="padding: 0.2rem 1rem">
      <div style="font-size: 1.1rem; font-weight: bold">
        {{ item.goods_name }}
      </div>
      <div style="margin-top: 1rem">
        <van-rate v-model="value" readonly allow-half /><span
          style="margin-left: 1rem; font-size: 1rem"
          >{{ value.toFixed(1) }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
