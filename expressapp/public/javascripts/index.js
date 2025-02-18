// 获取所有商品数据
const setData = (url) => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      let tbody = document.querySelector("tbody");
      tbody.innerHTML = data
        .map((item) => {
          return `
          <tr>
              <td><input class="i i1" type="text" value="${item.category}"></td>
              <td><input class="i i2" type="text" value="${item.title}"></td>
              <td><img src='${item.img_big_logo}' alt="" width="50" /></td>
              <td><input class="i i3" type="text" value="${item.price}"></td>
              <td>
                  <button class="alter" id="${item.goods_id}">修改</button>
                  <button class="delete" id="${item.goods_id}">删除</button>
              </td>
              
          </tr>`;
        })
        .join("");
    }
  };
  request.open("GET", url, true);
  request.send();
};
setData("http://localhost:3000/api/goods");
// 删除商品

document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.getAttribute("id");
    fetch(`http://localhost:3000/api/goods/${id}`, { method: "DELETE" }).then(
      (r) => {
        if (r.ok) {
          confirm("删除成功");
          setTimeout(
            function () {
              this.target.parentNode.parentNode.remove();
            }.bind(e),
            500,
          );
        } else {
          alert("删除失败");
        }
      },
    );
  }
});
// 添加商品
document.getElementById("addBtn").addEventListener("click", function () {
  document.getElementById("addForm").style.display = "block";
});

document.getElementById("cancelBtn").addEventListener("click", function () {
  document.getElementById("addForm").style.display = "none";
});

document
  .getElementById("itemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const category = document.getElementById("category").value;
    const title = document.getElementById("title").value;
    const photo = document.getElementById("photo").value;
    const price = document.getElementById("price").value;
    const newItem = {
      category,
      title,
      img_big_logo: photo,
      price,
    };
    fetch("http://localhost:3000/api/goods/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
        document.querySelector("tbody").innerHTML += `
          <tr>
              <td>${newItem.category}</td>
              <td>${newItem.title}</td>
              <td><img src='${newItem.img_big_logo}' alt="" width="50" /></td>
              <td>${newItem.price}</td>
              <td><button class="delete" id="${newItem.goods_id}">删除</button></td>
          </tr>`;
        document.getElementById("itemForm").reset();
      })
      .catch((e) => {
        console.log(e);
      });
  });
// 搜索商品
document.getElementById("search").addEventListener("click", function () {
  const keyword = document.querySelector(".s input").value;
  const goods = document.querySelectorAll("tbody tr");
  goods.forEach((item) => {
    const tds = item.querySelectorAll("td");
    if (tds[0].innerText === keyword) {
      item.style.display = "table-layout";
    } else {
      item.style.display = "none";
    }
  });
});
//重置
document.getElementById("reset").addEventListener("click", function () {
  console.log("重置");
  console.log(document.querySelectorAll("tbody tr"));
  document.querySelectorAll("tbody tr").forEach((item) => {
    item.style.display = "table-row";
  });
});
//修改商品信息
document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.classList.contains("alter")) {
    let f = e.target.parentNode.parentNode;
    console.log(f);
    fetch(`http://localhost:3000/api/goods`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        goods_id: e.target.getAttribute("id"),
        price: f.querySelector(".i3").value,
        category: f.querySelector(".i1").value,
        title: f.querySelector(".i2").value,
        img_big_logo: f.querySelector("img").src,
      }),
    }).then((r) => {
      if (r.ok) {
        alert("修改成功");
      } else {
        alert("修改失败");
      }
    });
  }
});
