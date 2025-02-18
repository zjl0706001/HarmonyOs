<!-- src/components/SidebarMenu.vue -->
<template>
  <el-menu
    :default-active="activePath"
    active-text-color="#409eff"
    background-color="#304156"
    class="el-menu-vertical-demo custom-menu"
    text-color="#fff"
    :collapse="isCollapse"
    style="border: none; overflow: auto; height: 100vh"
    router
  >
    <template v-for="item in filteredRoutes">
      <el-sub-menu v-if="hasChildren(item)" :key="item.path" :index="item.path">
        <template #title>
          <component :is="getIcon(item.meta.icon)" />
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="child in item.children">
          <el-menu-item
            v-if="!hasChildren(child)"
            :key="child.path"
            :index="formatPath(item.path, child.path)"
            @click="handleMenuClick(child)"
          >
            <component :is="getIcon(child.meta.icon)" />
            <span>{{ child.meta.title }}</span>
          </el-menu-item>
          <el-sub-menu
            v-else
            :key="child.path"
            :index="formatPath(item.path, child.path)"
          >
            <template #title>
              <component :is="getIcon(child.meta.icon)" />
              <span>{{ child.meta.title }}</span>
            </template>
            <!-- 递归渲染子菜单 -->
            <SidebarMenu :routes="[child]" :is-collapse="isCollapse" />
          </el-sub-menu>
        </template>
      </el-sub-menu>

      <el-menu-item
        v-else-if="!item.meta.external"
        :key="item.path"
        :index="item.path"
      >
        <component :is="getIcon(item.meta.icon)" />
        <span>{{ item.meta.title }}</span>
      </el-menu-item>

      <el-menu-item
        v-else
        :key="item.path"
        :index="item.path"
        @click="handleExternalLink(item)"
      >
        <component :is="getIcon(item.meta.icon)" />
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import iconMap from "@/icons"; // 导入图标映射

export default defineComponent({
  name: "SidebarMenu",
  props: {
    routes: {
      type: Array,
      required: true,
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const filteredRoutes = computed(() => {
      // 获取当前用户角色，实际应用中应从状态管理或其他地方获取
      const userRole = "admin"; // 示例
      return props.routes.filter((item) => {
        return item.meta.role === userRole;
      });
    });

    const activePath = computed(() => route.path);

    const hasChildren = (item) => {
      return item.children && item.children.length > 0;
    };

    const getIcon = (iconName) => {
      return iconMap[iconName] || null;
    };

    const formatPath = (parentPath, childPath) => {
      if (childPath.startsWith("/")) return childPath;
      return `${parentPath}/${childPath}`;
    };

    const handleMenuClick = (item) => {
      router.push(item.path);
    };

    const handleExternalLink = (item) => {
      window.open(item.path, "_blank");
    };

    return {
      filteredRoutes,
      activePath,
      hasChildren,
      getIcon,
      formatPath,
      handleMenuClick,
      handleExternalLink,
    };
  },
});
</script>

<style scoped></style>
