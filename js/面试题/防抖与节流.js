//防抖
const fn = () => {
  console.log();
};
const f1 = (fn, time) => {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, time);
  };
};
let f11 = f1(fn, 1000);
setInterval(f11, 1000);
//节流
const f2 = (fn, time) => {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true;
    }, time);
  };
};
let f22 = f2(fn, 1000);
setInterval(f22, 500);
