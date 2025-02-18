const {
  selectUser,
  insertUser,
  deleteUser: DU,
  updateUser,
  updatePassword: UP,
  selectCoupons,
  selectEquityCards,
  selectOffsetRolls,
  selectOrder,
} = require("../model/users");
const { gettoken, removetoken } = require("../utils/token");
async function login(req, res) {
  const { username, password } = req.body;
  await selectUser(username)
    .then(async (data) => {
      if (!data) return res.json({ message: "用户名不存在", code: 0 });
      if (data.password !== password.toString())
        return res.json({ message: "密码错误", code: 0 });
      let token = await gettoken({ username: data.username, role: data.role });
      return res.json({
        code: 1,
        username,
        message: "登陆成功",
        token,
        role: data.role,
      });
    })
    .catch((err) => {
      return res.json({
        code: 0,
        message: err.message || "服务器内部错误，登陆失败！",
      });
    });
}

async function register(req, res) {
  const { username, password, email, phoneNumber } = req.body;
  await selectUser(username)
    .then(async (data) => {
      if (data) return res.json({ code: 0, message: "用户名已存在" });
      await insertUser(username, password, email, phoneNumber)
        .then(() => {
          return res.json({
            code: 1,
            username,
            message: "注册成功",
          });
        })
        .catch((err) => {
          return res.json({
            code: 0,
            message: err.message || "服务器内部错误，注册失败！",
          });
        });
    })
    .catch((err) => {
      return res.json({
        code: 0,
        message: err.message || "服务器内部错误，注册失败！",
      });
    });
}
async function logout(req, res) {
  await removetoken(req.cookies.token)
    .then(() => {
      res.clearCookie("username");
      res.clearCookie("token");
      res.clearCookie("role");
      res.json({ code: 1, message: "退出成功" });
    })
    .catch((err) => {
      res.json({ code: 0, message: err ? err : "退出失败" });
    });
}
async function deleteUser(req, res) {
  const { username } = req.cookies;
  await DU(username)
    .then(() => {
      removetoken(req.cookies.token)
        .then(() => {
          res.clearCookie("username");
          res.clearCookie("token");
          res.clearCookie("role");
          res.json({ code: 1, message: "注销成功" });
        })
        .catch((err) => {
          res.json({ code: 1, message: err ? err : "注销失败" });
        });
    })
    .catch((err) => {
      res.json({ code: 0, message: err ? err : "注销失败" });
    });
}
async function getUserInfo(req, res) {
  const { username } = req.cookies;
  await selectUser(username)
    .then(async (data) => {
      if (!data) return res.json({ message: "用户名不存在", code: 0 });
      const {
        username,
        email,
        phoneNumber,
        sex,
        nickname,
        fullName,
        birthday,
        district,
        selfIntroduction,
        headImage,
      } = data;
      return res.json({
        code: 1,
        message: "获取成功",
        data: {
          username,
          email,
          phoneNumber,
          sex,
          nickname,
          fullName,
          birthday,
          district,
          selfIntroduction,
          headImage,
        },
      });
    })
    .catch(() => {
      return res.json({
        code: 0,
        message: "服务器内部错误，获取失败！",
      });
    });
}
async function updateUserInfo(req, res) {
  const { username } = req.cookies;
  const {
    email,
    phoneNumber,
    sex,
    nickname,
    fullName,
    birthday,
    district,
    selfIntroduction,
    headImage,
  } = req.body;
  await selectUser(username).then(async (data) => {
    if (!data) return res.json({ message: "用户名不存在", code: 0 });
    await updateUser(
      email,
      phoneNumber,
      sex,
      nickname,
      fullName,
      birthday,
      district,
      selfIntroduction,
      headImage,
      username,
    )
      .then(() => {
        return res.json({
          code: 1,
          message: "修改成功",
        });
      })
      .catch((err) => {
        return res.json({
          code: 0,
          message: err.message || "服务器内部错误，修改失败！",
        });
      });
  });
}
async function updatePassword(req, res) {
  const { username } = req.cookies;
  const { oldPassword, newPassword } = req.body;
  await selectUser(username).then(async (data) => {
    if (!data) return res.json({ message: "用户名不存在", code: 0 });
    if (data.password !== oldPassword.toString())
      return res.json({ message: "旧密码错误", code: 0 });
    await UP(username, newPassword, oldPassword)
      .then((r) => {
        removetoken(req.cookies.token).then(() => {
          res.clearCookie("username");
          res.clearCookie("token");
          res.clearCookie("role");
          return res.json({
            code: 1,
            message: "修改成功",
          });
        });
      })
      .catch((err) => {
        return res.json({
          code: 0,
          message: err.message || "服务器内部错误，修改失败！",
        });
      });
  });
}
async function getCoupons(req, res) {
  const { username } = req.cookies;
  await selectCoupons(username)
    .then((data) => {
      return res.json({
        code: 1,
        message: "获取成功",
        data,
      });
    })
    .catch((err) => {
      return res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
}
async function getEquityCards(req, res) {
  const { username } = req.cookies;
  await selectEquityCards(username)
    .then((data) => {
      return res.json({
        code: 1,
        message: "获取成功",
        data,
      });
    })
    .catch((err) => {
      return res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
}
async function getOffsetRolls(req, res) {
  const { username } = req.cookies;
  await selectOffsetRolls(username)
    .then((data) => {
      return res.json({
        code: 1,
        message: "获取成功",
        data,
      });
    })
    .catch((err) => {
      return res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
}
async function getOrder(req, res) {
  const { username } = req.cookies;
  await selectOrder(username)
    .then((data) => {
      return res.json({
        code: 1,
        message: "获取成功",
        data,
      });
    })
    .catch((err) => {
      return res.json({
        code: 0,
        message: err.message || "服务器内部错误，获取失败！",
      });
    });
}
module.exports = {
  login,
  register,
  logout,
  deleteUser,
  getUserInfo,
  updateUserInfo,
  updatePassword,
  getCoupons,
  getEquityCards,
  getOffsetRolls,
  getOrder,
};
