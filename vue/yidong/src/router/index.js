import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登录",
      role: ["every"],
    },
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "changeuser",
        name: "changeuser",
        component: () => import("../views/User/ChangeUser.vue"),
        meta: {
          title: "用户充值",
          role: ["every"],
        },
      },
      {
        path: "yuanqu",
        name: "yuanqu",
        component: () => import("../views/YuanQu.vue"),
        meta: {
          role: ["every"],
        },
        children: [
          {
            path: "cf",
            name: "cf",
            component: () => import("../views/CF.vue"),
          },
          {
            path: "fj",
            name: "fj",
            component: () => import("../views/FJ.vue"),
          },
        ],
      },
      {
        path: "chengshi",
        name: "chengshi",
        component: () => import("../views/ChengShi.vue"),
      },
    ],
    meta: {
      title: "首页",
      role: ["every"],
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  switch (to.path) {
    case "/login":
      next();
      break;
    case "/index":
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
      break;
    case "/index/yuanqu":
      next("/index/yuanqu/cf");
      break;
    default:
      next();
      break;
  }
});
export default router;
