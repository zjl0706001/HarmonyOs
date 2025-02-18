<template>
  <el-table size="large" :data="tableData" style="width: 100%">
    <el-table-column
      prop="car_id"
      label="车辆id"
      width="80px"
      show-overflow-tooltip
    />
    <el-table-column
      prop="car_name"
      label="车辆名称"
      width="210px"
      show-overflow-tooltip
    />
    <el-table-column
      prop="brand_id"
      label="车系id"
      width="80px"
      show-overflow-tooltip
    />
    <el-table-column
      prop="authentication_method"
      label="认证方式"
      width="100px"
      show-overflow-tooltip
    />
    <el-table-column
      prop="car_source_city_name"
      label="城市"
      width="70px"
      show-overflow-tooltip
    />
    <el-table-column prop="image" label="图片链接" show-overflow-tooltip />
    <el-table-column
      prop="official_price"
      label="官方价格"
      show-overflow-tooltip
      width="100px"
    />
    <el-table-column
      prop="series_id"
      label="车系id"
      show-overflow-tooltip
      width="100px"
    />
    <el-table-column
      prop="sh_price"
      label="售价"
      show-overflow-tooltip
      width="100px"
    />
    <el-table-column prop="sub_title" label="副标题" show-overflow-tooltip />
    <el-table-column prop="title" label="标题" show-overflow-tooltip />
  </el-table>
  <div class="example-pagination-block">
    <el-pagination
      size="large"
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCars } from "../../../api/car.js";

const tableData = ref([]);
const total = ref(0);
const pageSize = ref(16);
const currentPage = ref(1);

const handlePageChange = (page) => {
  currentPage.value = page;
  fetchPageData(page);
};

const fetchPageData = (page) => {
  getCars().then((res) => {
    total.value = res.data.length;
    tableData.value = res.data.slice(
      (page - 1) * pageSize.value,
      page * pageSize.value,
    );
  });
};

onMounted(() => {
  fetchPageData(currentPage.value);
});
</script>
<style scoped></style>
