[TOC]

#### Promise

Promise是ES6引入的异步编程的新解决方案，语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

```html
  <script>
    //实例化Promise对象
    const P = new Promise(function(resolve,reject){
      setTimeout(function(){
        // let data = '数据库中的数据';
        // resolve(data);//当调用完resolve函数之后，P的状态就会变为成功
        // //总共三个状态：初始化、失败、成功
        let err = '调用数据失败';
        reject(err);//调用完reject以后，P的状态就会变为失败
      }, 1000);
    });

    //P为成功，就会调用then方法的第一个回调函数
    //P为失败，就会调用then方法的第二个回调函数
    P.then(function(value) {
      console.log(value);
    }, function(reason) {
      console.log(reason);
    })
    
  </script>
```

通过这样的方式，把异步任务封装在Promise对象里面，通过其两个参数来改变对象的状态，再通过其状态决定调用then方法的哪个回调函数



#### 案例——使用Promise封装来读取文件

```js
//1.引入fs模块
const fs = require('fs');
// //2.调用方法读取文件
// fs.readFile('./静夜思.md', (err,data) => {
//   //如果失败则抛出错误
//   if(err) throw err;
//   //如果没有出错，则输出内容
//   console.log(data.toString());
// })
//在本js文件里，在终端输入node 文件名.js进行执行

//3.使用Promise封装
const P = new Promise(function(resolve,reject) {
    fs.readFile('./静夜思.mda', (err,data) => {
        if(err) reject(err);
        resolve(data);
    });
});

P.then(function(value) {
    console.log(value.toString());//输出都是Buffer，需要用toString转换
}, function(reason) {
    console.log('读取失败');
});
```

