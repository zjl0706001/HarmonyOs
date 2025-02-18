let pinpai = document.querySelector("ul.pinpai-list");
let chexi = document.querySelector("ul.chexi-list");
let chexing = document.querySelector("ul.chexing-list");
let jiage = document.querySelector("ul.jiage-list");
let shaixuan = document.querySelector(".shaixuan");
const listItems = document.querySelectorAll(".gengduo-list > li");
const url = `https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=&carBrand=`;
let newurl = `https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=&carBrand=1`;
pinpai.onclick = function (e) {
  let target = e.target;
  if (target.nodeName === "LI") {
    let text = target.innerText;
    if (text !== "不限") {
      shaixuan.querySelector(".selete-title").style.display = "block";
      shaixuan.querySelector(".selete-pinpai").innerText = "品牌：" + text;
      shaixuan.querySelector(".selete-pinpai").style.display = "block";
      let buxian = document.createElement("li");
      buxian.innerText = "不限";
      chexi.innerHTML = "";
      chexi.appendChild(buxian);
      for (let i = 0; i < 50; i++) {
        let che = document.createElement("li");
        che.innerText = text + "X" + i;
        chexi.appendChild(che);
      }
    } else {
      // shaixuan.querySelector(".selete-title").style.display = "none";
      shaixuan.querySelector(".selete-pinpai").style.display = "none";
      chexi.innerHTML =
        '      <li class="clickedbox">不限</li>\n' +
        "          <li>宝马X4</li>";
    }
    Array.from(pinpai.children).forEach((item) => {
      item.classList.remove("clickedbox");
    });
    target.classList.add("clickedbox");
    setData(url + e.target.getAttribute("data-carId"), 0, 10000);
    newurl = url + e.target.getAttribute("data-carId");
  }
};
chexi.onclick = function (e) {
  let target = e.target;
  if (target.nodeName === "LI") {
    let text = target.innerText;
    if (text !== "不限") {
      shaixuan.querySelector(".selete-title").style.display = "block";
      shaixuan.querySelector(".selete-chexi").innerText = "车系：" + text;
      shaixuan.querySelector(".selete-chexi").style.display = "block";
    } else {
      // shaixuan.querySelector(".selete-title").style.display = "none";

      shaixuan.querySelector(".selete-chexi").style.display = "none";
    }
    Array.from(chexi.children).forEach((item) => {
      item.classList.remove("clickedbox");
    });
    target.classList.add("clickedbox");
  }
};
chexing.onclick = function (e) {
  let target = e.target;
  if (target.nodeName === "LI") {
    let text = target.innerText;
    if (text !== "不限") {
      shaixuan.querySelector(".selete-title").style.display = "block";
      shaixuan.querySelector(".selete-chexing").innerText = "车型：" + text;
      shaixuan.querySelector(".selete-chexing").style.display = "block";
    } else {
      // shaixuan.querySelector(".selete-title").style.display = "none";
      shaixuan.querySelector(".selete-chexing").style.display = "none";
    }
    Array.from(chexing.children).forEach((item) => {
      item.classList.remove("clickedbox");
    });
    target.classList.add("clickedbox");
  }
};
jiage.onclick = function (e) {
  let target = e.target;
  if (target.nodeName === "LI") {
    let text = target.innerText;
    if (text !== "不限") {
      shaixuan.querySelector(".selete-title").style.display = "block";
      shaixuan.querySelector(".selete-jiage").innerText = "价格：" + text;
      shaixuan.querySelector(".selete-jiage").style.display = "block";
    } else {
      // shaixuan.querySelector(".selete-title").style.display = "none";
      shaixuan.querySelector(".selete-jiage").style.display = "none";
    }
    Array.from(jiage.children).forEach((item) => {
      item.classList.remove("clickedbox");
    });
    target.classList.add("clickedbox");
    let jia = target.getAttribute("data-jiage");
    let l = jia.split("-")[0];
    let r = jia.split("-")[1];
    console.log(l, r);
    setData(newurl, Number(l), Number(r));
  }
};
listItems.forEach((li) => {
  li.addEventListener("mouseover", function () {
    li.style.backgroundColor = " #00b7ff";
    const dropdown = li.querySelector(".xiala");
    if (dropdown) {
      dropdown.style.display = "block";
      dropdown.addEventListener("click", (e) => {
        li.querySelector(".milage").innerHTML = e.target.innerHTML;
      });
    }
  });

  li.addEventListener("mouseleave", function () {
    li.style.backgroundColor = "";
    const dropdown = li.querySelector(".xiala");
    if (dropdown) {
      dropdown.style.display = "none";
    }
  });
});
//body
const body = document.querySelector(".body");
const setData = async (url, l, r) => {
  try {
    const res = await fetch(url, {
      headers: {
        platformtype: "h5",
      },
    });

    const data = await res.json();
    if (data && data.data && data.data.content) {
      const content = data.data.content;
      if (content) {
        body.innerHTML = "";
        content.forEach((item) => {
          if (l <= item.currentPrice && item.currentPrice <= r) {
            const li = document.createElement("li");
            li.className = "car";
            li.innerHTML = `
              <div class="car-img">
                <img src="${item.cover}" alt="" />
              </div>
              <div class="car-info">
                <div class="car-name">${item.carName}</div>
                <div class="car-price">${item.currentPrice}</div>
              </div>
            `;
            body.appendChild(li);
          }
        });
      }
    } else {
      console.error("数据格式错误：缺少 content 属性");
    }
  } catch (error) {
    console.error("数据请求失败", error);
  }
};
setData(url + "1", 0, 10000);
document.querySelector(".fanwei button").onclick = () => {
  let l = document.querySelector(".inputone").value;
  let r = document.querySelector(".inputtwo").value;
  if (l && r) setData(newurl, l, r);
};
document.onclick = function (e) {
  const allAreNotLimited = Array.from(
    document.querySelectorAll(".clickedbox"),
  ).every((item) => item.innerHTML.trim() === "不限");
  if (allAreNotLimited) {
    document.querySelector(".selete-title").style.display = "none";
  }
};
document.oncontextmenu = (e) => e.preventDefault();
