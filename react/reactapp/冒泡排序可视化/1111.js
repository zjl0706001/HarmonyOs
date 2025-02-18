function p1() {}
p1.prototype.say = function () {
  console.log(111);
};
function p2() {}
p2.prototype = p1.prototype;
let pp = new p2();
pp.say();
