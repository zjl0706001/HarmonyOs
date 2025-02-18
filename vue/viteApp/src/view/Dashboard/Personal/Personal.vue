<script setup>
import { ref } from "vue";
import { getUserInfo } from "../../../api/user.js";

// 初始化数据
const info = ref({});

// 获取用户信息
getUserInfo().then((res) => {
  info.value = res.data;
});
</script>

<template>
  <div class="profile-container">
    <h2 class="profile-title">个人中心</h2>
    <div class="profile-info">
      <div class="profile-item">
        <label class="profile-label">用户名:</label>
        <span class="profile-value">{{ info.username }}</span>
      </div>
      <div class="profile-item">
        <label class="profile-label">年龄:</label>
        <span class="profile-value">{{ info.age }}</span>
      </div>
      <div class="profile-item">
        <label class="profile-label">电子邮件:</label>
        <span class="profile-value">{{ info.email }}</span>
      </div>
      <div class="profile-item">
        <label class="profile-label">电话号码:</label>
        <span class="profile-value">{{ info.phone_number }}</span>
      </div>
      <div class="profile-item">
        <label class="profile-label">性别:</label>
        <span class="profile-value">{{ info.sex }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.profile-info {
  text-align: center;
}

.profile-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
}

.profile-label {
  font-weight: bold;
  color: #555;
  font-size: 24px;
  margin-right: 50px;
}

.profile-value {
  font-size: 20px;
  color: #333;
  word-break: break-word;
}
</style>
