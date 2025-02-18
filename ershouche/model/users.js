const db = require("../db/ershouche");
async function insertUser(username, password, email, phone_number, sex, age) {
  return db.execute(
    "INSERT INTO users (username, password, email, phone_number, sex, age) VALUES (?, ?, ?, ?, ?, ?)",
    [username, password, email, phone_number, sex, age],
  );
}
async function deleteUser(username) {
  return db.execute("DELETE FROM users WHERE username = ?", [username]);
}
async function updatePassword(username, newpassword) {
  return db.execute("UPDATE users SET password = ? WHERE username = ?", [
    newpassword,
    username,
  ]);
}
async function selectUser(username) {
  const [rows] = await db.execute("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  return rows[0];
}
async function selectUserInfo(username) {
  const [rows] = await db.execute(
    "SELECT username, email, phone_number, sex, age FROM users WHERE username = ?",
    [username],
  );
  return rows[0];
}
async function updateInfo(username, email, phone_number, sex, age) {
  return db.execute(
    "UPDATE users SET email = ?, phone_number = ?, sex = ?, age = ? WHERE username = ?",
    [email, phone_number, sex, age, username],
  );
}
async function selectUsers() {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
}
async function updateRole(username, role) {
  return db.execute("UPDATE users SET role = ? WHERE username = ?", [
    role,
    username,
  ]);
}
module.exports = {
  insertUser,
  deleteUser,
  updatePassword,
  selectUser,
  selectUserInfo,
  updateInfo,
  selectUsers,
  updateRole,
};
