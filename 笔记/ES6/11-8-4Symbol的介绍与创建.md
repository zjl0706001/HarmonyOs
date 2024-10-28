[TOC]

#### Symbol介绍

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入==Symbol==的原因。

ES6 引入了一种新的原始数据类型==Symbol==，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一，其他数据类型是：==undefined==、==null==、布尔值（Boolean）、字符串（String）、数值（Number）、大整数（BigInt）、对象（Object）。

Symbol 值通过==Symbol()==函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

##### 特点：

+ Symbol的值是唯一的，用来解决命名冲突的问题
+ Symbol的值不能与其他数据类型进行运算——==四则运算==、==字符串拼接==、==比较==都不行
+ Symbol定义的对象属性不能使用for...in循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名



#### 创建Symbol——3种方式

```html
    <script>
       //创建方式1
       let s1 = Symbol();
       console.log(s1,typeof s1);
      //值为Symbol(),类型为"Symbol",在内部实现唯一性，外部看不出来

      console.log('===分隔符===');
      //创建方式2
       let s2 = Symbol('小明');//创建的时候传入描述字符串，通过字符串来理解这个变量的作用
       let s3 = Symbol('小明');
       console.log(s2 === s3);//不等，可以理解为姓名跟身份证，姓名可以重复，但是在内部他们的身份证是唯一的

       console.log(s2,s3);

       console.log('===分隔符===');
       //创建方式3——通过这种方式可以创建一模一样的Symbol
       let s4 = Symbol.for('小红');
       let s5 = Symbol.for('小红');
       console.log(s4 === s5);//为真，一模一样
       console.log(s4,s5);
    </script>
```



#### JavaScript的数据类型总结

+ undefined
+ string
+ symbol
+ object
+ null
+ number
+ boolean
+ bigint

