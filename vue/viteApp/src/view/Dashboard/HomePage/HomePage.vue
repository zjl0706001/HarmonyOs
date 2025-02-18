<!--主页-->
<script setup>
import BrandsInfo from "./Chars/BrandsInfo.vue";
import CityNumber from "./Chars/CityNumber.vue";
defineProps(["isCollapse"]);
</script>

<template class="el-main">
  <BrandsInfo />
  <CityNumber :isCollapse="isCollapse" />
</template>

<style scoped>
.el-main {
  padding: 20px;
}
</style>
