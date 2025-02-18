<script setup>
import { Expand, Fold, Setting } from "@element-plus/icons-vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
defineProps(["isCollapse", "changeCollapse", "toPersonal"]);
const route = useRoute();
const router = useRouter();
const routePath = computed({
  get() {
    switch (route.path) {
      case "/Dashboard":
        return "首页";
      case "/Dashboard/HomePage":
        return "首页";
      case "/Dashboard/Document":
        return "文档";
      case "/Dashboard/Guide":
        return "品牌页";
      case "/Dashboard/PagePermission":
        return "权限测试页-页面权限";
      case "/Dashboard/InstructionPermission":
        return "权限测试页-指令权限";
      case "/Dashboard/UserPermission":
        return "权限测试页-角色权限";
    }
  },
});
const loginout = () => {
  router.replace({ path: "/Login" });
};
const toIndex = () => {
  router.replace({ path: "/Dashboard/HomePage" });
};
</script>

<template>
  <el-header
    style="
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      background: #ffffff;
      padding: 0 10px;
    "
  >
    <el-icon size="24px" style="margin-top: 18px" @click="changeCollapse">
      <Fold v-show="!isCollapse" />
      <Expand v-show="isCollapse" />
    </el-icon>
    <div class="title">{{ routePath }}</div>

    <div class="toolbar">
      <el-dropdown>
        <el-icon
          class="setting-icon"
          size="24px"
          style="margin-right: 12px; margin-top: 1px"
        >
          <Setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toPersonal">个人中心</el-dropdown-item>
            <el-dropdown-item @click="toIndex">首页</el-dropdown-item>
            <el-dropdown-item @click="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style scoped>
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.setting-icon:focus {
  outline: none;
}
.title {
  font-size: 21px;
  margin-top: 18px;
  margin-left: 10px;
  font-weight: bold;
}
</style>
