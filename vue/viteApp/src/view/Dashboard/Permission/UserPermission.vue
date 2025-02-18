<script setup>
import {
  getUsers,
  removeUser,
  register,
  alterInfo,
  toAdmin,
} from "../../../api/user.js";
import { ref } from "vue";

const users = ref([]);

getUsers().then((res) => {
  users.value = res.data;
});

const deleteUser = (username) => {
  removeUser(username).then((res) => {
    alert(res.data.message);
  });
  users.value = users.value.filter((user) => user.username !== username);
};
import { ElMessage, ElMessageBox } from "element-plus";

const adduser = () => {
  ElMessageBox.confirm(
    `
    <div style="font-size: 14px; color: #333;">
      <div style="margin-bottom: 15px;">
        <label for="username" style="font-weight: bold;">用户名：</label>
        <input id="username" type="text" class="el-input__inner" placeholder="请输入用户名" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="password" style="font-weight: bold;">密码：</label>
        <input id="password" type="password" class="el-input__inner" placeholder="请输入密码" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="email" style="font-weight: bold;">电子邮件：</label>
        <input id="email" type="text" class="el-input__inner" placeholder="请输入电子邮件" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="phone_number" style="font-weight: bold;">电话：</label>
        <input id="phone_number" type="text" class="el-input__inner" placeholder="请输入电话" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="sex" style="font-weight: bold;">性别：</label>
        <input id="sex" type="text" class="el-input__inner" placeholder="请输入性别" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="age" style="font-weight: bold;">年龄：</label>
        <input id="age" type="text" class="el-input__inner" placeholder="请输入年龄" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
    </div>
    `,
    "添加用户",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      showCancelButton: true,
      dangerouslyUseHTMLString: true,
    },
  )
    .then(() => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      const phone_number = document.getElementById("phone_number").value;
      const sex = document.getElementById("sex").value;
      const age = document.getElementById("age").value;
      if (!username || !password || !email || !phone_number || !sex || !age) {
        ElMessage({
          type: "error",
          message: "请填写所有字段！",
        });
        return;
      }
      register({
        username,
        password,
        email,
        phone_number,
        sex,
        age,
      }).then((res) => {
        location.reload();
      });
      ElMessage({
        type: "success",
        message: `用户添加成功！用户名：${username}`,
      });
    })
    .catch(() => {
      // 用户取消操作
      ElMessage({
        type: "info",
        message: "已取消添加用户",
      });
    });
};
const changeInfo = (username, email, phone_number, sex, age, role) => {
  ElMessageBox.confirm(
    `
    <div style="font-size: 14px; color: #333;">
      <div style="margin-bottom: 15px;">
        <label for="username" style="font-weight: bold;">用户名：</label>
        <input id="username" type="text" class="el-input__inner" value="${username}" disabled style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="email" style="font-weight: bold;">电子邮件：</label>
        <input id="email" type="text" class="el-input__inner" value="${email}" placeholder="请输入电子邮件" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="phone_number" style="font-weight: bold;">电话：</label>
        <input id="phone_number" type="text" class="el-input__inner" value="${phone_number}" placeholder="请输入电话" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="sex" style="font-weight: bold;">性别：</label>
        <input id="sex" type="text" class="el-input__inner" value="${sex}" placeholder="请输入性别" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="age" style="font-weight: bold;">年龄：</label>
        <input id="age" type="text" class="el-input__inner" value="${age}" placeholder="请输入年龄" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
      </div>
      <div style="margin-bottom: 15px;display: flex">
        <label for="role" style="font-weight: bold;">admin：</label>
       <input id="role" type="checkbox" ${role === "admin" ? "checked" : ""}>
      </div>
    </div>
    `,
    "修改用户信息",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      showCancelButton: true,
      dangerouslyUseHTMLString: true,
    },
  )
    .then(() => {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const phone_number = document.getElementById("phone_number").value;
      const sex = document.getElementById("sex").value;
      const age = document.getElementById("age").value;
      const role = document.getElementById("role").checked ? "admin" : "user";
      if (!username || !email || !phone_number || !sex || !age || !role) {
        ElMessage({
          type: "error",
          message: "请填写所有字段！",
        });
        return;
      }
      alterInfo({
        username,
        email,
        phone_number,
        sex,
        age,
      }).then((res) => {
        console.log(res);
      });
      toAdmin({ username, role }).then((res) => {
        console.log(res);
        location.reload();
      });
      ElMessage({
        type: "success",
        message: `修改用户信息成功！用户名：${username}`,
      });
    })
    .catch(() => {
      // 用户取消操作
      ElMessage({
        type: "info",
        message: "已取消修改",
      });
    });
};
</script>

<template>
  <div>
    <el-button type="primary" style="margin: 20px" plain @click="adduser">
      添加用户
    </el-button>
  </div>
  <div>
    <el-table size="large" :data="users" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="phone_number" label="手机号" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="role" label="权限" />
      <el-table-column label="操作">
        <template #default="scope">
          <div style="display: flex">
            <el-button
              @click="
                changeInfo(
                  scope.row.username,
                  scope.row.email,
                  scope.row.phone_number,
                  scope.row.sex,
                  scope.row.age,
                  scope.row.role,
                )
              "
              type="primary"
              size="small"
            >
              修改
            </el-button>
            <el-button
              @click="deleteUser(scope.row.username)"
              type="danger"
              size="small"
            >
              删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
