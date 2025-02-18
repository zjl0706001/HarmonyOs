const regexp = require("../utils/regexp");
const { verifytoken } = require("../utils/token");
async function login(req, res, next) {
  const { username, password } = req.body;
  if (!username && !password)
    return res.json({ message: "请填写完整信息！", code: 2 });
  next();
}
async function register(req, res, next) {
  const { username, password, email, phoneNumber } = req.body;
  if (!username || !password || !email || !phoneNumber)
    return res.json({ message: "请填写完整信息！" });
  if (!regexp.username.test(username))
    return res.json({
      message: "账号格式错误，请输入6~16位数字、字母或下划线！",
      code: 2,
    });
  if (!regexp.password.test(password))
    return res.json({
      message: "密码格式错误，请输入8~16位数字、字母或下划线！",
      code: 2,
    });
  if (!regexp.email.test(email))
    return res.json({ message: "邮箱格式错误！", code: 2 });
  if (!regexp.phoneNumber.test(phoneNumber))
    return res.json({ message: "手机号格式错误！" });
  next();
}
async function logout(req, res, next) {
  const { username, token } = req.cookies;
  if (!(username || token)) return res.json({ message: "缺少参数！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        code: 0,
        message: err ? err.message : "token错误或已过期！",
      });
    });
}
async function deleteUser(req, res, next) {
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function getUserInfo(req, res, next) {
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function updateUserInfo(req, res, next) {
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
  if (sex === "男") req.body.sex = "male";
  else if (sex === "女") req.body.sex = "female";
  else req.body.sex = "other";
  if (
    !email &&
    !phoneNumber &&
    !sex &&
    !nickname &&
    !fullName &&
    !birthday &&
    !district &&
    !selfIntroduction &&
    !headImage
  )
    return res.json({ message: "请填写完整信息！", code: 2 });
  if (!regexp.email.test(email))
    return res.json({ message: "邮箱格式错误！", code: 2 });
  if (!regexp.phoneNumber.test(phoneNumber))
    return res.json({ message: "手机号格式错误！" });
  if (!regexp.sex.test(sex))
    return res.json({ message: "性别格式错误！", code: 2 });
  if (!regexp.birthday.test(birthday))
    return res.json({ message: "生日格式错误！", code: 2 });

  const { username, token } = req.cookies;

  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function updatePassword(req, res, next) {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return res.json({ message: "请填写完整信息！", code: 2 });
  if (!regexp.password.test(newPassword)) {
    return res.json({
      message: "密码格式错误，请输入8~16位数字、字母或下划线！",
      code: 2,
    });
  }
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function getCoupons(req, res, next) {
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function getEquityCards(req, res, next) {
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function getOffsetRolls(req, res, next) {
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
      });
    });
}
async function getOrder(req, res, next) {
  const { username, token } = req.cookies;
  if (!username) return res.json({ message: "缺少参数！", code: 2 });
  if (!token) return res.json({ message: "请先登录！", code: 2 });
  await verifytoken(token)
    .then((data) => {
      if (data.username !== username)
        return res.json({ message: "token错误！", code: 0 });
      next();
    })
    .catch((err) => {
      return res.json({
        message: err ? err.message : "token错误或已过期！",
        code: 0,
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
