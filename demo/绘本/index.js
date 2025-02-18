const app = document.querySelector(".app");
//书类导航
const nav = document.createElement("div");
nav.className = "nav";
const data = fetch("http://localhost:3000").then((data) => {
  return data.json();
});
data.then((data) => {
  data.forEach((item) => {
    const divItem = document.createElement("div");
    divItem.className = "item";
    const title = document.createElement("div");
    title.className = "title";
    title.innerText = item.name;
    divItem.appendChild(title);

    item.tag_list.forEach((it) => {
      const box = document.createElement("div");
      box.className = "box";
      const img = document.createElement("img");
      img.src = it.image;
      const doc_agent = document.createElement("div");
      doc_agent.className = "doc-agent";
      doc_agent.innerText = it.name;
      box.appendChild(img);
      box.appendChild(doc_agent);
      divItem.appendChild(box);
    });
    nav.appendChild(divItem);
  });
});
//好书速递
const goodsbook = document.createElement("div");
goodsbook.className = "goodsbook";
const book_title = document.createElement("div");
book_title.innerText = "好书速递";
book_title.className = "book-title";
goodsbook.appendChild(book_title);
const books = fetch("http://localhost:3000/goodbooks").then((data) =>
  data.json(),
);
let booksbox = document.createElement("div");
goodsbook.appendChild(booksbox);
booksbox.className = "goodbooksbox";
books.then((data) => {
  data.forEach((item) => {
    let book = `<div class="bookitem">
        <img
          src="${item.goods_thumb}"
          alt=""
        />
        <div>
          <div class="bookname">${item.goods_name}</div>
          <div class="bookdoc">
            ${item.goods_desc}</div>
        </div>
      </div>`;
    booksbox.innerHTML += book;
  });
});
//达人书单
const darenbooks = document.createElement("div");
darenbooks.className = "booksbox";
const daren_title = document.createElement("div");
daren_title.innerText = "达人书单";
daren_title.className = "book-title";
darenbooks.appendChild(daren_title);
const darens = fetch("http://localhost:3000/darenshudan").then((data) =>
  data.json(),
);
let darensbox = document.createElement("div");
darenbooks.appendChild(darensbox);
darens.then((data) => {
  data.forEach((item) => {
    let book = `<div class="darenbookitem">
        <img
          src="${item.goods_thumb}"
          alt=""
        />
        <div class="bookname">${item.goods_name}</div>
        <div class="bookdoc">
          ${item.expert_description}
        </div>
      </div>`;
    darensbox.innerHTML += book;
  });
});
//精选
const jingxuanbooks = document.createElement("div");
jingxuanbooks.className = "booksbox";
const jingxuan_title = document.createElement("div");
jingxuan_title.innerText = "达人精选";
jingxuan_title.className = "book-title";
jingxuanbooks.appendChild(jingxuan_title);

const jingxuans = fetch("http://localhost:3000/jingxuan/1").then((data) =>
  data.json(),
);
let jingxuansbox = document.createElement("div");
jingxuansbox.className = "jingxuansbox";
jingxuanbooks.appendChild(jingxuansbox);
jingxuans.then((data) => {
  data.forEach((item) => {
    let book = `<div class="jingxuanbookitem" id="${item.goods_id}">
        <img
          src="${item.goods_thumb}"
          alt=""
        />
        <div class="bookname">${item.goods_name}</div>
        <div class="bookdoc">
          ${item.goods_desc}
        </div>
      </div>`;
    jingxuansbox.innerHTML += book;
  });
});
app.appendChild(nav);
app.appendChild(goodsbook);
app.appendChild(darenbooks);
app.appendChild(jingxuanbooks);

//横向左右拖动效果
const goodbooksbox = document.querySelector(".goodbooksbox");
let isDragging = false;
let startX;
let scrollLeft;
let isleft = true;

goodbooksbox.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - goodbooksbox.offsetLeft;
  scrollLeft = goodbooksbox.scrollLeft;
  goodbooksbox.classList.add("dragging");
});
goodbooksbox.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - goodbooksbox.offsetLeft;
  const walk = x - startX;
  isleft = walk < 0;
  goodbooksbox.scrollLeft = scrollLeft - walk;
});

goodbooksbox.addEventListener("mouseup", () => {
  isDragging = false;
  goodbooksbox.classList.remove("dragging");
  if (isleft) {
    goodbooksbox.scrollLeft =
      Math.floor(goodbooksbox.scrollLeft / 425 + 1) * 425;
  } else {
    goodbooksbox.scrollLeft = Math.floor(goodbooksbox.scrollLeft / 425) * 425;
  }
});

goodbooksbox.addEventListener("mouseleave", () => {
  isDragging = false;
  goodbooksbox.classList.remove("dragging");
  if (isleft) {
    goodbooksbox.scrollLeft =
      Math.floor(goodbooksbox.scrollLeft / 425 + 1) * 425;
  } else {
    goodbooksbox.scrollLeft = Math.floor(goodbooksbox.scrollLeft / 425) * 425;
  }
});
//增量式
let newpage = 1;
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  rootElement.addEventListener("scroll", (e) => {
    const element = e.target;
    console.log(element.scrollTop);
    if (newpage <= Number(element.scrollTop - 3000) / 1800) {
      const jingxuans = fetch(
        `http://localhost:3000/jingxuan/${newpage + 1}`,
      ).then((data) => data.json());
      jingxuans.then((data) => {
        data.forEach((item) => {
          let book = `<div class="jingxuanbookitem" id="${item.goods_id}">
        <img
          src="${item.goods_thumb}"
          alt=""
        />
        <div class="bookname">${item.goods_name}</div>
        <div class="bookdoc">
          ${item.goods_desc}
        </div>
      </div>`;
          document.querySelector(".jingxuansbox").innerHTML += book;
        });
      });
      newpage++;
    }
  });
});
//事件委托
document.querySelector(".jingxuansbox").addEventListener("click", (e) => {
  const target = e.target;
  if (target.id || target.parentNode.id) {
    let goods_id = target.id ? target.id : target.parentNode.id;
    window.location.assign(
      `https://van.mama.cn/hb/?w=1#/detail?id=${goods_id}`,
    );
  }
});
