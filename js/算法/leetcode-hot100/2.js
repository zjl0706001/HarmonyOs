//字母异位分组
let groupAnagrams = function (strs) {
  let map = new Map();
  strs.forEach((item) => {
    let str = item.split("").sort().join("");
    if (map.has(str)) map.set(str, [...map.get(str), item]);
    else map.set(str, [item]);
  });
  return [...map.values()];
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
