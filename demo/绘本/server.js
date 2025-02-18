const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", async (req, res) => {
  const getdata = async () => {
    return await fetch(
      "https://van.mama.cn/hb/api/category/getFcList?position=1&sign=&uid=",
    ).then((response) => response.json());
  };
  res.send(await getdata().then((data) => data.data.list));
});
app.get("/goodbooks", async (req, res) => {
  const getdata = async () => {
    return await fetch(
      "https://van.mama.cn/hb/api/recommend/goodBookList?sign=&uid=",
    ).then((response) => response.json());
  };
  res.send(await getdata().then((data) => data.data.single_list));
});
app.get("/darenshudan", async (req, res) => {
  const getdata = async () => {
    return await fetch(
      "https://van.mama.cn/hb/api/goods/getNecessaryGoodsList?perpage=10&goods_type=1&goods_position=0&sign=&uid=",
    ).then((response) => response.json());
  };
  res.send(await getdata().then((data) => data.data.list));
});
app.get("/jingxuan/:page", async (req, res) => {
  const page = req.params.page;
  const getdata = async () => {
    return await fetch(
      `https://van.mama.cn/hb/api/goods/getTalentGoodsList?perpage=10&goods_type=1&goods_position=${page}&from=index&sign=&uid=`,
    ).then((response) => response.json());
  };
  res.send(await getdata().then((data) => data.data.list));
});
app.get("/info/:id", async (req, res) => {
  const getdata = async () => {
    return await fetch(
      `https://van.mama.cn/hb/api/goods/getGoodsDetail?goods_id=${req.params.id}`,
    ).then((response) => response.json());
  };
  res.send(await getdata().then((data) => data.data));
});
app.listen(3000, () => {
  console.log("server is run http://localhost:3000");
});
