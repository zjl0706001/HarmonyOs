//移动零

const moveZeroes = (nums) => {
  let l = nums.indexOf(0),
    r = nums.indexOf(0),
    len = nums.length - 1;
  while (l < len && r < len) {
    while (l < len && !nums[l]) l++;
    while (r < len && nums[r]) r++;
    console.log([nums[l], nums[r]]);
    [nums[l], nums[r]] = [nums[r], nums[l]];
  }
  return nums;
};
let arr = [4, 1, 0, 3, 12];
console.log(moveZeroes(arr));
