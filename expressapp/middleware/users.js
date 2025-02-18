const { findUserByUsername, setUser } = require("../model/users");
async function login(req, res) {
  const { username, password } = req.query;
  const user = await findUserByUsername(username);
  console.log(user);
  if (!user) {
    return res.json({ message: "用户名不存在" });
  }
  if (!(username === user.username && password === user.password)) {
    return res.json({ message: "密码错误" });
  }
  return res.json({ message: "登录成功" });
}

async function register(req, res) {
  const { username, password, nickname, age } = req.body;
  if (!username || !password || !nickname || !age) {
    return res.json({ message: "信息不全" });
  }
  try {
    if (await findUserByUsername(username)) {
      return res.json({ message: "账号已存在" });
    }
    const userId = await setUser(req.body);
    if (userId) {
      return res.json({ message: "注册成功", userId });
    }
  } catch (error) {
    console.error("注册过程中发生错误:", error);
    return res.json({ message: "服务器内部错误" });
  }
}

module.exports = { login, register };
