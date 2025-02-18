<script setup>
import { getIcon } from "../icons/index.js";

defineProps(["icon", "content"]);
</script>

<template>
  <el-popover placement="bottom" :width="0" trigger="click" :content="content">
    <template #reference>
      <el-button
        class="m-2"
        style="width: 0; border: none; margin-left: 15px; cursor: pointer"
      >
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="content"
          placement="top"
        >
          <el-icon size="22px"
            ><component :is="getIcon(icon)" /></el-icon></el-tooltip
      ></el-button>
    </template>
  </el-popover>
</template>

<style scoped></style>
