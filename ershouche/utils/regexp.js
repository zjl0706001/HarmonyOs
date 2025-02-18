const username = /^[a-zA-Z0-9_-]{4,16}$/;
const password = /^[a-zA-Z0-9_-]{8,16}$/;
const email =
  /^([a-zA-Z0-9]+[|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[|.]?)*[a-zA-Z0-9]+(.[a-zA-Z]{2,3})+$/;
const phone_number = /^1(3[0-9]|4[57]|5[0-35-9]|7[0678]|8[0-9])\d{8}$/;
const sex = /^([男|女])$/;
const age = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;

module.exports = { username, password, email, phone_number, sex, age };
