<script setup>
import { ref, watch } from "vue";

const radio = ref(1);
const data1 = ref(2580);
const data2 = ref(240183);
const imgUrl1 = ref("http://localhost:5000/images/flu/01.png");
const imgUrl2 = ref("http://localhost:5000/images/flu/05.png");
watch(radio, (val) => {
  switch (val) {
    case 1:
      data1.value = 2580;
      data2.value = 240183;
      imgUrl1.value = "http://localhost:5000/images/flu/01.png";
      imgUrl2.value = "http://localhost:5000/images/flu/05.png";
      break;
    case 2:
      data1.value = 14250;
      data2.value = 270183;
      imgUrl1.value = "http://localhost:5000/images/flu/02.png";
      imgUrl2.value = "http://localhost:5000/images/flu/06.png";
      break;
    case 3:
      data1.value = 285000;
      data2.value = 478424;
      imgUrl1.value = "http://localhost:5000/images/flu/03.png";
      imgUrl2.value = "http://localhost:5000/images/flu/07.png";
      break;
    case 4:
      data1.value = 570000;
      data2.value = 872501;
      imgUrl1.value = "http://localhost:5000/images/flu/04.png";
      imgUrl2.value = "http://localhost:5000/images/flu/08.png";
  }
});
</script>

<template>
  <h1>吞吐量</h1>
  <el-radio-group v-model="radio">
    <el-radio :value="1">5G</el-radio>
    <el-radio :value="2">10G</el-radio>
    <el-radio :value="3">50G</el-radio>
    <el-radio :value="4">100G</el-radio>
  </el-radio-group>
  <h1>
    软件费：{{ data1 }} 元 硬件费：{{ data2 }} 元 总价：{{ data1 + data2 }}
    元。
  </h1>
  <div style="display: flex">
    <div>软件配置图<img :src="imgUrl1" alt="" /></div>

    <div>硬件配置图<img :src="imgUrl2" alt="" /></div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  display: block;
  margin-right: 20px;
}
</style>
