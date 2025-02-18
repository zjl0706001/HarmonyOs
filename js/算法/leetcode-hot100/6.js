//三数之和
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1,
      r = nums.length - 1;
    let tar = -nums[i];
    console.log([i, l, r]);
    while (l < r) {
      console.log([i, l, r], nums[i], nums[l], nums[r]);
      if (nums[l] + nums[r] === tar) {
        ans.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[++l]);
        while (nums[r] === nums[--r]);
      } else if (nums[l] + nums[r] < tar) while (nums[l] === nums[++l]);
      else while (nums[r] === nums[--r]);
    }
  }
  return ans;
};
let arr = [0, 0, 0];
console.log(threeSum(arr));
