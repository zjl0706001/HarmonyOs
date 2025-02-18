let fn = (a, b, c, d) => {
  return a + b + c + d;
};
let f = (
  (a) => (b) => (c) => (d) =>
    a + b + c + d
)(1)(2)(3);

console.log(f(4));
function curry(fn) {
  let cache = {};
  return function curried(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
function add() {
  return [...arguments].reduce((a, b) => a + b, 0);
}
let curriedAdd = curry(add);
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1, 24, 2));
