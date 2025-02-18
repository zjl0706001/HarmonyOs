<script setup>
import Cookies from "js-cookie";
defineProps(["isCollapse"]);
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const role = ref(Cookies.get("role"));
const setAdmin = () => {
  Cookies.set("role", "admin");
  setTimeout(() => router.go(0));
};
const setUser = () => {
  Cookies.set("role", "user");
  setTimeout(() => router.go(0), 10);
};
</script>

<template>
  <div>您现在的身份为【"{{ role }}"】</div>
  <!--  <div style="display: flex">-->
  <el-button
    @click="role === 'admin' ? setUser() : setAdmin()"
    type="primary"
    plain
  >
    切换身份
  </el-button>
  <el-button @click="setAdmin" type="primary" plain> admin </el-button>
  <el-button @click="setUser" type="primary" plain> user </el-button>
  <!--  </div>-->
</template>

<style scoped>
* {
  margin: 20px;
}
</style>
