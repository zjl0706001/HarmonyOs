// 背景滚动
var dContainer = document.getElementById("container");
var dis = 0; //bg滚动的量
var speed = 5; //滚动的速度
function bgMove() {
  dis += speed;
  dis = dis > sh ? 0 : dis;
  dContainer.style.backgroundPosition = `0 ${dis}px`;
}
