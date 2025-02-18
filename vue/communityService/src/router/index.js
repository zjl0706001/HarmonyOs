import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("/src/views/login/Login.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("/src/views/login/login.vue"),
  },
  {
    path: "/Dashboard",
    name: "dashboard",
    component: () => import("/src/views/Dashboard/Dashboard.vue"),
    children: [
      {
        path: "/Dashboard/Welcome",
        name: "home",
        component: () => import("/src/views/Dashboard/Welcome/Welcome.vue"),
        meta: {
          title: "欢迎",
        },
      },
      {
        path: "/Dashboard/Notice",
        name: "notice",
        component: () => import("/src/views/Dashboard/Notice/Notice.vue"),
        meta: {
          title: "公告",
        },
      },
      {
        path: "/Dashboard/Carousel",
        name: "carousel",
        children: [
          {
            meta: {
              title: "轮播图分类",
            },
            path: "/Dashboard/Carousel/CarouselClass",
            name: "carouselClass",
            component: () =>
              import("/src/views/Dashboard/Carousel/CarouselClass.vue"),
          },
          {
            meta: {
              title: "轮播图列表",
            },
            path: "/Dashboard/Carousel/CarouselList",
            name: "carouselList",
            component: () =>
              import("/src/views/Dashboard/Carousel/CarouselList.vue"),
          },
        ],
        meta: {
          title: "轮播图管理",
        },
      },
      {
        path: "/Dashboard/User",
        name: "user",
        children: [
          {
            meta: {
              title: "用户列表",
            },
            path: "/Dashboard/User/UserList",
            name: "userList",
            component: () => import("/src/views/Dashboard/User/UserList.vue"),
          },
        ],
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "/Dashboard/Goods",
        name: "goods",

        children: [
          {
            meta: {
              title: "商品列表",
            },
            path: "/Dashboard/Goods/GoodsList",
            component: () => import("/src/views/Dashboard/Goods/GoodsList.vue"),
          },
          {
            meta: {
              title: "商品分类",
            },
            path: "/Dashboard/Goods/GoodsClass",
            name: "goodsClass",
            component: () =>
              import("/src/views/Dashboard/Goods/GoodsClass.vue"),
          },
        ],
        meta: {
          title: "商品管理",
        },
      },
      {
        path: "/Dashboard/Order",
        name: "order",
        component: () => import("/src/views/Dashboard/Order/Order.vue"),
        meta: {
          title: "订单管理",
        },
      },
      {
        path: "/Dashboard/Forum",
        name: "forum",
        children: [
          {
            title: "模块管理",
            path: "/Dashboard/Forum/ForumModule",
            name: "forumModule",
            component: () =>
              import("/src/views/Dashboard/Forum/ForumModule.vue"),
          },
          {
            title: "讨论管理",
            path: "/Dashboard/Forum/ForumDiscuss",
            name: "forumDiscuss",
            component: () =>
              import("/src/views/Dashboard/Forum/ForumDiscuss.vue"),
          },
        ],
        meta: {
          title: "论坛管理",
        },
      },
      {
        path: "/Dashboard/Seek",
        name: "seek",
        children: [
          {
            title: "分类管理",
            path: "/Dashboard/Seek/SeekClass",
            name: "seekClass",
            component: () => import("/src/views/Dashboard/Seek/SeekClass.vue"),
          },
          {
            title: "咨询管理",
            path: "/Dashboard/Seek/SeekManage",
            name: "seekManage",
            component: () => import("/src/views/Dashboard/Seek/SeekManage.vue"),
          },
        ],
        meta: {
          title: "评论管理",
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === "/Dashboard/User/UserList") {
    if (localStorage.getItem("userName") === "admin") {
      next();
    } else {
      alert("权限不足");
      router.go(0);
    }
  } else if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("token");
    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  }
});
export default router;
