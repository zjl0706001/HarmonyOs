const {
  getBrandsInfo,
  getBrands,
  getCityNumber,
  getSeries,
  getCarsBySeries,
  getSearch,
  getCars,
} = require("../model/cars");
const { verifytoken } = require("../utils/token");
async function brandsInfo(req, res) {
  await getBrandsInfo().then((data) => {
    res.send(data[0]);
  });
}
async function cityNumber(req, res) {
  await getCityNumber().then((data) => {
    res.send(data[0]);
  });
}
async function brands(req, res) {
  await getBrands().then((data) => {
    res.send(data[0]);
  });
}
async function series(req, res) {
  let { brand_id } = req.query;
  await getSeries(brand_id).then((data) => {
    console.log(data[0]);
    res.send(data[0]);
  });
}
async function carsBySeries(req, res) {
  let { series_id } = req.query;
  await getCarsBySeries(series_id).then((data) => {
    res.send(data[0]);
  });
}
async function search(req, res) {
  let { searchValue } = req.query;
  console.log(searchValue);
  await getSearch(searchValue).then((data) => {
    res.send(data[0]);
  });
}
async function cars(req, res) {
  let { token } = req.headers;
  if (!token)
    return res.json({
      message: "token为空",
    });
  await verifytoken(token).then((data) => {
    if (data.role !== "admin") {
      return res.json({
        message: "权限不足",
      });
    } else {
      getCars().then((data) => {
        res.send(data[0]);
      });
    }
  });
}
module.exports = {
  brandsInfo,
  cityNumber,
  brands,
  series,
  carsBySeries,
  search,
  cars,
};
