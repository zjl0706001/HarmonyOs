<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Lock, User } from "@element-plus/icons-vue";
import { login as LG } from "../../api/user.js";
const router = useRouter();
const userName = ref("admin");
const password = ref("admin");
const login = () => {
  LG(userName.value, password.value).then((res) => {
    if (res.data.code === 1) {
      localStorage.setItem("token", res.data.data);
      localStorage.setItem("userName", userName.value);
      router.replace("/Dashboard/Welcome");
    }
  });
};
</script>

<template>
  <el-card style="max-width: 400px; margin: 200px auto">
    <template #header>
      <div class="card-header">
        <h1 style="text-align: center">HoneyHome</h1>
      </div>
    </template>
    <el-input
      v-model="userName"
      style="width: 300px; margin: 5px 30px"
      placeholder="账号"
      :prefix-icon="User"
    />
    <el-input
      v-model="password"
      type="password"
      style="width: 300px; margin: 5px 30px"
      placeholder="密码"
      :prefix-icon="Lock"
    />
    <template #footer>
      <el-button
        type="primary"
        style="width: 200px; display: block; margin: 0 auto"
        @click="login"
      >
        登录</el-button
      >
    </template>
  </el-card>
</template>

<style scoped>
。card-header span {
  text-align: center;
}
</style>
