class axios {
  constructor(url) {
    this.url = url;
    this.xhttp = new XMLHttpRequest();
  }
  http(type, cb, resbody = null) {
    if (!type || !this.url) throw new Error("Request type or URL is null!!!");
    if (type.toUpperCase() === "GET" && resbody) {
      const queryString = new URLSearchParams(resbody).toString();
      this.url += `?${queryString}`;
    }
    this.xhttp.open(type, this.url);
    this.xhttp.onreadystatechange = function () {
      if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
        cb(this.xhttp.response);
      }
    }.bind(this);
    if (type.toUpperCase() === "POST" && resbody) {
      this.xhttp.send(JSON.stringify(resbody));
    } else {
      this.xhttp.send();
    }
  }
  setheader(obj) {
    for (let _ in obj) this.xhttp.setRequestHeader(_, obj[_]);
  }
}
let obj = { name: 1, age: 2 };
let res = new axios("http://localhost:8888");
// res.http(
//   "GET",
//   (response) => {
//     console.log(response);
//   },
//   obj,
// );
res.http(
  "POST",
  (response) => {
    console.log(response);
  },
  obj,
);
