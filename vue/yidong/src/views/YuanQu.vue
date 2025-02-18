<script setup></script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/index/yuanqu/cf">纯分流功能 </el-menu-item>
    <el-menu-item index="/index/yuanqu/fj">分流+计算功能</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<style scoped></style>
