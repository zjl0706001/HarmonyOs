<script setup>
import { onMounted, ref } from "vue";
import {
  getUserList,
  addUser as AU,
  deleteUser as DU,
} from "../../api/user.js";
import router from "../../router/index.js";
const tableData = ref([]);
onMounted(() => [
  getUserList().then((res) => {
    tableData.value = res.data;
  }),
]);

const username = ref("");
const password = ref("");
const dialogVisible = ref(false);
const addUser = () => {
  dialogVisible.value = false;
  AU({ username: username.value, password: password.value }).then((res) => {
    router.go(0);
  });
};
const deleteUser = (userId) => {
  console.log(userId);
  DU({ userId: userId }).then((res) => {
    alert(res.data.msg);
    router.go(0);
  });
};
</script>

<template>
  <div>
    <el-button
      style="margin-top: 13px; margin-right: 10px"
      plain
      @click="dialogVisible = true"
    >
      添加用户
    </el-button>

    <el-dialog
      style="margin-top: 13px"
      v-model="dialogVisible"
      title="添加用户"
      width="500"
    >
      <el-input
        v-model="username"
        style="margin-bottom: 20px; width: 90%"
        placeholder="请输入账号"
      />
      <el-input
        v-model="password"
        style="width: 90%"
        placeholder="请输入密码"
      />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button @click="addUser"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userName" label="userName" width="180" />
      <el-table-column prop="password" label="password" width="180" />
      <el-table-column prop="userId" label="userId" width="180" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="danger" @click="deleteUser(scope.row.userId)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
}
</style>
