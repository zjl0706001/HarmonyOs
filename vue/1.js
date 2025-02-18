const axios = require("axios");

let id = 50083380;
const maxId = 59983390;
const appid = [];

async function fetchData(id) {
  const res = await axios.get(
    `http://gfeljm.tianqiapi.com/api?appid=${id}&appsecret=N6Ik7EE0&version=v63`,
  );
  if (res.data.cityid) {
    appid.push(id);
    console.log(`找到 appid: ${id}`);
  } else {
    console.log(`未找到 appid: ${id}`);
  }
}

async function main() {
  while (id < maxId) {
    await fetchData(id);
    id++;
  }
  console.log("所有请求完成，找到的 appid:", appid);
}

main();
