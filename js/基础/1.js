let number = 10;
let obj = {
  _age: number,
};
Object.defineProperty(obj, "age", {
  get() {
    return this._age;
  },
  set(val) {
    number = val;
    this._age = val;
  },
});
setInterval(() => console.log(obj.age), 1000);
