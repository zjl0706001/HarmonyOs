let check = (arr, t) => {
  let l = -1,
    r = arr.length,
    mid;
  while (l + 1 < r) {
    mid = (l + r) >> 1;
    if (arr[mid] === t) return 1;
    else if (arr[mid] < t) l = mid;
    else r = mid;
  }
  return 0;
};
const findTargetIn2DPlants = function (plants, target) {
  plants.forEach((item) => {
    if (check(item, target)) return check(item, target);
  });

  return 0;
};
let arr = [
  [2, 3, 6, 8],
  [4, 5, 8, 9],
  [5, 9, 10, 12],
];
console.log(check(arr[0], 8));
console.log(findTargetIn2DPlants(arr, 8));
