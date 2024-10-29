[TOC]

#### 利用watch实现

```html
    <div id="app">
      姓：<input type="text" v-model="firstName"><br>
      名：<input type="text" v-model="lastName"><br>
      全名：<span>{{fullName}}</span>
    </div>
    
    <script>
      Vue.config.productionTip = false;
      var app = new Vue({
        el:'#app',
        data:{
          firstName:'张',
          lastName:'一西',
          fullName:'张-一西'
        },
        // computed:{
        //   fullName:{
        //     get() {
        //       return this.firstName + '-' + this.lastName;
        //     },
        //   }
        // },
        watch:{
          firstName:{
            handler(newValue){
              this.fullName = newValue + '-' + this.lastName;
            }
          },
          lastName:{
            handler(newValue){
              this.fullName = this.firstName + '-' + newValue;
            }
          }
        }
      })
```

看起来比计算属性实现复杂得多，

+ 要在data里声明变量，然后对姓和名分别设置一个监视对象



**提出要求：想要延迟进行数据的赋值，比如修改姓和名以后，延迟生效**

##### 监视属性实现

监视属性是通过程序员自己编写修改代码来修改数据的

```js
          firstName:{
            handler(newValue){
              let that = this;//这里注意定时器里面的this指向
              setTimeout(function(){
                that.fullName = newValue + '-' + that.lastName;
              },1000) 
            }
          },
```

##### 计算属性实现

计算属性是通过返回值来进行数据修改的，而没办法让fullName的返回值延迟返回，所以是没办法实现的

```js
        computed:{
          fullName:{
            get() {
              let that = this;
              let x;
              setTimeout(function(){
                x = that.firstName + '-' +that.lastName;
              },1000)
              return x;
            },
          }
        },
```



**这就体现了监视属性的好处了，监视属性可以在里面开启异步任务来维护数据**