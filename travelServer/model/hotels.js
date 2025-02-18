const db = require("../db/travelDatabase");
const { zhipu } = require("../BigModel/zhipu");
const { text } = require("../utils/regexp");

const selectSpecialOffer = async function () {
  const [rows] = await db.execute(
    "SELECT * FROM hotels WHERE hotel_id >= (SELECT FLOOR(RAND() * (SELECT MAX(hotel_id) FROM hotels))) LIMIT 10;",
  );
  return rows;
};
const selectHotels = async function (_) {
  let keyword2 = _["keyword2"] ? _["keyword2"] : "%";
  const keyword2sql = !isNaN(Number(keyword2))
    ? "hotels.hotel_price < ?"
    : "hotels.hotel_star_level LIKE ?";
  const query = `SELECT * FROM hotels WHERE
                       ${keyword2sql} AND
                       hotel_name LIKE ? 
                       AND (hotels.hotel_province LIKE ? OR hotel_city LIKE ?)
                       LIMIT 10 OFFSET ${_.page ? (_.page - 1) * 10 : 0}`;

  const [rows] = await db.execute(query, [
    _["keyword2"]
      ? !isNaN(Number(keyword2))
        ? Number(keyword2)
        : `%${keyword2}%`
      : keyword2,
    _["keyword"] ? `%${_["keyword"]}%` : "%%",
    `%${_["city"]}%`,
    `%${_["city"]}%`,
  ]);
  return rows;
};
const selectRecommend = async function (city) {
  const [rows] = await db.execute(
    "SELECT * FROM hotels WHERE hotel_district LIKE ? AND hotel_id >= (SELECT FLOOR(RAND() * (SELECT MAX(hotel_id) FROM hotels))) LIMIT 10;",
    [`%${city}%`],
  );
  return rows;
};
const selectHotelInfo = async function (id) {
  const [rows] = await db.execute("SELECT * FROM hotels WHERE hotel_id = ?", [
    id,
  ]);
  await zhipu(rows[0]["hotel_name"]).then((res) => {
    let str = res.match(text).join("");

    str =
      str
        .replace(/(\w+)(:)/g, '"$1"$2')
        .replace(/(:\s*)([^,{}\[]+)(?=\s*[,}\]])/g, '$1"$2"') + "}";
    try {
      str = JSON.parse(str);
      str.price = Math.floor(rows[0]["hotel_price"]) + 100 + "元";
    } catch (error) {
      str = {
        title: `${rows[0]["hotel_name"]}豪华度假套餐`,
        price: `${Math.floor(rows[0]["hotel_price"]) + 100 + "元"}`,
        packageContent: {
          hotelStay: "豪华客房3晚住宿房间面积为45平方米配备全景落地窗免费WiFi",
          parkTickets: "成人门票2张价值1600元",
          breakfast: "每日双人自助早餐提供中西式多种选择",
          shuttleService: "免费往返接送服务",
          welcomeGift: "入住时赠送精美欢迎礼盒包含当地特色小吃及饮品",
          imgUrl:
            "https://alipic.lanhuapp.com/FigmaSlicePNG8f71ac9d37707ce813011b40f69d183c.png?noCache=true",
        },
      };
    }
    rows[0]["Info"] = str;
  });
  return rows[0];
};
module.exports = {
  selectSpecialOffer,
  selectHotels,
  selectRecommend,
  selectHotelInfo,
};
