<template>
  <el-form :model="form" label-width="0" style="max-width: 600px">
    <h2>系统登录</h2>
    <div>
      <img
        src="../../image/骷髅医生.png"
        alt=""
        style="width: 30%; margin: 10px 120px 30px 120px"
      />
    </div>
    <el-form-item size="large">
      <el-input v-model="form.username" placeholder="请输入用户名">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item size="large">
      <el-input v-model="form.password" placeholder="请输入密码" show-password>
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="info"
        size="large"
        @click="onSubmit"
        style="width: 100%; font-size: 18px"
      >
        登录
      </el-button>
    </el-form-item>
    <el-form-item style="margin-left: 230px">
      <RouterLink to="Register" class="no-underline-link">注册</RouterLink>
      <RouterLink to="Register" class="no-underline-link">忘记密码</RouterLink>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { loopRoutes, dashRoutes } from "../../router/dashboard.js";

import { onMounted, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { login } from "/src/api/user.js";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import Dashboard from "../Dashboard/Dashboard.vue";
const form = ref({
  username: "admin",
  password: "123456",
});

const router = useRouter();

const onSubmit = () => {
  if (!form.value.username || !form.value.password) {
    alert("请输入用户名或密码");
    return;
  }
  login(form.value).then((res) => {
    if (res.data.username) {
      Cookies.set("Token", res.data.token);
      Cookies.set("username", res.data.username);
      Cookies.set("role", res.data.role);
      let ret = loopRoutes(dashRoutes, res.data.role);
      router.addRoute({
        path: "/Dashboard",
        name: "Dashboard",
        component: Dashboard,
        redirect: "/Dashboard/HomePage",
        children: ret,
      });
      router.replace({ path: "/Dashboard" });
    } else alert("用户名或密码错误");
  });
};
onMounted(() => {
  Cookies.remove("Token");
  Cookies.remove("username");
  Cookies.remove("role");
});
</script>

<style>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

.el-form {
  width: 350px;
  background: #f3f3f3;
  padding: 20px;
  margin: 200px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.el-form-item {
  margin-bottom: 20px;
}

.el-button {
  display: block;
}

.no-underline-link {
  text-decoration: none;
  color: black;
  display: inline;
  margin-left: 10px;
}
</style>
