const db = require("../db/travelDatabase");

const selectTravelGuide = async (page) => {
  const offset = (page - 1) * 10;
  const query = `SELECT *
       FROM travel_guide
       ORDER BY id DESC
       LIMIT ${offset}, 10;`;
  const [rows] = await db.execute(query);

  return rows;
};
const selectTravelGuideReply = async (id) => {
  const query = `SELECT *
       FROM travel_guide_reply
       WHERE travel_guide_id = ?`;
  const [rows] = await db.execute(query, [id]);

  return rows;
};
const insertTravelGuideReply = async (id, content, username) => {
  const query = `INSERT INTO travel_guide_reply (travel_guide_id, content, username)
       VALUES (?,?,?)`;
  const [rows] = await db.execute(query, [id, content, username]);
  return rows;
};
module.exports = {
  selectTravelGuide,
  selectTravelGuideReply,
  insertTravelGuideReply,
};
