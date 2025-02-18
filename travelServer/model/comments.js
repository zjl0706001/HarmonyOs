const db = require("../db/travelDatabase");
const selectComments = async function (entity_id, entity_type) {
  const [comments] = await db.execute(
    `SELECT * FROM comments
         WHERE entity_id = ?
           AND entity_type = ?
        `,
    [entity_id, entity_type],
  );

  for (let comment of comments) {
    const [replies] = await db.execute(
      `SELECT * FROM comment_replies
       WHERE comment_id = ?
      `,
      [comment["comment_id"]],
    );
    comment.replies = replies;
  }
  return comments;
};
const insertComment = async function (
  entity_id,
  entity_type,
  content,
  username,
) {
  const [result] = await db.execute(
    `INSERT INTO comments
     (entity_id, entity_type, content,username)
     VALUES
     (?, ?, ?,?)
    `,
    [entity_id, entity_type, content, username],
  );
  return result;
};
const insertReply = async function (comment_id, content, username) {
  const [result] = await db.execute(
    `INSERT INTO comment_replies
     (comment_id, content, username)
     VALUES
     (?, ?, ?)
    `,
    [comment_id, content, username],
  );
  return result;
};
module.exports = {
  selectComments,
  insertComment,
  insertReply,
};
