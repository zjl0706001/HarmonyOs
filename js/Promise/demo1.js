let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("123"), 1000);
});
promise1.then((result) => console.log(result));

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("111")), 2000);
});
promise2.then((result) => console.log(result));
