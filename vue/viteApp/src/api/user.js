import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true;
export const login = function (body) {
  return axios.post("http://localhost:3000/api/users/login", body);
};
export const register = function (body) {
  return axios.post("http://localhost:3000/api/users/register", body);
};
export const getUsers = function () {
  const token = Cookies.get("Token");
  return axios.get("http://localhost:3000/api/users/users", {
    headers: {
      token,
    },
  });
};
export const removeUser = function (username) {
  const token = Cookies.get("Token");
  return axios.post(
    "http://localhost:3000/api/users/removeuser/",
    { username },
    { headers: { token } },
  );
};
export const alterInfo = function (body) {
  return axios.post("http://localhost:3000/api/users/alterinfo", body, {
    headers: {
      token: Cookies.get("Token"),
    },
  });
};
export const getUserInfo = function () {
  return axios.post("http://localhost:3000/api/users/info", "", {
    headers: {
      token: Cookies.get("Token"),
    },
  });
};
export const toAdmin = function (body) {
  return axios.post("http://localhost:3000/api/users/toadmin", body, {
    headers: {
      token: Cookies.get("Token"),
    },
  });
};
