const {
  selectUser,
  insertUser,
  deleteUser,
  selectUsers,
  selectUserInfo,
  updatePassword,
  updateInfo,
  updateRole,
} = require("../model/users");
const { gettoken, removetoken, verifytoken } = require("../utils/token");

async function login(req, res) {
  const { username, password } = req.body;
  await selectUser(username)
    .then(async (data) => {
      if (!data) return res.json({ message: "用户名不存在" });
      if (data.password !== password.toString())
        return res.json({ message: "密码错误" });
      let token = await gettoken({ username: data.username, role: data.role });
      return res.json({
        username,
        message: "登陆成功",
        token,
        role: data.role,
      });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，登陆失败！",
      });
    });
}

async function register(req, res) {
  const { username, password, email, phone_number, sex, age } = req.body;
  await selectUser(username)
    .then(async (data) => {
      if (data) return res.json({ message: "用户名已存在" });
      await insertUser(username, password, email, phone_number, sex, age)
        .then(() => {
          return res.json({
            username,
            message: "注册成功",
          });
        })
        .catch((err) => {
          return res.json({
            message: err.message || "服务器内部错误，注册失败！",
          });
        });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，注册失败！",
      });
    });
}

async function loginout(req, res) {
  await removetoken(req.headers.token)
    .then(() => {
      return res.json({
        message: "退出成功",
      });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，退出失败！",
      });
    });
}
async function info(req, res) {
  const token = req.headers.token;
  await verifytoken(token)
    .then(async (data) => {
      await selectUserInfo(data.username)
        .then((info) => {
          return res.json(info);
        })
        .catch((err) => {
          return res.json({
            message: err.message || "服务器内部错误，查询用户失败！",
          });
        });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，验证失败！",
      });
    });
}
async function alterpassword(req, res) {
  const { username, oldpassword, newpassword } = req.body;
  const { token } = req.headers;
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username) return res.json({ message: "token错误" });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，验证失败！",
      });
    });
  await selectUser(username)
    .then(async (user) => {
      if (!user) return res.json({ message: "用户名不存在" });
      if (user.password !== oldpassword.toString())
        return res.json({ message: "密码错误" });
      await updatePassword(username, newpassword)
        .then(() => {
          return res.json({
            username,
            message: "修改密码成功",
          });
        })
        .catch((err) => {
          return res.json({
            message: err.message || "服务器内部错误，修改密码失败！",
          });
        });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，查询用户失败！",
      });
    });
}
async function alterinfo(req, res) {
  const { username, email, phone_number, sex, age } = req.body;
  const { token } = req.headers;
  console.log(token, username, email, sex, age);
  if (!token) {
    return res.json({
      message: "token为空，请登录！",
    });
  }
  await verifytoken(token)
    .then((data) => {
      if (!(data.username === username || data.role === "admin"))
        return res.json({ message: "token错误" });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，验证失败！",
      });
    });
  await updateInfo(username, email, phone_number, sex, age)
    .then(() => {
      return res.json({
        username,
        message: "修改信息成功",
      });
    })
    .catch((err) => {
      return res.json({
        message: err.message || "服务器内部错误，修改信息失败！",
      });
    });
}
async function removeuser(req, res) {
  const { token } = req.headers;
  await verifytoken(token).then((data) => {
    selectUser(data.username).then((user) => {
      if (user.role !== "admin") {
        return res.json({
          message: "权限不足",
        });
      } else {
        deleteUser(req.body.username)
          .then(() => {
            return res.json({
              message: "删除用户成功",
            });
          })
          .catch((err) => {
            return res.json({
              message: err.message || "服务器内部错误，删除用户失败！",
            });
          });
      }
    });
  });
}
async function getusers(req, res) {
  const { token } = req.headers;
  await verifytoken(token).then((data) => {
    selectUser(data.username).then((user) => {
      if (user.role !== "admin") {
        return res.json({
          message: "权限不足",
        });
      }
      selectUsers().then((users) => {
        return res.json(users);
      });
    });
  });
}
async function toadmin(req, res) {
  const { token } = req.headers;
  const { username, role } = req.body;
  await verifytoken(token).then(async (data) => {
    if (data.role !== "admin") {
      return res.json({
        message: "权限不足",
      });
    }
    await updateRole(username, role).then(() => {
      return res.json({
        message: "修改用户权限成功",
      });
    });
  });
}
module.exports = {
  login,
  register,
  loginout,
  info,
  alterpassword,
  alterinfo,
  removeuser,
  getusers,
  toadmin,
};
