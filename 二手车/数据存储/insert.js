const connection = require("./db");
connection.connect((err) => {
  if (err) {
    console.error("连接失败: " + err.stack);
    return;
  }
  console.log("已连接到 MySQL，连接 ID: " + connection.threadId);
});
const insertBrandSQL = `
  INSERT INTO brands (id, name)
  VALUES (?, ?)
  ON DUPLICATE KEY UPDATE name = VALUES(name);

`;
const insertSeriesSQL = `
  INSERT INTO series (id, name, brand_id)
  VALUES (?, ?, ?)
  ON DUPLICATE KEY UPDATE name = VALUES(name), brand_id = VALUES(brand_id);
`;

const insertCarSQL = `
  INSERT INTO cars
  (authentication_method, brand_id,series_id, car_id, car_name, car_source_city_name, car_year,
   image, official_price, sh_price, sub_title, title)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE
                     authentication_method = VALUES(authentication_method),
                     brand_id = VALUES(brand_id),
                     series_id = VALUES(series_id),
                     car_id = VALUES(car_id),
                     car_name = VALUES(car_name),
                     car_source_city_name = VALUES(car_source_city_name),
                     car_year = VALUES(car_year),
                     image = VALUES(image),
                     official_price = VALUES(official_price),
                     sh_price = VALUES(sh_price),
                     sub_title = VALUES(sub_title),
                     title = VALUES(title);
`;
const insertBrand = (data) => {
  connection.execute(insertBrandSQL, data, (err, results) => {
    if (err) {
      console.error("插入数据失败: " + err.stack);
    } else {
      const brandid = data[0];
      console.log("数据插入成功，BrandID: " + brandid);
    }
  });
};
const insertSeries = (data) => {
  connection.execute(insertSeriesSQL, data, (err, results) => {
    if (err) {
      console.error("插入数据失败: " + err.stack);
    } else {
      const seriesid = data[0];
      console.log("数据插入成功，series_id: " + seriesid);
    }
  });
};
const insertCar = (data) => {
  connection.execute(insertCarSQL, data, (err, results) => {
    if (err) {
      console.error("插入数据失败: " + err.stack);
    } else {
      const carId = data[3];
      console.log("数据插入成功，car_id: " + carId);
    }
  });
};

const close = () => {
  connection.end();
};
module.exports = { insertBrand, insertSeries, insertCar, close };
