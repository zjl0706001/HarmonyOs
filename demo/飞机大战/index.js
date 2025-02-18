let fraction = 0;
// 难度系数
let speed = 0;
const app = document.querySelector(".app");
let bg = document.getElementById("bg");
const startgame = document.getElementById("startgame");
const hero = document.getElementById("hero");
let bgtimer, apptimer, checktimer;
startgame.onclick = () => {
  const bgMove = bgmove(0);
  bgtimer = setInterval(bgMove, 10);
  setInterval(() => {
    speed += 1;
  }, 6000);
  startgame.style.display = "none";
  heromove();
  apptimer = setInterval(() => {
    makeEnemy();
    makeBullet();
  }, 180);
  checktimer = setInterval(check, 10);
};
// 背景滚动
const bgmove = (n) => {
  return () => {
    n -= 2;
    bg.style.backgroundPositionY = n + "px";
  };
};
//控制飞机移动
const heroMove = (e) => {
  const maxLeft = 1627;
  const offsetX = e.clientX - 50;
  hero.style.left = offsetX > maxLeft ? maxLeft + "px" : offsetX + "px";
  hero.style.top = e.clientY - 30 + "px";
};
const heromove = () => {
  document.addEventListener("mousemove", heroMove);
};

//创建子弹
const makeBullet = () => {
  const bullet = document.createElement("div");
  bullet.className = "bullet";
  bullet.style.left = hero.offsetLeft + 50 - 6 + "px";
  bullet.style.top = hero.offsetTop + 1 + "px";
  app.appendChild(bullet);
  bullet.timer = setInterval(() => {
    const bt = bullet.offsetTop;
    bullet.style.top = bt - 3 + "px";
    if (bt <= 0) {
      bullet.remove();
    }
  }, 10);
};
//随机创建敌人
const makeEnemy = () => {
  const enemy = document.createElement("img");
  enemy.src = `./img/e${Math.floor(Math.random() * 4)}.png`;
  enemy.className = "enemy";
  enemy.style.left = 100 + Math.random() * 1500 + "px";
  enemy.style.top = -100 + "px";
  app.appendChild(enemy);
  const sudu = Math.random() * 10 > speed ? 10 : 1;
  enemy.timer = setInterval(() => {
    const et = enemy.offsetTop;
    const distance = Math.sqrt(
      Math.pow(hero.offsetTop - enemy.offsetTop, 2) +
        Math.pow(hero.offsetLeft - enemy.offsetLeft, 2),
    );
    enemy.style.top = et + 2 + "px";
    if (et >= 1000) {
      enemy.remove();
    }
    if (distance < 70 && enemy.offsetTop !== 0 && enemy.offsetLeft !== 0) {
      // console.log("distance:" + distance);
      // console.log("herotop:" + hero.offsetTop);
      // console.log("heroleft:" + hero.offsetLeft);
      // console.log("enemytop:" + enemy.offsetTop);
      // console.log("enemyleft:" + enemy.offsetLeft);
      alert("Game Over");
      gameover();
    }
  }, sudu);
};
// 创建敌方子弹
const makeBullet2 = (item) => {
  const bullet2 = document.createElement("div");
  bullet2.className = "bullet";
  bullet2.style.left = item.offsetLeft + 50 - 6 + "px";
  bullet2.style.top = item.offsetTop + 1 + "px";
  app.appendChild(bullet2);
  bullet2.timer = setInterval(() => {
    const bt = bullet2.offsetTop;
    bullet2.style.top = bt + 3 + "px";
    if (bt >= 100) {
    }
  }, 10);
};
// 碰撞检测
const check = () => {
  const bullets = document.querySelectorAll(".bullet");
  const enemies = document.querySelectorAll(".enemy");
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < enemies.length; j++) {
      const bullet = bullets[i];
      const enemy = enemies[j];
      const distance = Math.sqrt(
        Math.pow(bullet.offsetTop + 5 - enemy.offsetTop - 50, 2) +
          Math.pow(bullet.offsetLeft + 5 - enemy.offsetLeft - 50, 2),
      );
      if (distance < 45) {
        enemy.remove();
        bullet.remove();
        fraction += 1;
        fract();
        return;
      }
    }
  }
};
// 计算分数
const fract = () => {
  const score = document.getElementById("fraction");
  score.innerText = fraction;
};
//游戏结束
const gameover = () => {
  document.querySelectorAll(".bullet, .enemy").forEach((item) => {
    clearInterval(item.timer);
    item.remove();
  });
  clearInterval(apptimer);
  clearInterval(bgtimer);
  clearInterval(checktimer);
  hero.style.top = "80%";
  hero.style.left = "45%";
  fraction = 0;
  fract();
  speed = 0;
  startgame.style.display = "block";
  document.removeEventListener("mousemove", heroMove);
};
document.onmousedown = (e) => e.preventDefault();
document.oncontextmenu = (e) => e.preventDefault();
