const jwt = require("jsonwebtoken");
const {
  setDbToken,
  getDbToken,
  deleteDbToken,
  deleteDbTokenByUsername,
} = require("../model/token");
const { expiresIn, algorithm, tokenSignkey } = require("../conf/confing");
const gettoken = async (user) => {
  let token = jwt.sign(user, tokenSignkey, {
    expiresIn: expiresIn,
    algorithm: algorithm,
  });
  return new Promise(async (resolve, reject) => {
    await deleteDbTokenByUsername(user.username)
      .then(() => {
        setDbToken(token, user.username)
          .then(() => resolve(token))
          .catch((err) => reject(err));
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const verifytoken = async (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await getDbToken(token);
      if (!data) {
        return reject(new Error("Token不正确或已过期，请重新登录！"));
      }
      try {
        const decoded = jwt.verify(token, tokenSignkey, {
          algorithms: ["HS256"],
        });
        resolve(decoded);
      } catch (err) {
        reject(new Error("Token验证失败"));
      }
    } catch (err) {
      console.error("验证错误:", err);
      reject(new Error("服务器内部错误，获取数据库记录失败"));
    }
  });
};
const removetoken = async (token) => {
  return new Promise(async (resolve, reject) => {
    await deleteDbToken(token)
      .then(() => {
        resolve({ message: "删除成功" });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { gettoken, verifytoken, removetoken };
