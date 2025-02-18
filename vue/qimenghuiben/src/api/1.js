import axios from "axios";

const getUserInfo = async () => {
  const res = await axios.get(
    `/api/user/getUserInfo?sign=131083473%7Chb-api%7C1739105652%7CD867E71C2280FE62A380459EE7A1B94B&uid=131083473`,
    {
      headers: {
        Cookie:
          "sign=131083473|hb-api|1739106423|8E99835612E9D45125A28071130EC5E9",
      },
    },
  );
  return res.data.data;
};
getUserInfo().then((res) => {
  console.log(res);
});
