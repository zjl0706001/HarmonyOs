const newarray = function (size) {
  this.data = new Array(size);
  this.length = 0;
  this.size = size;
  this.head = 0;
  this.tail = 0;
  this.unshift = function (value) {
    if (this.length >= this.size) {
      throw new Error("数组容量已达上限");
    }
    this.head = (this.head - 1 + this.size) % this.size;
    this.data[this.head] = value;
    this.length++;
  };
  this.push = function (value) {
    if (this.length >= this.size) {
      throw new Error("数组容量已达上限");
    }
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    this.length++;
  };
  this.shift = function () {
    if (this.length === 0) {
      throw new Error("数组为空");
    }
    const value = this.data[this.head];
    this.head = (this.head + 1) % this.size;
    this.length--;
    return value;
  };
  this.pop = function () {
    if (this.length === 0) {
      throw new Error("数组为空");
    }
    this.tail = (this.tail - 1 + this.size) % this.size;
    const value = this.data[this.tail];
    this.length--;
    return value;
  };
  this.toArray = function () {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this.data[(this.head + i) % this.size]);
    }
    return result;
  };
  this.print = function () {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this.data[(this.head + i) % this.size]);
    }
    return result;
  };
  this.findvalue = function (index) {
    return this.data[(this.head + index) % this.size];
  };
};
const arr1 = new newarray(300000);
const arr2 = new Array(300000);
let i = 0,
  newtime = new Date();
for (i = 0; i < 200000; i++) {
  arr1.unshift("6986582");
}
console.log(`循环数组   头部插入${i}组数据：` + (new Date() - newtime));
newtime = new Date();
for (i = 0; i < 200000; i++) arr2.unshift("6986582");
console.log(`js原生数组  头部插入${i}组数据：` + (new Date() - newtime));
