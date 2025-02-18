import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
export const login = async function (body) {
  return await axios.post("/login", body);
};
export const checkToken = async function (token) {
  return await axios.get("/checktoken?token=" + token);
};
export const changePassword = async function (body) {
  return await axios.post("/changepassword", {
    newPwd: body.password,
    oldPwd: body.oldPassword,
    token: localStorage.getItem("token"),
  });
};
export const getUserList = async function () {
  return await axios.get("/getUserList?token=" + localStorage.getItem("token"));
};
export const addUser = async function (body) {
  return await axios.post("/addUser", {
    userName: body.username,
    password: body.password,
    token: localStorage.getItem("token"),
  });
};
export const deleteUser = async function (body) {
  return await axios.post("/deleteUser", {
    userId: body.userId,
    token: localStorage.getItem("token"),
  });
};
