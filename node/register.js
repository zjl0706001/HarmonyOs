const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const key = "zjlkey001";
const timer = 60 * 60 * 24 * 7;
const pool = mysql2
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "demo",
    connectionLimit: 10,
  })
  .promise();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const { username, password, age } = req.body;
  let newpassword = md5(password + key);
  try {
    const [result] = await pool.execute(
      "INSERT INTO users (username, password, age) VALUES (?, ?, ?)",
      [username, newpassword, age],
    );
    const token = jwt.sign({ username }, key, {
      expiresIn: timer,
    });
    res.json({
      message: "register success",
      userId: result.insertId,
      token: token,
    });
  } catch (err) {
    console.error(err);
    res.json({ message: "Error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let newpassword = md5(password + key);
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, newpassword],
    );
    if (rows.length) res.json({ message: "Login successful" });
    else res.json({ message: "Invalid credentials" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in" });
  }
});
app.get("/info", async (req, res) => {
  const token = req.headers.token;
  try {
    const decoded = jwt.verify(token, key);
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE username = ?",
      [decoded.username],
    );
    res.json({
      username: rows[0].username,
      age: rows[0].age,
    });
  } catch (err) {
    res.json({ message: "token is null!!" });
  }
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
