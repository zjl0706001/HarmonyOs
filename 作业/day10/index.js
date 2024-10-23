let box5_img = [
  document.getElementById("img55"),
  document.getElementById("img56"),
  document.getElementById("img57"),
  document.getElementById("img58"),
];
box5_img[0].onclick = function () {
  box5_img[0].src = `./img/image copy 12.png`;
  box5_img[1].src = `./img/image copy 7.png`;
  box5_img[2].src = `./img/image copy 8.png`;
  box5_img[3].src = `./img/image copy 9.png`;
  document.getElementById("img5bg").src = `./img/image copy 41.png`;
  document.getElementById("img5bg").style.top = "12%";
  console.log(1);
};
box5_img[1].onclick = function () {
  box5_img[0].src = `./img/image copy 6.png`;
  box5_img[1].src = `./img/image copy 13.png`;
  box5_img[2].src = `./img/image copy 8.png`;
  box5_img[3].src = `./img/image copy 9.png`;
  document.getElementById("img5bg").src = `./img/image copy 42.png`;
  document.getElementById("img5bg").style.top = "16.42%";
  console.log(1);
};
box5_img[2].onclick = function () {
  box5_img[0].src = `./img/image copy 6.png`;
  box5_img[1].src = `./img/image copy 7.png`;
  box5_img[2].src = `./img/image copy 14.png`;
  box5_img[3].src = `./img/image copy 9.png`;
  document.getElementById("img5bg").src = `./img/image copy 43.png`;
  document.getElementById("img5bg").style.top = "17.2%";
  console.log(1);
};
box5_img[3].onclick = function () {
  box5_img[0].src = `./img/image copy 6.png`;
  box5_img[1].src = `./img/image copy 7.png`;
  box5_img[2].src = `./img/image copy 8.png`;
  box5_img[3].src = `./img/image copy 15.png`;
  document.getElementById("img5bg").src = `./img/image copy 44.png`;
  document.getElementById("img5bg").style.top = "13.6%";
  console.log(1);
};
// 轮播图
var left = document.getElementById("left1");
var right = document.getElementById("right1");
var lunbo = document.getElementById("lunbotu");
var kk = 0;
left.onclick = function () {
  lunbo.src = `./img/lunbo${
    8 - (Math.abs(kk) % 8) == 8
      ? 7 - (Math.abs(kk--) % 8)
      : 8 - (Math.abs(kk--) % 8)
  }.png`;
};
right.onclick = function () {
  lunbo.src = `./img/lunbo${++kk % 8 == 0 ? 1 : kk % 8}.png`;
};
var kk = 0;

// left.onclick = function () {
//   kk = (kk - 1 + 7) % 7;
//   if (kk === 0) {
//     kk = 7;
//   }
//   lunbo.src = `./img/lunbo${kk}.png`;
// };

// right.onclick = function () {
//   kk = (kk + 1) % 7;
//   if (kk === 0) {
//     kk = 7;
//   }
//   lunbo.src = `./img/lunbo${kk}.png`;
// };
function startLoop() {
  setInterval(() => {
    // kk = (kk + 1) % 7;
    // if (kk === 0) {
    //   kk = 7;
    // }
    // lunbo.src = `./img/lunbo${kk}.png`;
    right.click();
  }, 2000);
}

startLoop();
