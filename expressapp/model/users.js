const db = require("../db/users");
async function findUserByUsername(username) {
  const [rows] = await db.execute("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  return rows[0];
}
async function setUser({ username, password, nickname, age }) {
  const query = `
        INSERT INTO users (username, password, nickname, age)
        VALUES (?, ?, ?, ?)
    `;
  const [result] = await db.execute(query, [username, password, nickname, age]);
  console.log("User created with ID:", result.insertId);
  return result.insertId;
}
async function findGoodsList() {
  const [rows] = await db.execute("SELECT * FROM goods");
  return rows;
}
async function deleteGoods(id) {
  const query = `
        DELETE FROM goods WHERE goods_id = ?
    `;
  const [result] = await db.execute(query, [id]);
  return result.affectedRows;
}
const installGoods = async ({ title, category, price, img_big_logo }) => {
  const sql =
    "INSERT INTO goods (title, category, price, img_big_logo) VALUES (?, ?, ?, ?)";
  return db.execute(sql, [title, category, price, img_big_logo]);
};
const changeGoods = async ({
  goods_id,
  title,
  category,
  price,
  img_big_logo,
}) => {
  const sql =
    "UPDATE goods SET title = ?, category = ?, price = ?, img_big_logo = ? WHERE goods_id = ?";
  return db.execute(sql, [title, category, price, img_big_logo, goods_id]);
};
module.exports = {
  findUserByUsername,
  setUser,
  findGoodsList,
  deleteGoods,
  installGoods,
  changeGoods,
};
