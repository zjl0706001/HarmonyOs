let obj = { _age: 123, _pa: 231 };
Object.defineProperties(obj, {
  age: {
    get() {
      return this._age;
    },
    set(val) {
      this._age = val;
    },
  },
  pa: {
    set() {
      obj._pa = 1232131;
    },
    get() {
      return this._pa;
    },
  },
});
obj.pa = 77;
console.log(obj.age);
console.log(obj.pa);
