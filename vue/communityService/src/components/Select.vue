<script setup>
import { ref } from "vue";

const { getData, selectData, inputs } = defineProps([
  "getData",
  "selectData",
  "inputs",
]);
const values = ref(new Array(inputs.length).fill(""));
const SD = () => {
  console.log(values);
  selectData(...values.value);
  values.value = values.value.map(() => "");
};
</script>

<template>
  <el-card
    style="width: 1470px; margin: 20px auto; border: none"
    shadow="never"
  >
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      "
    >
      <ul style="display: flex; flex-wrap: wrap">
        <li
          v-for="(input, index) in inputs"
          :key="input.label"
          style="
            list-style: none;
            display: flex;
            align-items: center;
            margin-right: 20px;
          "
        >
          <div style="line-height: 32px">{{ input.label }}:</div>
          <div style="margin-left: 10px">
            <el-input
              style="width: 100%; max-width: 250px"
              v-model="values[index]"
              placeholder="请输入"
            />
          </div>
        </li>
      </ul>
      <div style="margin-left: 10px; display: flex; align-items: center">
        <el-button @click="getData">重置</el-button>
        <el-button type="primary" @click="SD">查询</el-button>
      </div>
    </div>
  </el-card>
</template>

<style scoped></style>
