const check = function (arr, t) {
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    if (ans[t - arr[i]] !== undefined) {
      return [ans[t - arr[i]], i];
    }
    ans[arr[i]] = i;
  }
};
console.log(check([3, 2, 9, 9, 4, 5, 5, 4], 6));
