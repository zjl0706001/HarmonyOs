<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const value = ref("");
const go = (value) => {
  router.push({ name: "Search", params: { keyWord: value } });
};
</script>

<template>
  <van-sticky style="height: 2.5rem">
    <van-search
      shape="round"
      v-model="value"
      placeholder="入园"
      @search="go(value)"
    />
  </van-sticky>
</template>

<style scoped></style>
