// 选择器函数
const selectAll = (item) => document.querySelectorAll(item);
const select = (item) => document.querySelector(item);
// 更新项目标题样式
const updateItemTitle = (k) => {
  const title = select(`.root-left-body .nav-item:nth-child(${k}) .item-title`);
  if (title) {
    title.style.backgroundImage = "linear-gradient(to right, #55b3e2, #0076f5)";
  }
};
// 更新项目ul样式
const updateItemul = (k) => {
  const ul = select(`.root-left-body .nav-item:nth-child(${k}) .items ul`);
  if (ul) {
    ul.style.display = "block";
  }
};
// 初始化样式
updateItemTitle(1);
updateItemul(1);
// title点击事件
var newid = 1;
const onClickItemTitle = () => {
  const titles = selectAll(`.root-left-body .nav-item  .item-title`);
  const uls = selectAll(`.root-left-body .nav-item  .items ul`);
  titles.forEach((title, index) => {
    title.onclick = () => {
      const ul = uls[index];
      if (ul.style.display !== "block") {
        updateItemTitle(index + 1);
        if (select(".root-left").style.width !== "80px")
          updateItemul(index + 1);
        if (newid !== index + 1) {
          titles[newid - 1].style.backgroundImage = "";
          uls[newid - 1].style.display = "none";
          newid = index + 1;
        }
      }
    };
  });
};
// 点击左上角图片的事件
select(`.root-left-top img`).onclick = () => {
  const rootLeft = select(`.root-left`);
  const rootRight = select(`.root-right`);
  const newWidth = rootLeft.style.width === "80px" ? "160px" : "80px";
  rootLeft.style.width = newWidth;
  rootRight.style.width = `calc(100% - ${newWidth})`;
  selectAll(`.root-left-body .nav-item .item-title .item-doc`).forEach(
    (item) =>
      (item.style.display = item.style.display == "none" ? "block" : "none")
  );
  selectAll(".root-left-body .nav-item .item-title").forEach((item) => {
    item.style.width =
      select(`.root-left`).style.width === "80px" ? "25px" : "110px";
  });
  selectAll(".root-left-body .nav-item .items ul").forEach((item) => {
    item.style.display = "none";
  });
};
// 初始化点击事件
onClickItemTitle();
// 轮播图
let newLunboId = 1,
  timer;
const lunboImages = selectAll(".right-lunbo .xuanze div img");
lunboImages.forEach((item, index) => {
  item.onclick = () => {
    clearInterval(timer);
    select(`.lunboin`).src = `./img/bodyrightlunbo${index + 1}.png`;
    item.src = `./img/横线.png`;
    lunboImages[newLunboId - 1].src = `./img/点.png`;
    newLunboId = index + 1;
    startLoop();
  };
});
const startLoop = () => {
  timer = setInterval(() => {
    const nextIndex = (newLunboId % lunboImages.length) + 1;
    lunboImages[nextIndex - 1].click();
  }, 5000);
};
startLoop();
