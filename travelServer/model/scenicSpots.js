const db = require("../db/travelDatabase");
const { zhipu } = require("../BigModel/zhipu");
const { text, password } = require("../utils/regexp");
async function selectTopList() {
  const [rows] = await db.execute(
    "SELECT * FROM scenicspots ORDER BY scenic_spot_rating DESC LIMIT 10",
  );
  return rows;
}
async function selectWantToList() {
  const [rows] = await db.execute(
    "SELECT * FROM scenicspots WHERE scenic_spot_rating = '5.0' AND scenic_spot_sales > 100 ORDER BY RAND() LIMIT 10",
  );
  return rows;
}
async function selectPlayfulSelection() {
  const [rows] = await db.execute(
    "SELECT * FROM scenicspots WHERE scenic_spot_rating > '4.5' AND scenic_spot_sales > 100 ORDER BY RAND() LIMIT 10",
  );
  return rows;
}
const selectScenicSpots = async function (_) {
  let keyword2 = _["keyword2"] ? _["keyword2"] : "%";
  const keyword2sql = !isNaN(Number(keyword2))
    ? "scenicSpots.scenic_spot_price < ?"
    : "scenicSpots.scenic_spot_star_level LIKE ?";
  const query = `SELECT * FROM scenicspots WHERE
                         ${keyword2sql} AND
                         scenic_spot_name LIKE ? 
                         AND (scenicspots.scenic_spot_province LIKE ? OR scenic_spot_city LIKE ?)
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
async function selectScenicSpotsInfo(id) {
  const [rows] = await db.execute(
    "SELECT * FROM scenicspots WHERE scenic_spot_id = ?",
    [id],
  );
  await zhipu(rows[0]["scenic_spot_name"]).then((res) => {
    let str = res.match(text).join("");
    str =
      str
        .replace(/(\w+)(:)/g, '"$1"$2')
        .replace(/(:\s*)([^,{}\[]+)(?=\s*[,}\]])/g, '$1"$2"') + "}";
    try {
      str = JSON.parse(str);
      str.price = Math.floor(rows[0]["scenic_spot_price"]) + 100 + "元";
    } catch (error) {
      str = {
        title: rows[0]["scenic_spot_name"] + "尊享度假套餐",
        price: Math.floor(rows[0]["scenic_spot_price"]) + 100 + "元",
        packageContent: {
          hotelStay:
            "豪华景观房2晚住宿房间面积不低于40平方米含独立阳台俯瞰园区美景",
          parkTickets: "成人门票2张含园区内所有表演及互动项目",
          breakfast: "每日双人自助早餐品种丰富包含中西式各类美食",
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
}
module.exports = {
  selectTopList,
  selectWantToList,
  selectPlayfulSelection,
  selectScenicSpots,
  selectScenicSpotsInfo,
};
