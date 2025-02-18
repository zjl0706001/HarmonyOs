//两数之和
let twoSum = function (nums, target) {
  let map = new Map();
  let ans = [];
  nums.forEach((x, i) => {
    if (map.has(target - x)) {
      ans = [map.get(target - x), i];
      return;
    }
    map.set(x, i);
  });
  return ans;
};
let nums = [3, 2, 4];
console.log(twoSum(nums, 6));
