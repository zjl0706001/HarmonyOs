const username = /^[a-zA-Z0-9_-]{6,16}$/;
const password = /^[a-zA-Z0-9_-]{8,16}$/;
const email =
  /^([a-zA-Z0-9]+[|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[|.]?)*[a-zA-Z0-9]+(.[a-zA-Z]{2,3})+$/;
const phoneNumber = /^1(3[0-9]|4[57]|5[0-35-9]|7[0678]|8[0-9])\d{8}$/;
const sex = /^([男|女])$/;
const birthday = /^\d{4}-\d{1,2}-\d{1,2}$/;
const time = /^\d{4}-\d{1,2}-\d{1,2}$/;
const text = /[a-zA-Z\u4e00-\u9fa5:,0-9{}]/g;
module.exports = {
  username,
  password,
  email,
  phoneNumber,
  sex,
  time,
  birthday,
  text,
};
