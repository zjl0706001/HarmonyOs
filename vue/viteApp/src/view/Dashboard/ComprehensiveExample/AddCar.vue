<template>
  <el-form
    :model="form"
    label-width="auto"
    style="
      max-width: 600px;
      margin: 50px auto;
      background: #f9fbfb;
      padding: 50px;
      border-radius: 20px;
    "
  >
    <el-form-item label="车辆id">
      <el-input v-model="form.car_id" />
    </el-form-item>
    <el-form-item label="官方认证">
      <el-switch v-model="form.authentication_method" />
    </el-form-item>
    <el-form-item label="品牌">
      <el-select v-model="form.brand_id">
        <el-option
          v-for="brand in brands"
          :key="brand['品牌ID']"
          :label="brand['品牌']"
          :value="brand['品牌ID']"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="车系">
      <el-select v-model="form.series_id">
        <el-option
          v-for="serie in series"
          :key="serie.id"
          :label="serie.name"
          :value="serie.id"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="车名">
      <el-input v-model="form.car_name" />
    </el-form-item>
    <el-form-item label="来源城市">
      <el-input v-model="form.car_source_city_name" />
    </el-form-item>
    <el-form-item label="年份">
      <el-col :span="11">
        <el-date-picker
          v-model="form.car_year"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="图片链接">
      <el-input v-model="form.image" />
    </el-form-item>
    <el-form-item label="官方价格">
      <el-input v-model="form.official_price" />
    </el-form-item>
    <el-form-item label="售价">
      <el-input v-model="form.sh_price" />
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="form.sub_title" />
    </el-form-item>
    <div style="text-align: center">
      <el-button type="primary" @click="onSubmit" style="width: 200px"
        >创建</el-button
      >
    </div>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
import { getBrandsInfo, getSeries } from "../../../api/car.js";
import { onMounted, ref, watch } from "vue";

const form = reactive({
  car_id: "",
  authentication_method: false,
  brand_id: "",
  series_id: "",
  car_name: "",
  car_source_city_name: "",
  car_year: "",
  image: "",
  official_price: "",
  sh_price: "",
  sub_title: "",
  title: "",
});
const brands = ref([]);
const series = ref([]);
onMounted(() => {
  getBrandsInfo().then((res) => {
    brands.value = res;
  });
});
watch(
  () => form.brand_id,
  (newValue) => {
    form.series_id = "";
    getSeries(newValue).then((res) => {
      series.value = res.data;
    });
  },
);
const onSubmit = () => {
  console.log("submit!", form);
};
</script>
