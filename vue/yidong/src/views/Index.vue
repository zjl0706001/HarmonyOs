<script setup>
import { ref, onMounted } from "vue";
import { changePassword, checkToken } from "../api/user.js";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const username = ref("");
onMounted(() => {
  const token = localStorage.getItem("token");
  username.value = localStorage.getItem("userName");
  checkToken(token).then((res) => {});
});
const logout = () => {
  localStorage.removeItem("token");
  router.replace("/login");
};
const oldPassword = ref("");
const password = ref("");
const dialogVisible = ref(false);
const changepassword = () => {
  dialogVisible.value = false;
  console.log("changepassword", oldPassword.value, password.value);
  changePassword({
    oldPassword: oldPassword.value,
    password: password.value,
  }).then((res) => {
    console.log(res);
  });
};

const changeuser = () => {
  router.push("/Index/changeuser");
};
</script>

<template>
  <el-container>
    <el-header style="background: #303030; display: flex">
      <h1>中国移动边缘UPF设备配置及报价系统</h1>
      <el-button
        @click="changeuser"
        style="margin-top: 13px; position: absolute; left: 1400px"
        v-if="username === 'admin'"
      >
        管理用户
      </el-button>
      <el-button
        style="
          margin-top: 13px;
          margin-right: 10px;
          position: absolute;
          left: 1510px;
        "
        plain
        @click="dialogVisible = true"
      >
        修改密码
      </el-button>

      <el-dialog
        style="margin-top: 13px"
        v-model="dialogVisible"
        title="修改密码"
        width="500"
      >
        <el-input
          v-model="oldPassword"
          style="margin-bottom: 20px"
          placeholder="请输入旧密码"
        />
        <el-input v-model="password" placeholder="请输入新密码" />
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button @click="changepassword"> 确定 </el-button>
          </div>
        </template>
      </el-dialog>
      <el-button
        @click="logout"
        style="margin-top: 13px; position: absolute; left: 1650px"
      >
        退出
      </el-button>
    </el-header>

    <el-main style="padding: 0; display: flex; height: 100%">
      <el-col :span="2">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="route.path"
          text-color="#fff"
          router
        >
          <el-menu-item index="/index/yuanqu">
            <span>园 区 U P F</span>
          </el-menu-item>
          <el-menu-item index="/index/chengshi">
            <span>地 市 共 享 U P F</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22"><RouterView /> </el-col>
    </el-main>
  </el-container>
</template>

<style scoped>
h1 {
  margin-top: 13px;
  margin-left: 600px;
  color: white;
}
</style>
