let o = {
  0: 1,
  1: 2,
  2: 3,
  4: 7,
  a: 3,
  length: 6,
};
console.log(Array.from(o));
console.log(Array.from({ length: 10 }, () => Math.random() * 10));
console.log(new Array(10).fill(Math.random() * 10));
console.log(
  new Array(10).fill(new Array(10).fill(Math.floor(Math.random() * 100))),
);
console.log(
  Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => Math.random() * 100),
  ),
);
const myarray = function () {
  if (arguments.length === 1) {
    return Array.from({ length: arguments[0] }, () =>
      Math.floor(Math.random() * 100),
    );
  }
  const [current, ...rest] = arguments;
  return Array.from({ length: current }, () => myarray(...rest));
};
