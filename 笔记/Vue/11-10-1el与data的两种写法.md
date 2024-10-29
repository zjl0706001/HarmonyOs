[TOC]

#### el

##### 方式1

```js
var app = new Vue({
        el:'#xx'
      })
```

##### 方式2

```js
var app = new Vue({
        
      }).$mount('#xx')
//或者
//app.$mount('#xx')
```

#### data

##### 方式1——对象式

```js
      var app = new Vue({
        el:'#app',
        data:{
          name:'一西',
        }
      })
```

##### 方式2——函数式

以后学习到组件阶段，必须用函数式的方式

```js
      var app = new Vue({
        el:'#app',
        data() {//写成一个函数，函数的返回值是对象，里面包含数据
          return {
            name:'一西',
          }
        },
      })
```

**重要：**由Vue所管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了

```js
      var app = new Vue({
        el:'#app',
        data() {
          console.log(this);//打印this
          return {
      
          }
        },
      })
```

![image-20221110203932387](D:\TyporaWorks\图片文件夹存放\image-20221110203932387.png)

这里是Vue实例对象



**写成箭头函数**

获取的就是全局的window

```js
      var app = new Vue({
        el:'#app',
        data:() => {
          console.log(this);
          return {
            
          }
        },
      })
```

![image-20221110204038303](D:\TyporaWorks\图片文件夹存放\image-20221110204038303.png)