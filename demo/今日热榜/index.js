const nav_newtime = document.querySelector(".new-time");
const url = "https://hot-api.changlaoba.fun/";
const urlList = [
  "weibo",
  "bilibili",
  "douyin",
  "gongren",
  "guangming",
  "hyper",
  "jiefang",
  "junbao",
  "jingji",
  "juejin",
  "qingnian",
  "tengxun",
  "toutiao",
];
const app = document.querySelector(".app");

// 更新日期时间
const updateDateTime = () => {
  const now = new Date();
  const cnDate = new Intl.DateTimeFormat("zh-u-ca-chinese", {
    dateStyle: "full",
  }).format(now);
  const timeString = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  nav_newtime.innerHTML = `<p>${timeString}</p><span>${cnDate.slice(4)}</span>`;
};
setInterval(updateDateTime, 1000);

// 获取数据并展示
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const { data } = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const setItems = async () => {
  const dataPromises = urlList.map((item) => fetchData(url + item));
  const dataArray = await Promise.all(dataPromises);

  dataArray.forEach((data, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
                    <div class="item-title">
                        <img src="./img/${urlList[index]}.png" alt="" />
                        ${urlList[index].toUpperCase()}
                    </div>
                `;
    const itemList = document.createElement("ol");
    itemList.className = "item-body";
    data.forEach((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = entry.url;
      link.innerText = entry.title;
      item.appendChild(link);
      itemList.appendChild(item);
    });

    itemDiv.appendChild(itemList);
    itemDiv.innerHTML += `<div class="item-down"></div>`;
    app.appendChild(itemDiv);
  });
};
setItems();
// 创建漂浮星星
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(star);
  star.addEventListener("animationend", () => star.remove());
}
setInterval(createStar, 300);
