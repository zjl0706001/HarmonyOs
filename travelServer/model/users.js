const db = require("../db/travelDatabase");
async function insertUser(username, password, email, phoneNumber) {
  return db.execute(
    "INSERT INTO users (username, password, email, phoneNumber) VALUES (?, ?, ?, ?)",
    [username, password, email, phoneNumber],
  );
}
async function deleteUser(username) {
  return db.execute("DELETE FROM users WHERE username = ?", [username]);
}
async function updateUser(
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
) {
  return db.execute(
    "UPDATE users SET email = ?, phoneNumber = ?, sex = ?, nickname = ?, fullName = ?, birthday = ?, district = ?, selfIntroduction = ?, headImage = ? WHERE username = ?",
    [
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
    ],
  );
}
async function selectUser(username) {
  const [rows] = await db.execute("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  return rows[0];
}
async function updatePassword(username, newPassword, oldPassword) {
  return db.execute(
    "UPDATE users SET password = ? WHERE username = ? AND password = ?",
    [newPassword, username, oldPassword],
  );
}
async function selectCoupons(username) {
  const [rows] = await db.execute(
    `SELECT uc.*, c.*
     FROM user_coupons uc
     JOIN coupons c ON uc.coupon_id = c.coupon_id
     WHERE uc.username = ?`,
    [username],
  );
  return rows;
}
async function selectEquityCards(username) {
  const [rows] = await db.execute(
    `SELECT ue.*, e.*
     FROM user_equity_cards ue
     JOIN equity_cards e ON ue.equity_card_id = e.equity_card_id
     WHERE ue.username = ?`,
    [username],
  );
  return rows;
}
async function selectOffsetRolls(username) {
  const [rows] = await db.execute(
    `SELECT uo.*, o.*
     FROM user_offset_rolls uo
     JOIN offset_rolls o ON uo.offset_roll_id = o.offset_roll_id
     WHERE uo.username = ?`,
    [username],
  );
  return rows;
}
async function selectOrder(username) {
  const [rows] = await db.execute(
    `SELECT *
     FROM user_hotels
     LEFT JOIN hotels
     ON user_hotels.hotel_id = hotels.hotel_id
     WHERE user_hotels.username = ?;`,
    [username],
  );
  return rows;
}
module.exports = {
  insertUser,
  deleteUser,
  selectUser,
  updateUser,
  updatePassword,
  selectCoupons,
  selectEquityCards,
  selectOffsetRolls,
  selectOrder,
};
