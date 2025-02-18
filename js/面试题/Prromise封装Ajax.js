class Axios {
  constructor(url) {
    this.url = url;
    this.req = new XMLHttpRequest();
  }
  async http(type, cb, reqbody) {
    return await new Promise((resolve, reject) => {
      if (type === "GET") {
        this.get(reqbody);
      } else {
        reject("Unsupported request type");
      }
      this.req.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            cb(this.response);
            resolve(this.response);
          } else {
            reject(this.response);
          }
        }
      };
    });
  }

  get(reqbody) {
    if (reqbody) {
      const queryString = new URLSearchParams(reqbody).toString();
      this.req.open("GET", `${this.url}?${queryString}`);
    } else {
      this.req.open("GET", this.url);
    }
    this.req.send();
  }
  setheader(obj) {
    for (let _ in obj) this.req.setRequestHeader(_, obj[_]);
  }
}

let obj = { name: 1, age: 2 };
let res = new Axios("http://localhost:8888");

res
  .http(
    "GET",
    (response) => {
      console.log("Callback Response:", response);
    },
    obj,
  )
  .then((response) => {
    console.log("Promise Response:", response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
