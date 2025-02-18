<script setup>
import Title from "../../../components/Title.vue";
import { Check } from "@element-plus/icons-vue";
</script>

<template>
  <Title title="欢迎" />
  <el-card
    style="width: 1470px; margin: 20px auto; border: none"
    shadow="never"
  >
    <div style="padding: 10px 12px; background: #f6ffed; display: flex">
      <div
        style="
          background: #03c04a;
          color: #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          padding: 2px 0 0 3px;
        "
      >
        <el-icon><Check /></el-icon>
      </div>

      <span style="margin-left: 15px">更快更强的重型组件，已经发布。</span>
    </div>
    <div style="margin: 20px 0">高级表格 欢迎使用</div>
    <el-card> yarn add @ant-design/pro-table </el-card>
    <div style="margin: 20px 0">高级布局 欢迎使用</div>
    <el-card> yarn add @ant-design/pro-layout </el-card>
  </el-card>
</template>

<style scoped></style>
