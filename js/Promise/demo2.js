new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
}).then(
  (result) => console.log(result),
  (error) => console.log(error),
);
new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
}).then(
  (result) => console.log(result),
  (error) => console.log(error),
);
new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
}).catch(console.log);
