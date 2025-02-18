import { createWebHistory, createRouter } from "vue-router";
import Cookies from "js-cookie";
import { dashRoutes, loopRoutes } from "./dashboard.js";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../view/Login/Login.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../view/Login/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../view/Register/Register.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const role = Cookies.get("role");
if (role) {
  let ret = loopRoutes(dashRoutes, role);
  router.addRoute({
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../view/Dashboard/Dashboard.vue"),
    redirect: "/Dashboard/HomePage",
    children: ret,
  });

  router.push({ path: "/Dashboard" }).then();
}
export default router;
