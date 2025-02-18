import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/FindPictureBook.vue"),
  },
  {
    path: "/FindPictureBook",
    name: "FindPictureBook",
    component: () => import("../view/FindPictureBook.vue"),
  },
  {
    path: "/FindBookList",
    name: "FindBookList",
    component: () => import("../view/FindBookList.vue"),
  },
  {
    path: "/ListenStory",
    name: "ListenStory",
    component: () => import("../view/ListenStory.vue"),
  },
  {
    path: "/Me",
    name: "Me",
    component: () => import("../view/Me.vue"),
  },
  {
    path: "/Classify",
    name: "Classify",
    component: () => import("../view/Classify.vue"),
  },
  {
    path: "/Tag/:id",
    name: "Tag",
    component: () => import("../view/Tag.vue"),
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: () => import("../view/Detail.vue"),
  },
  {
    path: "/BookList/:id",
    name: "BookList",
    component: () => import("../view/BookList.vue"),
  },
  {
    path: "/Hot",
    name: "Hot",
    component: () => import("../view/Hot.vue"),
  },
  {
    path: "/Search/:keyWord",
    name: "Search",
    component: () => import("../view/Search.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
