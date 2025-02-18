const db = require("../db/ershouche");
const setDbToken = async function (token, username) {
  return db.execute(
    "INSERT INTO tokens (token_value, username) VALUES (?, ?)",
    [token, username],
  );
};
const getDbToken = async function (token_value) {
  const [rows] = await db.execute(
    "SELECT * FROM tokens WHERE token_value = ?",
    [token_value],
  );
  return rows[0];
};
const deleteDbToken = async function (token) {
  return db.execute("DELETE FROM tokens WHERE token_value = ?", [token]);
};
const deleteDbTokenByUsername = async function (username) {
  return db.execute("DELETE FROM tokens WHERE username = ?", [username]);
};
module.exports = {
  setDbToken,
  getDbToken,
  deleteDbToken,
  deleteDbTokenByUsername,
};
