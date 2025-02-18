<template>
  <el-form :model="form" label-width="0" style="max-width: 600px">
    <h2>系统注册</h2>
    <!-- 账号 -->
    <el-form-item size="large">
      <el-input v-model="form.username" placeholder="请输入用户名">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item size="large">
      <el-input v-model="form.password" placeholder="请输入密码" show-password>
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- 重复密码 -->
    <el-form-item size="large">
      <el-input
        v-model="form.rpassword"
        placeholder="请再输入一次密码"
        show-password
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- email -->
    <el-form-item size="large">
      <el-input v-model="form.email" placeholder="email">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- phone_number -->
    <el-form-item size="large">
      <el-input v-model="form.phone_number" placeholder="电话号码">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- sex -->
    <el-form-item size="large">
      <el-input v-model="form.sex" placeholder="性别">
        <template #prefix>
          <el-icon><Female /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- age -->
    <el-form-item size="large">
      <el-input v-model="form.age" placeholder="年龄">
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
        注册
      </el-button>
    </el-form-item>
    <el-form-item style="margin-left: 260px">
      <RouterLink to="Login" class="no-underline-link">返回登录</RouterLink>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter
import { User, Lock, Female } from "@element-plus/icons-vue";
import { register } from "/src/api/user.js";

const router = useRouter(); // 获取路由实例

const form = ref({
  username: "",
  password: "",
  rpassword: "",
  email: "",
  phone_number: "",
  sex: "",
  age: "",
});

const onSubmit = () => {
  if (Object.values(form.value).some((value) => !value)) {
    alert("信息不全");
    return;
  }
  register(form.value).then((res) => {
    if (res.data.username) {
      alert("注册成功");
      router.push({ path: "/Dashboard" });
    } else {
      console.log(res.data);
      alert(res.data.message);
    }
  });
};
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
  margin: 100px auto;
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
