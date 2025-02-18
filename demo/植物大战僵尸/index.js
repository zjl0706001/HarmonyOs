// 标签
const cardsNode = document.querySelector(".cards");
const gamebody = document.querySelector(".gamebody");
const caoping = document.querySelector(".caoping");
const xiaotuiches = document.querySelector(".xiaotuiches");
// 数据
const plantcards = [
  "cherrybomb",
  "chomper",
  "gatlingpea",
  "peashooter",
  "repeater",
  "sunflower",
  "wallnut",
];
const caopingtop = [-10, 148, 306, 450, 622];
// 小推车类
class Xiaotuiche {
  constructor(left, top, GameController) {
    this.left = left;
    this.top = top;
    this.gameController = GameController;
    this.createXiaotuiches();
    this.checkMove();
  }
  createXiaotuiches() {
    this.img = document.createElement("img");
    this.img.src = "./images/car.png";
    this.img.style.position = "absolute";
    this.img.style.left = this.left + "px";
    this.img.style.top = this.top + "px";
    xiaotuiches.appendChild(this.img);
  }
  move() {
    this.timer = setInterval(() => {
      this.left += 0.05;
      this.img.style.left = `${this.left}px`;
      if (this.left > 1400) {
        clearInterval(this.timer);
        this.img.remove();
      }
    }, 20);
  }
  checkMove() {
    setInterval(() => {
      if (this.gameController.zombielist) {
        this.gameController.zombielist.forEach((item) => {
          if (
            this.left < item.left + 100 &&
            this.left > item.left - 100 &&
            this.top < item.top + 100 &&
            this.top > item.top - 100
          ) {
            this.move();
            item.img.remove();
          }
        });
      }
    });
  }
}
// 僵尸类
class Zombie {
  constructor(left, top, GameController) {
    this.left = left;
    this.top = top;
    this.gameController = GameController;
    this.k = 0;
    this.health = 10;
    this.createImg();
    this.move();
  }
  createImg() {
    this.img = document.createElement("img");
    this.img.src = "./images/zombies/run/run_0.png";
    this.img.style.position = "absolute";
    this.img.style.left = `${this.left}px`;
    this.img.style.top = `${this.top}px`;
    this.img.classList.add("jiangshi");
    gamebody.appendChild(this.img);
  }
  move() {
    this.timer = setInterval(() => {
      this.left -= 1.2;
      this.img.style.left = `${this.left}px`;
      this.img.src = `./images/zombies/run/run_${this.k++ % 31}.png`;
      if (this.left < 50) {
        clearInterval(this.timer);
        this.img.remove();
        console.log("游戏结束");
      }
    }, 40);
  }
}
//植物类
class Plant {
  constructor(name, left, top, src, srcnum, health, gameController) {
    this.name = name;
    this.left = left;
    this.top = top;
    this.src = src;
    this.srcnum = srcnum;
    this.k = 1;
    this.health = health;
    this.gameController = gameController;
    this.createImg();
  }
  createImg() {
    this.img = document.createElement("img");
    this.img.src = `./images/plants/${this.name}/${this.src}_0.png`;
    this.img.style.position = "absolute";
    this.img.style.left = `${this.left}px`;
    this.img.style.top = `${this.top}px`;
    caoping.appendChild(this.img);
    setInterval(() => {
      this.img.src = `./images/plants/${this.name}/${this.src}_${this.k++ % (this.srcnum + 1)}.png`;
    }, 100);
  }
}
// 单发豌豆类
class Peashooter extends Plant {
  constructor(name, left, top, src, srcnum, health, gameController) {
    super(name, left, top, src, srcnum, health, gameController);
    this.attacking = false;
  }
  attack = () => {
    this.timer = setInterval(() => {
      const bullet = document.createElement("img");
      bullet.src = "./images/bullet.png";
      bullet.style.position = "absolute";
      bullet.style.left = `${this.left + 20}px`;
      bullet.style.top = `${this.top}px`;
      caoping.appendChild(bullet);
      this.gameController.gameController.bulletlist.push(bullet);
      bullet.timer = setInterval(() => {
        bullet.style.left = `${bullet.offsetLeft + 5}px`;
        if (bullet.offsetLeft >= 1450) {
          bullet.remove();
          clearInterval(bullet.timer);
        }
      }, 10);
    }, 1200);
  };
}
class GatlingPea extends Plant {
  constructor(name, left, top, src, srcnum, health, gameController) {
    super(name, left, top, src, srcnum, health, gameController);
  }
  attack() {
    this.timer = setInterval(() => {
      const bullet = document.createElement("img");
      bullet.src = "./images/bullet.png";
      bullet.style.position = "absolute";
      bullet.style.left = `${this.left + 20}px`;
      bullet.style.top = `${this.top + 10}px`;
      caoping.appendChild(bullet);
      this.gameController.gameController.bulletlist.push(bullet);
      bullet.timer = setInterval(() => {
        bullet.style.left = `${bullet.offsetLeft + 5}px`;
        if (bullet.offsetLeft >= 1450) {
          bullet.remove();
          clearInterval(bullet.timer);
        }
      }, 10);
    }, 300);
  }
}
class Repeater extends Plant {
  constructor(name, left, top, src, srcnum, health, gameController) {
    super(name, left, top, src, srcnum, health, gameController);
  }
  attack() {
    this.timer = setInterval(() => {
      const bullet = document.createElement("img");
      bullet.src = "./images/bullet.png";
      bullet.style.position = "absolute";
      bullet.style.left = `${this.left + 20}px`;
      bullet.style.top = `${this.top}px`;
      caoping.appendChild(bullet);
      this.gameController.gameController.bulletlist.push(bullet);
      bullet.timer = setInterval(() => {
        bullet.style.left = `${bullet.offsetLeft + 5}px`;
        if (bullet.offsetLeft >= 1450) {
          bullet.remove();
          clearInterval(bullet.timer);
        }
      }, 10);
    }, 600);
  }
}
// 植物卡片类
class Plantscard {
  constructor(left, top, url, GameController) {
    this.left = left;
    this.top = top;
    this.url = url;
    this.gameController = GameController;
    this.createPlantscards();
  }
  createPlantscards() {
    this.img = document.createElement("img");
    this.img.src = "./images/cards/plants/" + this.url + ".png";
    this.img.style.position = "absolute";
    this.img.style.left = this.left + "px";
    this.img.style.top = this.top + "px";
    cardsNode.appendChild(this.img);
    this.img.addEventListener("mousedown", (event) =>
      this.cardSelect(event, name, this.img),
    );
    this.gameController.plantscardlist.push(this);
  }
  cardSelect(event, name, plantCard) {
    event.preventDefault();
    plantCard.style.filter = "brightness(0.8)";
    const moveplant = plantCard.cloneNode(true);
    moveplant.style.position = "absolute";
    moveplant.style.zIndex = "999";
    moveplant.style.left = `${plantCard.offsetLeft}px`;
    moveplant.style.top = `${plantCard.offsetTop}px`;
    cardsNode.appendChild(moveplant);
    const offsetX = event.clientX - plantCard.offsetLeft;
    const offsetY = event.clientY - plantCard.offsetTop;
    const moveImage = (event) => {
      moveplant.style.left = `${event.clientX - offsetX}px`;
      moveplant.style.top = `${event.clientY - offsetY}px`;
    };
    const makeZhiwu = () => {
      plantCard.style.filter = "brightness(1)";
      const leftPosition =
        Math.round((moveplant.offsetLeft - 391) / 130 - 1) * 130 + 180;
      const topPosition =
        Math.floor((moveplant.offsetTop - 110) / 160) * 160 + 50;
      const name = this.url;
      const src = "idle/idle";
      if (
        leftPosition > 0 &&
        leftPosition < 1100 &&
        topPosition > 0 &&
        topPosition < 700
      ) {
        if (name === "peashooter")
          this.gameController.plantlist.push(
            new Peashooter(name, leftPosition, topPosition, src, 7, 10, this),
          );
        if (name === "gatlingpea")
          this.gameController.plantlist.push(
            new GatlingPea(
              name,
              leftPosition,
              topPosition - 10,
              src,
              12,
              10,
              this,
            ),
          );
        if (name === "repeater")
          this.gameController.plantlist.push(
            new Repeater(name, leftPosition, topPosition, src, 14, 10, this),
          );
      }
      cardsNode.removeChild(moveplant);
      document.removeEventListener("mousemove", moveImage);
    };
    document.addEventListener("mousemove", moveImage);
    document.addEventListener("mouseup", makeZhiwu, { once: true });
  }
}
//游戏控制器
class GameController {
  constructor() {
    this.xiaotuichelist = [];
    this.createXiaotuiches();
    this.zombielist = [];
    this.makeZombies();
    this.plantscardlist = [];
    this.createPlantsCards();
    this.plantlist = [];
    this.bulletlist = [];
    this.checkCollisions();
  }
  createXiaotuiches() {
    caopingtop.forEach((item) => {
      this.xiaotuichelist.push(new Xiaotuiche(30, item, this));
    });
  }
  makeZombies() {
    setInterval(() => {
      const randomTop =
        caopingtop[Math.floor(Math.random() * caopingtop.length)];
      this.zombielist.push(new Zombie(1450, randomTop));
    }, 2000);
  }
  createPlantsCards() {
    plantcards.forEach((item, index) => {
      this.plantscardlist.push(new Plantscard(50, 70 + index * 70, item, this));
    });
  }
  checkCollisions() {
    setInterval(() => {
      this.isattack();
      this.bulletlist.forEach((bullet, bulletIndex) => {
        this.zombielist.forEach((jiangshi, jiangshiIndex) => {
          if (this.isColliding(bullet, jiangshi)) {
            bullet.src = "./images/bullet_hit.png";
            setTimeout(() => {
              bullet.remove();
            }, 200);
            jiangshi.health -= 1;
            clearInterval(bullet.timer);
            this.bulletlist.splice(bulletIndex, 1);
            if (jiangshi.health <= 0) {
              clearInterval(jiangshi.timer);
              jiangshi.img.remove();
              this.zombielist.splice(jiangshiIndex, 1);
            }
          }
        });
      });
    }, 50);
  }
  isColliding(bullet, jiangshi) {
    const bulletRect = bullet.getBoundingClientRect();
    const jiangshiRect = jiangshi.img.getBoundingClientRect();
    return !(
      bulletRect.right > jiangshiRect.right + 20 ||
      bulletRect.left < jiangshiRect.left + 20 ||
      bulletRect.bottom < jiangshiRect.top ||
      bulletRect.top > jiangshiRect.bottom
    );
  }
  isattack() {
    for (let i = 0; i < this.plantlist.length; i++) {
      const plant = this.plantlist[i];
      for (let j = 0; j < this.zombielist.length; j++) {
        if (this.havezombie(plant)) {
          if (!plant.attacking) {
            console.log("开始攻击");
            plant.attack();
            plant.attacking = true;
            break;
          }
        } else {
          if (plant.attacking) {
            console.log("停止攻击");
            plant.attacking = false;
            clearInterval(plant.timer);
          }
        }
      }
    }
  }
  havezombie(plant) {
    return this.zombielist.some((zombie) => {
      const zombieRect = zombie.img.getBoundingClientRect();
      const plantRect = plant.img.getBoundingClientRect();
      console.log(plantRect, zombieRect);
      return (
        plantRect.bottom < zombieRect.bottom + 20 &&
        plantRect.bottom > zombieRect.top &&
        zombieRect.left < plantRect.left + 1400 &&
        zombieRect.right > plantRect.right + 50
      );
    });
  }
}
new GameController();
