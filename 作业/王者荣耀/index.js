document.addEventListener("DOMContentLoaded", () => {
  let currentSection = 0;
  const sections = document.querySelectorAll(".page");
  const totalSections = sections.length;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      if (currentSection < totalSections - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else {
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      if (currentSection < totalSections - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else if (event.key === "ArrowUp") {
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });
});
//page1轮播图
const lunbo = document.querySelectorAll("#page1 .lunboimg");
const prev = document.querySelector("#page1 .jiantou.left");
const next = document.querySelector("#page1 .jiantou.right");
const radius = document.querySelector("#page1 .radius");
let newid = 0;
let timerId;

function radiusxianshi(id, k) {
  if (k) radius.children[id].className = "";
  else radius.children[id].className = "radius-active";
}

function createLi() {
  for (
    let i = 0;
    i < document.querySelectorAll("#page1 .lunboimg").length;
    i++
  ) {
    let li = document.createElement("li");
    radius.appendChild(li);
  }
  radius.children[0].className = "radius-active";
}

createLi();

const startLoop = () => {
  clearInterval(timerId);
  timerId = setInterval(() => {
    radiusxianshi(newid % 5, 1);
    lunbo[newid++ % 5].style.opacity = "0";
    lunbo[newid % 5].style.opacity = "1";
    radiusxianshi(newid % 5, 0);
  }, 10000);
};

startLoop();

prev.onclick = () => {
  clearInterval(timerId);
  radiusxianshi(newid % 5, 1);
  lunbo[newid % 5].style.opacity = "0";
  newid = newid === 0 ? 4 : newid - 1;
  lunbo[newid % 5].style.opacity = "1";
  radiusxianshi(newid % 5, 0);
  startLoop();
};

next.onclick = () => {
  clearInterval(timerId);
  radiusxianshi(newid % 5, 1);
  lunbo[newid++ % 5].style.opacity = "0";
  lunbo[newid % 5].style.opacity = "1";
  radiusxianshi(newid % 5, 0);
  startLoop();
};

function cirMouse() {
  for (let i = 0; i < radius.children.length; i++) {
    radius.children[i].onmouseover = function () {
      clearInterval(timerId);
      radiusxianshi(newid % 5, 1);
      lunbo[newid % 5].style.opacity = "0";
      newid = i;
      lunbo[newid].style.opacity = "1";
      radiusxianshi(i, 0);
      startLoop();
    };
  }
}

cirMouse();
