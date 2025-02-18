// 创建MySQL 连接池
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "ershouche",
});
module.exports = connection;
// connection.connect((err) => {
//   if (err) {
//     console.error("连接失败: " + err.stack);
//   } else {
//     console.log("连接成功");
//     fetch(
//       "https://m.dcdapp.com/motor/sh_go/api/buy_car/brand_filter_list?__method=window.fetch&sh_city_name=%E6%96%B0%E4%B9%A1&device_id=7456680216515528229&need_nationwide_count=1",
//     ).then((res) => {
//       res.json().then((data) => {
//         const li = data.data.brand_list;
//         li.forEach((item) => {
//           const { brand_id, brand_name, image_url, pinyin } = item.info;
//
//           if (brand_id > 0 && brand_id < 75 && brand_id !== 71) {
//             const query = `
//               INSERT INTO brands (id, name, img_url, pinyin)
//               VALUES (?, ?, ?, ?)
//               ON DUPLICATE KEY UPDATE
//                                  name = VALUES(name),
//                                  img_url = VALUES(img_url),
//                                  pinyin = VALUES(pinyin)
//             `;
//             const values = [brand_id, brand_name, image_url, pinyin];
//
//             connection.query(query, values, (error, results) => {
//               if (error) {
//                 console.error("Error inserting/updating brand:", error);
//               } else {
//                 if (results.affectedRows === 1) {
//                   console.log("Brand inserted successfully:", results.insertId);
//                 } else if (results.affectedRows === 2) {
//                   console.log("Brand updated successfully:", brand_id);
//                 }
//               }
//             });
//           }
//         });
//       });
//     });
//   }
// });
