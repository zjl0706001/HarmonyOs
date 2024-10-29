[TOC]

#### Object.defineproperty()方法

==语法：==Object.defineproperty(参数1，参数2，参数3)

+ 参数1——给哪个对象添加属性
+ 参数2——添加属性的名字
+ 参数3——配置项

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
      })
      //这时候就往Person对象添加了phone属性，值为1234567
      console.log(Person)
```

![image-20221110232207741](D:\TyporaWorks\图片文件夹存放\image-20221110232207741.png)

可以发现用该方法添加的phone属性颜色不一样，==表示该属性是不能被枚举的，即不参与遍历==



#### Object.defineproperty()方法添加的属性不可被枚举

##### Object.keys()方法进行枚举

==语法：==Object.keys(参数)

传入一个对象作为参数，把该对象的所有属性名提取出来作为一个数组

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
      })
      let key = Object.keys(Person);
      console.log(key);
```

![image-20221110232635958](D:\TyporaWorks\图片文件夹存放\image-20221110232635958.png)

没有遍历出phone属性

##### for_in方法进行枚举

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
      })
      for(let i in Person){
        console.log(Person[i]);
      }
```

![image-20221110232921888](D:\TyporaWorks\图片文件夹存放\image-20221110232921888.png)

依旧没有遍历出用Object.defineproperty()添加出的属性phone



#### Object.defineproperty()方法——enumerable配置项

+ 默认为false，表示不可被枚举
+ 改为true，可被枚举

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
        enumerable: true,
      })

      for(let i in Person){
        console.log(Person[i]);
      }
```

![image-20221110233645377](D:\TyporaWorks\图片文件夹存放\image-20221110233645377.png)



#### Object.defineproperty()方法——writable配置项

+ 默认为false，表示不可被修改
+ 改为true，可被修改

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
        enumerable: true,
      })
      Person.phone = 1111111;
      console.log(Person);
```

![image-20221110234232211](D:\TyporaWorks\图片文件夹存放\image-20221110234232211.png)

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
        enumerable: true,
        writable: true,
      })
      Person.phone = 1111111;
      console.log(Person);
```

![image-20221110234309071](D:\TyporaWorks\图片文件夹存放\image-20221110234309071.png)



#### Object.defineproperty()方法——configurable配置项

+ 默认为false，表示不可被删除
+ 改为true，可被删除

```js
      let Person = {
        name: '张三',
        sex: '男',
        age: 18
      };
      Object.defineProperty(Person,'phone',{
        value: 1234567,
        enumerable: true,
        writable: true,
      })
      console.log(Person);
```

![image-20221110234757053](D:\TyporaWorks\图片文件夹存放\image-20221110234757053.png)

删除name成功，删除phone失败

```js
      Object.defineProperty(Person,'phone',{
        value: 1234567,
        enumerable: true,
        writable: true,
        configurable: true
      })
```

![image-20221110234917986](D:\TyporaWorks\图片文件夹存放\image-20221110234917986.png)

**删除成功**



#### Object.defineproperty()方法——get配置项

+ 当有人读取Person对象的phone参数时，get函数就会被调用，且返回值为age的值
+ ==注意==，指定了get函数，就不能指定value跟可写属性

==提出需求：==有一个变量phone_number，Person中有phone属性，需要让phone属性跟着phone_number的值来动态变化

```js
      let phone_number = 15266668888;
      let Person = {
        name: '张三',
        sex: '男',
        age: 18,
        phone: phone_number,
      };
      phone_number = 111222333;//修改phone_number的值
      console.log(Person);
```

这种做法肯定是不行的，因为phone只会有一次初值，即phone_number的值，后续对phone_number进行修改，phone的值不会动态进行改变

![image-20221111000252138](D:\TyporaWorks\图片文件夹存放\image-20221111000252138.png)

这时候就需要用到配置项get函数了

```js
      let phone_number = 9999999;
      let Person = {
        name: '张三',
        sex: '男',
        age: 18,
      };
      Object.defineProperty(Person,'phone',{
        //value: 1234567,指定了get不能出现value
        enumerable: true,
        //writable: true,指定了get不能出现writable
        configurable: true,
        get() {
          return phone_number;
        }
      })
      phone_number = 111222333;//修改phone_number的值
      console.log(Person);
```

![image-20221111001652069](D:\TyporaWorks\图片文件夹存放\image-20221111001652069.png)

可以动态跟着phone_number进行修改了，但是需要访问的时候才会出现



#### Object.defineproperty()方法——set配置项

+ 当有人修改Person对象的phone参数时，get函数就会被调用，且会收到修改的具体值
+ ==注意==，指定了set函数，就不能指定value跟可写属性

```js
      let phone_number = 9999999;
      let Person = {
        name: '张三',
        sex: '男',
        age: 18,
      };
      Object.defineProperty(Person,'phone',{
        //value: 1234567,//指定了get不能出现value
        enumerable: true,
        //writable: true,//指定了get不能出现writable
        configurable: true,
        get() {
          return phone_number;
        },
        set(value) {
          console.log('修改后的phone的值为'+value);
        }
      })
      console.log(Person);
      
```

![image-20221111002726850](D:\TyporaWorks\图片文件夹存放\image-20221111002726850.png)

但是其实没有被修改，因为这里的phone的值是绑定number的，单纯的对phone进行修改，访问phone的时候，它又往get读取，然后获取到number的值

**这样子就可以了**

```js
		set(value) {
          phone_number = value;
          console.log('修改后的phone的值为'+value);
        }
```

