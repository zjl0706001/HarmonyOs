//最拉长连续序列
const longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let ans = 0;
  const st = new Set(nums);
  nums.forEach((item) => {
    if (!st.has(item - 1)) {
      let k = item;
      while (st.has(++k));
      ans = Math.max(ans, k - item);
    }
  });
  return ans;
};
nums = [1, 2, 3, 4, 6, 7];
console.log(longestConsecutive(nums));
