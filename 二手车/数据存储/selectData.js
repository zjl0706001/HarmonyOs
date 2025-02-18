const axios = require("axios");
const { keyparse } = require("./key");
const { insertBrand, insertCar, close, insertSeries } = require("./insert");
let setCar = async () => {
  for (let i = 1; i < 75; i++) {
    let page = 1;
    let found = true;
    let isinsertBrand = false;
    while (found) {
      await axios
        .post(
          "https://www.dongchedi.com/motor/pc/sh/sh_sku_list?aid=1839&app_name=auto_web_pc",
          { brand: i, limit: 80, page: page },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf8",
            },
          },
        )
        .then((response) => {
          response.data.data.has_more ? page++ : (found = false);
          let cars = response.data.data.search_sh_sku_info_list;
          if (cars && !isinsertBrand) {
            insertBrand([cars[0].brand_id, cars[0].brand_name]);
            isinsertBrand = true;
          }
          if (cars) {
            cars.forEach((item) => {
              insertSeries([item.series_id, item.series_name, item.brand_id]);
              insertCar([
                keyparse(item.authentication_method),
                keyparse(item.brand_id),
                keyparse(item.series_id),
                keyparse(item.car_id),
                keyparse(item.car_name),
                keyparse(item.car_source_city_name),
                keyparse(item.car_year),
                keyparse(item.image),
                keyparse(item.official_price),
                keyparse(item.sh_price),
                keyparse(item.sub_title),
                keyparse(item.title),
              ]);
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  close();
};
setCar();
