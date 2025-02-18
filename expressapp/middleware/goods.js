const {
  findGoodsList,
  deleteGoods,
  installGoods,
  changeGoods,
} = require("../model/users");
async function getgoodslist(req, res) {
  let goodslist = await findGoodsList();
  return res.json(goodslist);
}
async function deletegoods(req, res) {
  let id = req.params.id;
  let result = await deleteGoods(id);
  return res.json(result);
}
async function addgoods(req, res) {
  try {
    const { title, category, price, img_big_logo } = req.body;
    if (!title || !category || !price || !img_big_logo) {
      return res.status(400).json({ error: "缺少必要的字段" });
    }
    await installGoods({ title, category, price, img_big_logo });
    res.status(200).json({ message: "商品添加成功" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function altergoods(req, res) {
  const { goods_id, title, category, price, img_big_logo } = req.body;
  if (!goods_id || !title || !category || !price || !img_big_logo) {
    return res.status(400).json({ error: "缺少必要的字段" });
  }
  await changeGoods({ goods_id, title, category, price, img_big_logo });
  return res.json({ message: "商品信息修改成功" });
}
module.exports = {
  getgoodslist,
  deletegoods,
  addgoods,
  altergoods,
};
