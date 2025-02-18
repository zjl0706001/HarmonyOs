let a = 123;
let b = "dsfd";
let c = true;
let d = undefined;
let e = Symbol(123);
let f = BigInt(123);
let g = NaN;
let h = null;
let i = [1, 2, 3];
let j = { name: "zhangsan" };
let k = /\d+/;
let l = new Date();
let m = function () {};
let n = new Set();
let o = new Map();
let arr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];
// for (let item of arr) {
//   console.log(item, typeof item);
// }
// console.log(i instanceof Array);
// console.log(i instanceof Object);
// console.log(j instanceof Object);
for (let item of arr) {
  console.log(Object.prototype.toString.call(item).split(" ")[1].split("]")[0]);
}
// console.log(Array.isArray(i));
