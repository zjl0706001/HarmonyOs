const db = require("../db/ershouche");

async function getBrandsInfo() {
  return db.execute(
    `SELECT
             b.id AS 品牌ID,
             b.name AS 品牌,
             COUNT(c.car_id) AS 数量,
             ROUND(AVG(c.official_price), 2) AS 平均官方价格,
             ROUND(AVG(c.sh_price), 2) AS 平均售价
         FROM cars c
                  JOIN brands b ON c.brand_id = b.id
         GROUP BY b.id, b.name
         ORDER BY b.id`,
  );
}
async function getCityNumber() {
  return db.execute(
    `SELECT c.car_source_city_name        AS 城市,
                COUNT(c.car_source_city_name) AS 数量
         FROM cars c
         GROUP BY c.car_source_city_name`,
  );
}
async function getBrands() {
  return db.execute(`SELECT * FROM brands ORDER BY pinyin ;
  `);
}
async function getSeries(brand_id) {
  return db.execute(`SELECT * FROM series WHERE brand_id = ? ;`, [brand_id]);
}
async function getCarsBySeries(series_id) {
  return db.execute(`SELECT * FROM cars WHERE series_id = ? ;`, [series_id]);
}
async function getSearch(search) {
  const query = `
    SELECT * 
    FROM cars 
    WHERE car_name LIKE ? 
      OR car_source_city_name LIKE ?
       OR title LIKE ?
  `;

  const searchTerm = `%${search}%`;
  return db.execute(query, [searchTerm, searchTerm, searchTerm]);
}
async function getCars() {
  const query = `
    SELECT * 
    FROM cars 
  `;
  return db.execute(query);
}
module.exports = {
  getBrandsInfo,
  getCityNumber,
  getBrands,
  getSeries,
  getCarsBySeries,
  getSearch,
  getCars,
};
