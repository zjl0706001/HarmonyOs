<template>
  <el-container>
    <el-header style="background: #001529; color: white; height: 60px">
      <el-col
        :span="12"
        style="
          line-height: 60px;
          font-size: 20px;
          display: flex;
          justify-content: space-between;
        "
      >
        <img
          style="
            width: 50px;
            height: 50px;
            margin: 5px 20px 0 0;
            display: block;
          "
          src="/src/image/骷髅医生.png"
          alt=""
        />
        <div>HomeHoney</div>
        <div
          style="
            margin-left: 1000px;
            cursor: pointer;
            display: flex;
            align-items: center;
          "
        >
          <el-icon><Search /></el-icon>
          <el-input
            v-model="search"
            placeholder="请输入内容"
            style="width: 200px; margin: 0 30px 0 10px"
            clearable
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
          <el-icon style="margin-right: 30px"><MagicStick /></el-icon>

          <el-dropdown size="large" placement="bottom-start">
            <div style="display: flex; align-items: center">
              <img
                style="
                  width: 30px;
                  height: 30px;

                  border-radius: 50%;
                "
                src="/src/image/骷髅医生.png"
                alt=""
              />
              <div style="color: white; margin-left: 10px">admin</div>
            </div>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <img
            style="width: 30px; height: 30px; margin-left: 30px"
            src="/src/image/中英文语言.png"
            alt=""
          />
        </div>
      </el-col>
    </el-header>
    <el-main style="padding: 0; display: flex; height: calc(100vh - 60px)">
      <el-col :span="3" style="min-width: 200px">
        <el-menu
          :default-active="route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/Dashboard/Welcome">
            <el-icon><HomeFilled /></el-icon>
            <span>欢迎</span>
          </el-menu-item>
          <el-menu-item index="/Dashboard/Notice">
            <el-icon><Comment /></el-icon>
            <span>公告管理</span>
          </el-menu-item>
          <el-sub-menu index="/Dashboard/Carousel">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>轮播图管理</span>
            </template>

            <el-menu-item index="/Dashboard/Carousel/CarouselClass">
              轮播图分类
            </el-menu-item>
            <el-menu-item index="/Dashboard/Carousel/CarouselList">
              轮播图列表
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/Dashboard/User">
            <template #title>
              <el-icon><Avatar /></el-icon>
              <span>用户管理</span>
            </template>

            <el-menu-item index="/Dashboard/User/UserList">
              用户列表
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/Dashboard/Goods">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>商品管理</span>
            </template>

            <el-menu-item index="/Dashboard/Goods/GoodsList">
              商品列表
            </el-menu-item>
            <el-menu-item index="/Dashboard/Goods/GoodsClass">
              商品分类
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/Dashboard/Order">
            <el-icon><Calendar /></el-icon>
            <span>订单管理</span>
          </el-menu-item>
          <el-sub-menu index="/Dashboard/Forum">
            <template #title>
              <el-icon><Discount /></el-icon>
              <span>论坛管理</span>
            </template>

            <el-menu-item index="/Dashboard/Forum/ForumModule">
              模块管理
            </el-menu-item>
            <el-menu-item index="/Dashboard/Forum/ForumDiscuss">
              讨论管理
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/Dashboard/Seek">
            <template #title>
              <el-icon><Message /></el-icon>
              <span>咨询管理</span>
            </template>
            <el-menu-item index="/Dashboard/Seek/SeekClass">
              分类管理
            </el-menu-item>
            <el-menu-item index="/Dashboard/Seek/SeekManage">
              资讯管理
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :span="21" style="padding: 0; height: 100%; overflow-y: auto"
        ><router-view />
      </el-col>
    </el-main>
  </el-container>
</template>
<script setup>
import {
  Avatar,
  Comment,
  HomeFilled,
  Menu,
  Box,
  Calendar,
  Discount,
  Message,
  Search,
  MagicStick,
} from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const router = useRouter();
const search = ref("");
const logout = () => {
  localStorage.removeItem("token");
  router.replace("/login");
};
</script>
<style scoped>
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
  background: white;
  overflow-y: auto;
}
</style>
