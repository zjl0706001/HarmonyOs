let lis = document.querySelectorAll("li");
let ul = document.querySelector("ul").style;
lis.forEach((item, index) => {
  item.onclick = function () {
    let k = ul.gridTemplateColumns;
    switch (index) {
      case 0:
        ul.gridTemplateColumns =
          k === "10fr 1fr 1fr" ? "1fr 1fr 1fr" : "10fr 1fr 1fr";
        break;
      case 1:
        ul.gridTemplateColumns =
          k === "1fr 10fr 1fr" ? "1fr 1fr 1fr" : "1fr 10fr 1fr";
        break;
      case 2:
        ul.gridTemplateColumns =
          k === "1fr 1fr 10fr" ? "1fr 1fr 1fr" : "1fr 1fr 10fr";
        break;
    }
  };
});
