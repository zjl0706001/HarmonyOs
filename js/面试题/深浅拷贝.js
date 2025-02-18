let cloneObj = (obj) => {
  let type = Object.prototype.toString.call(obj).slice(8, -1);
  let newObj;
  switch (type) {
    case "Array":
      newObj = [];
      break;
    case "Object":
      newObj = {};
      break;
    case "Set":
      newObj = new Set();
      obj.forEach((value) => {
        newObj.add(cloneObj(value));
      });
      return newObj;
    case "Map":
      newObj = new Map();
      obj.forEach((value, key) => {
        newObj.set(key, cloneObj(value));
      });
      return newObj;
    default:
      return obj;
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = cloneObj(obj[key]);
    }
  }
  return newObj;
};
let obj = {
  a: 123,
  b: NaN,
  c: Infinity,
  d: BigInt(123231),
  e: "fsfs",
  f: true,
  g: undefined,
  h: Symbol(),
  i: null,
  j: [1, 2, 3, 4],
  k: { a: 1, b: 2 },
  l: new Set([1, 2, 3, [23, 4]]),
  m: new Map(),
  n: /d+/,
  o: new Date(),
  p: function () {
    console.log(1234);
  },
};
obj.m.set(1, 5);
let obj4 = cloneObj(obj);
console.log(obj4);
