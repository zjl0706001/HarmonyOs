import axios from "axios";
import Cookies from "js-cookie";

export const getBrandsInfo = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/cars/brandsInfo",
    );
    return response.data;
  } catch (error) {
    console.error("获取品牌数据失败:", error);
    return [];
  }
};
export const getTengfa = function () {
  return axios.get("http://localhost:3000/api/cars/brands");
};
export const getSeries = function (brand) {
  return axios.get("http://localhost:3000/api/cars/series?brand_id=" + brand);
};
export const getCarsBySeries = function (series) {
  return axios.get(
    "http://localhost:3000/api/cars/carsBySeries?series_id=" + series,
  );
};
export const getSearch = function (search) {
  return axios.get(
    "http://localhost:3000/api/cars/search?searchValue=" + search,
  );
};
export const getCars = function (id) {
  return axios.get("http://localhost:3000/api/cars/cars", {
    headers: {
      token: Cookies.get("Token"),
    },
  });
};
