new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => console.log(1111))
  .then(
    (result) => console.log(result),
    (err) => console.log(err),
  );
new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 2000);
})
  .finally(() => console.log(1111))
  .then(
    (result) => console.log(result),
    (err) => console.log(err),
  );
