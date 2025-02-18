<template>
  <div class="common-layout">
    <el-container>
      <el-menu
        :default-active="$route.path"
        active-text-color="#409eff"
        background-color="#304156"
        class="custom-menu"
        text-color="#fff"
        :collapse="isCollapse"
        style="border: none; overflow: auto; height: 100vh"
        router
      >
        <!-- 动态渲染的菜单项 -->
        <template v-for="item in dashboardChildren" :key="item.path">
          <el-sub-menu
            v-if="item.children && item.children.length"
            :index="item.path"
          >
            <template #title>
              <el-icon><component :is="getIcon(item.meta.icon)" /></el-icon>
              <span class="menu-title">{{ item.meta.title }}</span>
            </template>
            <el-menu-item
              @click=""
              v-for="child in item.children"
              :key="item.path + '/' + child.path"
              :index="item.path + '/' + child.path"
            >
              <el-icon><component :is="getIcon(child.meta.icon)" /></el-icon>
              <span class="menu-title">{{ child.meta.title }}</span>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item
            v-else-if="item.meta.title !== '个人中心'"
            :index="item.path"
          >
            <el-icon><component :is="getIcon(item.meta.icon)" /></el-icon>
            <span class="menu-title">{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>

      <!-- 内容区 -->
      <el-container style="overflow-y: auto; height: 100vh">
        <el-header>
          <Title
            :isCollapse="isCollapse"
            :changeCollapse="changeCollapse"
            :toPersonal="toPersonal"
          />
        </el-header>
        <el-main style="padding: 0; background: #eff1f4">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { getIcon } from "../../icons/index.js";
import { useRouter, useRoute } from "vue-router";
import Title from "../../components/Title.vue";
import { ref, provide, computed, onMounted } from "vue";
const route = useRoute();
const isCollapse = ref(false);
const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
provide("isCollapse", isCollapse);
provide("changeCollapse", changeCollapse);

const router = useRouter();
const getDashboardChildRoutes = () => {
  const allRoutes = router.getRoutes();
  const dashboardRoute = allRoutes.find(
    (route) => route.name === "Dashboard" || route.path === "/Dashboard",
  );
  if (dashboardRoute && dashboardRoute.children) {
    return dashboardRoute.children;
  }
  return [];
};
const dashboardChildren = computed(() => getDashboardChildRoutes());
const toPersonal = () => {
  router.push("/Dashboard/personal");
};
</script>

<style scoped>
.menu-title {
  width: 120px;
}
.el-sub-menu.is-opened .el-menu-item {
  background: #1f2d3d;
  color: #f8f5f9;
}
.el-sub-menu.is-opened .el-menu-item.is-active {
  color: #409eff;
}
.el-sub-menu.is-opened .el-menu-item:hover {
  background: #001528;
}
</style>
