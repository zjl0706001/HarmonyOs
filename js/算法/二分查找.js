const check = function (arr, t) {
  let l = -1,
    r = arr.length,
    mid;
  while (l + 1 < r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] <= t) {
      l = mid;
    } else r = mid;
  }
  return r;
};
const findTheDistanceValue = function (arr1, arr2, d) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let ans = 0;
  for (let x in arr1) {
    if (
      check(arr2, arr1[x] - d) === check(arr2, arr1[x] + d) &&
      arr1[x] - d !== arr2[check(arr2, arr1[x]) - 1]
    ) {
      ans++;
    }
  }
  return ans;
};
