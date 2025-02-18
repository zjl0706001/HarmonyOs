import axios from "axios";
export const getIndexData = async () => {
  const res = await axios.get("/api/home/getIndexData?sign=&uid=");
  return res.data.data["category_list"];
};
export const getGoodBookList = async () => {
  const res = await axios.get(`/api/recommend/goodBookList?sign=&uid=`);
  return res.data.data["single_list"];
};
export const getNecessaryGoodsList = async () => {
  const res = await axios.get(
    "/api/goods/getNecessaryGoodsList?perpage=10&goods_type=1&goods_position=0&sign=&uid=",
  );
  return res.data.data.list;
};
export const getHomeLeaderboard = async () => {
  const res = await axios.get("/api/leaderboard/homeLeaderboard?sign=&uid=");
  return res.data.data.list;
};
export const getTalentGoodsList = async (id) => {
  const res = await axios.get(
    `/api/goods/getTalentGoodsList?perpage=10&goods_type=1&goods_position=${id}&tag_id=4346&sign=131083473%7Chb-api%7C1739087954%7C1103A9E9A772DF4F3DEF95A05DCEA2C4&uid=131083473`,
  );
  return res.data.data.list;
};
export const getTalentGoodsListInfo = async (id1, id2) => {
  let url;
  if (id2 < 1000)
    url = `/api/goods/getTalentGoodsList?perpage=10&goods_type=1&goods_position=${id1}&attr_val_id=${id2}&sign=&uid=`;
  else
    url = `/api/goods/getTalentGoodsList?perpage=10&goods_type=1&goods_position=${id1}&tag_id=${id2}&sign=&uid=`;
  const res = await axios.get(url);
  return res.data.data.list;
};
export const getGoodsDetail = async (id) => {
  const res = await axios.get(
    `/api/goods/getGoodsDetail?goods_id=${id}&sign=131083473%7Chb-api%7C1739009918%7CFBB1321277A7BB44BCE12C6AE448076C&uid=131083473`,
  );
  return res.data.data;
};
//热榜
export const getHotList = async () => {
  const res = await axios.get("/api/category/getList?sign=&uid=");
  return res.data.data;
};
export const getHotListInfo = async (classIndex, ageIndex, mouthIndex) => {
  const res = await axios.get(
    `/api/leaderboard/getList?category_id=${ageIndex}&attr_val_id=${classIndex}&list_type=${mouthIndex}&page=1&perpage=100&sign=&uid=`,
  );
  return res.data.data.list;
};
//搜索
export const getSearchList = async (key, type = 1) => {
  const res = await axios.get(
    `/api/search/search?type=${type}&uid=&page=1&perpage=10&keyword=${key}&sign=`,
  );
  return res.data.data.list;
};
//听故事
export const getAudioList = async (page, language) => {
  const res = await axios.get(
    `/api/goodsAudio/getList?page=${page}&language=${language}&perpage=10&sign=131083473%7Chb-api%7C1739014607%7CA868151D25D7361F0FC5D5F53F3B2927&uid=131083473`,
  );
  return res.data.data.list;
};
//获取评论
export const getCommentList = async (id) => {
  const res = await axios.get(
    `/api/comment/getList?goods_id=${id}&perpage=10&sign=131083473%7Chb-api%7C1739091341%7CFBE57CCAFF0C5F89FE55AA480F19165E&uid=131083473`,
  );
  return res.data.data.list;
};
// 评论
export const createComment = async (message, id) => {
  await axios.post("/api/comment/createComment", {
    bb_birthday: "",
    goods_id: id,
    message: message,
    msg_type: 1,
    sign: "131083473|hb-api|1739103138|325E344EBAD68C3FA72813BC72274AEA",
    uid: "131083473",
    user_type: "1",
    username: "妈妈网_rbmsgo",
  });
};
//猜你喜欢
export const getLikeList = async (type, page) => {
  const res = await axios.get(
    `/api/goods/getRecommendGoodsList?stage=11&goods_type=1&goods_position=${page}&goods_own_type=${type}&attr_age_val_ids=672,673&perpage=10&sign=131083473%7Chb-api%7C1739092576%7C58C5155966D22BF05CFF56DFD5E515AE&uid=131083473`,
  );
  return res.data.data.list;
};
//获取用户信息
export const getUserInfo = async () => {
  const res = await axios.get(
    `/api/user/getUserInfo?sign=131083473%7Chb-api%7C1739105652%7CD867E71C2280FE62A380459EE7A1B94B&uid=131083473`,
    { withCredentials: true },
  );
  return res.data.data;
};
