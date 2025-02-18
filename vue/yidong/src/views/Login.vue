<script setup>
import { ref } from "vue";
import { login as LG } from "/src/api/user.js";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("admin");
const password = ref("1234");
const login = () => {
  LG({ userName: username.value, password: password.value }).then((res) => {
    if (res.data.code === 1) {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.userName);
      router.push("/index");
    } else alert(res.data.msg);
  });
};
</script>

<template>
  <el-card style="max-width: 480px; margin: 200px auto">
    <h1>登录</h1>
    <el-input type="text" v-model="username" placeholder="用户名" />
    <el-input type="password" v-model="password" placeholder="密码" />
    <el-button
      type="primary"
      style="margin: 0 auto; display: block"
      @click="login"
      >登录</el-button
    >
  </el-card>
</template>

<style scoped>
* {
  margin: 20px 0;
  text-align: center;
}
</style>
