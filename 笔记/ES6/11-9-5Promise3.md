[TOC]

#### then方法的返回值

then方法返回的是一个==Promise对象==

回调函数的执行结果，即返回值决定Promise对象的状态

##### 回调函数返回值为非Promise类型的属性

+ 则Promise对象的状态为成功
+ 返回值为对象成功的值
+ 不加return默认返回undefined，也是非Promise类型的属性，所以也是代表状态成功

```js
const result = P.then((value) => {
      console.log(value);
      return 123;//比如这里返回123
    }, (reason) => {
      console.warn(reason);
    });
```



```js
    const P = new Promise(function(resolve,reject){
      setTimeout(function() {
        resolve('用户数据');
      }, 0);
    });

    const result = P.then((value) => {
      console.log(value);
      return 123;
    }, (reason) => {
      console.warn(reason);
    });

    console.log(result);
    //then方法返回的结果是Promise对象，对象状态由回调函数的执行结果决定
    //如果回调函数返回的结果是非Promise类型的属性，状态为成功，返回值为对象的成功的值
    //比如在成功那里加了返回值123，则对象中的返回值也是这个值，不加return语句，默认为undefined
```

![image-20221109233057481](D:\TyporaWorks\图片文件夹存放\image-20221109233057481.png)



##### 回调函数的返回值为Promise类型的属性——返回成功的Promise对象

+ 返回一个成功的Promise对象，也代表then方法返回的Promise对象的状态为成功
+ 且返回值为这个对象的resolve('ok')的参数，即'ok'

```js
const result = P.then((value) => {
      console.log(value);
      //return 123;//非Promise对象
      //这次返回一个Promise对象试试
      return new Promise(function(resolve, reject){
        resolve('ok');//返回一个成功的Promise对象
      })
    }, (reason) => {
      console.warn(reason);
    });

    console.log(result);
```

![image-20221109234530701](D:\TyporaWorks\图片文件夹存放\image-20221109234530701.png)



##### 回调函数的返回值为Promise类型的属性——返回失败的Promise对象

+ 返回一个失败的Promise对象，代表then方法返回的Promise对象的状态也为失败
+ 且返回值为这个对象reject('ok')的参数，即’ok‘

```js
const result = P.then((value) => {
      console.log(value);
      //return 123;//非Promise对象
      //这次返回一个Promise对象试试
      return new Promise(function(resolve, reject){
        reject('ok');//返回一个失败的Promise对象
      })
    }, (reason) => {
      console.warn(reason);
    });

    console.log(result);
```

![image-20221109234903021](D:\TyporaWorks\图片文件夹存放\image-20221109234903021.png)



##### 抛出错误

+ 抛出错误也会导致then方法返回的Promise对象的状态为错误
+ 且Promise对象的返回值为抛出的值

```js
    const result = P.then((value) => {
      console.log(value);
      //这次不返回任何值，改成抛出错误
      throw new Error('出问题了');
      //或者抛出个字符串
      //throw '出错了';
    }, (reason) => {
      console.warn(reason);
    });

    console.log(result);
```

![image-20221109235343402](D:\TyporaWorks\图片文件夹存放\image-20221109235343402.png)



#### 链式调用

```js
P.then(function(value){}, function(reason){}).then(function(value){},function(reason){})
```

