// const bgmove = (n) => {
//   return () => n + 10;
// };
// const bgMove = bgmove(0);
// console.log(bgMove());
// console.log(bgMove());
// const createCounter = function (n) {
//   return () => (n += 10);
// };
// const fn = createCounter(0);
// console.log(fn());
// console.log(fn());
// const createCounter1 = function (n) {
//   return () => n++;
// };
// const f1 = createCounter1(0);
// console.log(f1());
// console.log(f1());
// const bgmove = (n) => {
//   console.log(n);
//   return () => {
//     n += 10;
//     console.log(n);
//   };
// };
// const bgMove = bgmove(0);
// console.log(bgMove());
// console.log(bgMove());
// console.log(bgMove());
// console.log(bgMove());
// let arr = [1, 2, 11, 3];
// console.log(arr);
// console.log(Math.max.apply(null, arr));
let arr = [
  [1, 2, 3],
  [3, 3, 4],
];
arr.forEach((item) => {
  item[0] = 0;
});
console.log(arr);
