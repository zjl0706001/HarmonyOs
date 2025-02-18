import axios from "axios";
axios.defaults.baseURL = "http://localhost:1337";
// 登录
export const login = function (userName, password) {
  return axios.post("/api/v1/auth/manager_login", {
    userName,
    password,
  });
};
// 公告
export const noticesList = function () {
  return axios.get("/api/v1/admin/notice?page=1", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const addNotice = function (body) {
  return axios.post("/api/v1/admin/notice", body, {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const deleteNotice = function (id) {
  return axios.delete("/api/v1/admin/notice/" + id, {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const getNoticeInfo = function (id) {
  return axios.get("/api/v1/notices/" + id);
};
export const updateNotice = function (id, body) {
  return axios.put("/api/v1/admin/notice/" + id, body, {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
// 轮播图分类
export const bannerList = function () {
  return axios.get("/api/v1/admin/bannercategory", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const addBanner = function (body) {
  return axios.post("/api/v1/admin/bannercategory", body, {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const deleteBanner = function (id) {
  return axios.delete("/api/v1/admin/bannercategory/" + id, {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const updateBanner = function (id, body) {
  return axios.put("/api/v1/admin/bannercategory/" + id, body, {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
//轮播图列表
export const bannerImgList = function () {
  return axios.get("/api/v1/admin/banner/", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
export const addBannerImg = function (body) {
  return axios.post(
    "/api/v1/admin/banner/",
    { ...body },
    {
      headers: {
        Token: localStorage.getItem("token"),
      },
    },
  );
};
//用户管理
export const getUsers = function () {
  return axios.get("/api/v1/admin/user", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
//商品列表
export const getGoods = function () {
  return axios.get("/api/v1/admin/product", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
//商品分类
export const getGoodsCategory = function () {
  return axios.get("/api/v1/admin/productcategory", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
//板块管理
export const getForums = function () {
  return axios.get("/api/v1/admin/forum", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
//讨论管理
export const getDiscuss = function () {
  return axios.get("/api/v1/admin/post", {
    headers: {
      Token: localStorage.getItem("token"),
    },
  });
};
