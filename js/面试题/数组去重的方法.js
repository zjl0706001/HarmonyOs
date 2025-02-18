let arr = [1, 4, 4, 1];
let newarr1 = [...new Set(arr)];
console.log(newarr1);
let newarr2 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(newarr2);
let newarr3 = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) pre.push(cur);
  return pre;
}, []);
console.log(newarr3);
