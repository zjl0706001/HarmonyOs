function f1() {
  if (!f1.obj) f1.obj = { na: 123 };
  return f1.obj;
}
console.log(new f1() === new f1());
class f2 {
  static con() {
    if (f2.obj) f2.obj = {};
    return f2.obj;
  }
}
console.log(f2.con() === f2.con());
class f3 {
  constructor() {
    if (!f3.myclass) f3.myclass = {};
    return f3.myclass;
  }
}
console.log(new f3() === new f3());
