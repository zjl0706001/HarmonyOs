import axios from "axios";
const getData = function (id) {
  return axios.get(
    `/api?rule_id=${id}&key=TURJeU1ESXhOVGMzTWpreU5UUT11OHNSU05UZzI%3D`,
  );
};
export default getData;
