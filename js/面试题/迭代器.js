//迭代器
const iterator = {
  cur: 0,
  last: 5,
  next() {
    if (this.cur < this.last) {
      return { value: this.cur++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};
for (let i = 0; i < 6; i++) console.log(iterator.next());
//可迭代对象
const obj = {
  start: 0,
  end: 5,
  [Symbol.iterator]() {
    let cur = this.start;
    const last = this.end;
    return {
      next() {
        if (cur < last) {
          return { value: cur++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
for (const value of obj) {
  console.log(value);
}
