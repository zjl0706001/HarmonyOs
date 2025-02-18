//代理数组
let myarray = [1, 6, 3];
myarray = new Proxy(myarray, {
  get(target, p, receiver) {
    if (target[p]) return target[p];
    return undefined;
  },
  set(target, p, newValue) {
    target.push(newValue);
  },
});
console.log(myarray[11]);
myarray[37] = 3343;
console.log(myarray);
//代理对象
let obj = { name: 123, age: 424 };
obj = new Proxy(obj, {
  set(obj, key, val) {
    obj[key] = val * 2;
  },
  get(obj, key) {
    return obj[key] * 3;
  },
  has(obj, key) {
    return obj[key];
  },
});
console.log(obj.name);
obj.name++;
console.log(obj.name);
console.log("age" in obj);
//代理函数
let f = function () {
  return [...arguments].reduce((a, b) => a + b, 0);
};
f = new Proxy(f, {
  apply(f, thisArg, argArray) {
    console.log(f, thisArg, argArray);
  },
});
f.bind({}, 1, 2)();
f.call({ a: 1 }, 1, 2, 3);
f.apply({ aa: 22 }, [1, 2, 3]);
//代理构造函数
let fn = function (age, k) {
  this.age = age;
  this.k = k;
};
fn = new Proxy(fn, {
  construct(target, argArray, newTarget) {
    console.log(target, argArray, newTarget);
    return new target(...argArray);
  },
});
console.log(new fn("skjd", 21));
