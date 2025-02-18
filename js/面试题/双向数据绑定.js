let obj = { _a: 1 };
//使用数据劫持
Object.defineProperties(obj, {
  a: {
    get() {
      return obj._a;
    },
    set(val) {
      obj._a = val;
      input.value = val;
    },
  },
});
input.addEventListener("input", (e) => {
  obj.age = e.target.value;
});
//使用代理
obj = new Proxy(obj, {
  get() {
    return obj._a;
  },
  set(val) {
    obj._a = val;
    input.value = val;
  },
});
