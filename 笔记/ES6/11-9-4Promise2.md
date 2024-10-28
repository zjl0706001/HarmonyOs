[TOC]

#### Promise封装Ajax请求

##### 这是一个返回笑话的代码

```js
    //创建对象
    const xhr = new XMLHttpRequest();
    //初始化
    //xhr.open("GET", "https://api.apiopen.top/getJoke");//该接口错误，换了个接口
    xhr.open('GET', 'https://autumnfish.cn/api/joke');
    //3.发送
    xhr.send();
    //4.绑定事件，处理响应结果
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300){
          //表示成功
          //console.log(xhr.response);
          alert(xhr.response);
        }else{
          //如果失败
          console.error(xhr.status);
        }
      }
    }
```

##### 用Promise封装该代码

```js
    //最后，用Promise进行封装
    const P = new Promise(function(resolve,reject){//===========================修改处1

    
    //创建对象
    const xhr = new XMLHttpRequest();
    //初始化
    //xhr.open("GET", "https://api.apiopen.top/getJoke");//该接口错误，换了个接口
    xhr.open('GET', 'https://autumnfish.cn/api/joke');
    //3.发送
    xhr.send();
    //4.绑定事件，处理响应结果
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300){
          //表示成功,就用resolve调用
          //console.log(xhr.response);===========================修改处2
          resolve(xhr.response);
          
        }else{
          //如果失败,就用reject调用
          //console.error(xhr.status);===========================修改处3
          reject(xhr.status);
        }
      }
    }
  });

  //===========================修改处4——指定回调
  P.then(function(value){
      console.log(value);
    }, function(reason){
      console.log(reason);
    });
```

