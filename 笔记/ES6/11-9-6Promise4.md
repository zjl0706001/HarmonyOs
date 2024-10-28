[TOC]

#### Promise实践练习——多个文件内容读取

通过then方法将三个异步任务串联了起来，避免像普通方式那样回调地狱的形式

```js
//1.引入fs模块
//普通方式
const fs = require('fs');
// fs.readFile('./静夜思.md', function(err,data1) {
//     fs.readFile('./春晓.md', function(err,data2) {
//         let result = data1 + '\n' +data2;
//         console.log(result);
//     });
// });

//使用Promise实现
const P = new Promise(function(resolve,reject){
    fs.readFile('./静夜思.md', function(err,data){
        resolve(data);
    });
});

//这一段相当于在第一个文件的then方法里嵌套了个第二个文件
P.then(function(value){//value是上面第一个文件的内容
    return new Promise(function(resolve, reject){
        fs.readFile('./春晓.md',function(err,data){//这里的data是第二个文件的内容
            resolve([value,data]);//resolve表示成功，里面的值会返回给then
            //所以value的值会变成[value,data]
        })
    })
}).then(function(value){//在这里接上第三个文件
    return new Promise(function(resolve,reject){
        fs.readFile('./静夜思.md', function(err,data){
            value.push(data);
            resolve(value);
        });
    })    
}).then(function(value){
    // console.log(value[0].toString());//这里的value已经是一个数组，里面三个文件了
    // console.log(value[1].toString());
    // console.log(value[2].toString());
    console.log(value.join('\n'));
})
```



##### 通过数据来更清晰的描述链式调用

```js
    const P = new Promise(function(resolve,reject){
      resolve('小明');//这个小明将会作为P.then的value的值
    });

    P.then(function(value){
      return new Promise(function(resolve,reject){
        resolve([value,'小红']);//这时候小明跟小红成为一个数组了
      })
    }).then(function(value){//这个value的值就是上一个resolve的参数
        return new Promise(function(resolve,reject){
          value.push('小白');
          resolve(value);
        })
    }).then(function(value){//这个value的值就是上一个resolve的参数
        console.log(value);
    })
   
```

![image-20221110130514335](D:\TyporaWorks\图片文件夹存放\image-20221110130514335.png)



##### 总结

声明一个P对象，这个对象的resolve的参数将会作为他的then方法的value的值。

在P.then方法里，返回一个Promise对象，调用该对象的resolve方法，他的参数将会作为下一个then方法的value值

我们只需要修改每个then方法里的resolve的值，就可以一直链式传递下去

比如我要链起三个数据，需要怎么做呢

+ 声明一个P对象，传入resolve参数，这是第一个数据
+ P.then方法的value就是第一个数据
+ then方法返回Promise对象，调用resolve([value,'第二个参数'])
+ 这里是有意设置成数组，方便后面直接添加
+ P.then.then,这是第二个then方法，这个then方法的value值就是上一个then里的resolve参数，里面返回Promise对象，先把第三个数据加入到数组里，调用resolve(value)
+ 最后再来一个then方法，用于输出
+ 所以三个数据，总共要3个then，数据1在声明P的时候传入，数据2在P.then里传入，数据3在P.then.then里传入，P.then.then.then用于输出value值



#### Promise.catch

```js
    const P = new Promise(function(resolve,reject){
      reject('出错了');
    });

    P.then(function(value){

    },function(reason){
      console.log(reason);
    })

    //相当于单独设置了一个P.then(function(reason))
    P.catch(function(reason){
      console.log(reason);
    })
```

![image-20221110134843750](D:\TyporaWorks\图片文件夹存放\image-20221110134843750.png)