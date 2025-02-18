const regexp = require("../utils/regexp");
async function login(req, res, next) {
  const { username, password } = req.body;
  if (!username && !password) return res.send("账号或密码为空！");
  next();
}
async function register(req, res, next) {
  const { username, password, email, phone_number, sex, age } = req.body;
  if (!username || !password || !email || !phone_number || !sex || !age)
    return res.send({ message: "请填写完整信息！" });
  if (!regexp.username.test(username))
    return res.send({
      message: "账号格式错误，请输入6~16位数字、字母或下划线！",
    });
  if (!regexp.password.test(password))
    return res.send({
      message: "密码格式错误，请输入8~16位数字、字母或下划线！",
    });
  if (!regexp.email.test(email)) return res.send({ message: "邮箱格式错误！" });
  if (!regexp.phone_number.test(phone_number))
    return res.send({ message: "手机号格式错误！" });
  if (!regexp.sex.test(sex)) return res.send({ message: "性别格式错误！" });
  if (!regexp.age.test(age)) return res.send({ message: "年龄格式错误！" });
  next();
}
async function loginout(req, res, next) {
  if (!req.headers.token) return res.send({ message: "token为空！" });
  next();
}
async function info(req, res, next) {
  if (!req.headers.token) return res.send({ message: "token为空！" });
  next();
}
async function alterpassword(req, res, next) {
  const { oldpassword, newpassword } = req.body;
  if (!req.headers.token) return res.send({ message: "token为空,请登录！" });
  if (!oldpassword || !newpassword)
    return res.send({ message: "请填写完整信息！" });
  if (!regexp.password.test(oldpassword))
    return res.send({
      message: "旧密码格式错误，请输入8~16位数字、字母或下划线！",
    });
  if (!regexp.password.test(newpassword))
    return res.send({
      message: "新密码格式错误，请输入8~16位数字、字母或下划线！",
    });
  next();
}
async function alterinfo(req, res, next) {
  const { email, phone_number, sex, age } = req.body;
  if (!email || !phone_number || !sex || !age)
    return res.send({ message: "请填写完整信息！" });
  if (!regexp.email.test(email)) return res.send({ message: "邮箱格式错误！" });
  if (!regexp.phone_number.test(phone_number))
    return res.send("手机号格式错误！");
  if (!regexp.sex.test(sex)) return res.send({ message: "性别格式错误！" });
  if (!regexp.age.test(age)) return res.send({ message: "年龄格式错误！" });
  next();
}
async function removeuser(req, res, next) {
  const token = req.headers.token;
  console.log(token);
  if (!token) return res.send({ message: "token为空,请登录！" });
  const { username } = req.body;

  if (!username) return res.send({ message: "请填写完整信息！" });

  next();
}
async function getusers(req, res, next) {
  const token = req.headers.token;
  if (!token) return res.send({ message: "token为空,请登录！" });
  next();
}
async function toadmin(req, res, next) {
  const token = req.headers.token;
  if (!token) return res.send({ message: "token为空,请登录！" });
  next();
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
