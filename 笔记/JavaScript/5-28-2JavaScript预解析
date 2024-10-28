[TOC]



#### 三个例子

例1

```js
document.write(num);
var num = 10;
```

```
undefined
```

例2

```js
fn();
function fn() {
    document.write(10);
}
```

```
10
```

例3

```js
fn();
var fn = function() {
    document.write(10);
}
```

```
报错
```



**前言**

**JavaScript代码是由浏览器的JavaScript解析器来执行的。JavaScript解析器在运行代码时分为两步：预解析和代码执行**

#### 预解析：

js引擎会把js里面所有的var还有function提升到当前作用域的最前面

预解析分为==变量预解析==和==函数预解析==，又叫==变量提升==和==函数提升==

+ 变量提升	就是把所有的==变量声明==提升到==当前的作用域==最前面，==不提升赋值操作==
+ 函数提升    就是把所有的函数声明提升到最前面，不调用函数

#### 代码执行：

按照代码书写的顺序从上往下执行



##### 预解析案例

案例1

```js
var num = 10;
fun();
function fun() {
    document.write(num);
    var num = 20;
}
//结果为多少？
```

案例2

```js
var num = 10;
function fn() {
    document.write(num);
    var num = 20;
    document.write(num);
}
fn();
//结果为多少？
```

案例3

```js
var a = 18;
f1();
function f1() {
    var b = 9;
    document.write(a);
    document.write(b);
    var a = '123';
}
//结果为多少？
```

案例4

```js
f1();
document.write(c);
document.write(b);
document.write(a);
function f1() {
    var a = b = c = 9;
    document.write(c);
    document.write(b);
    document.write(a);
}
//结果为多少？
```

把案例1做一下变量提升

```js
var num;//把变量声明提升到当前作用域的最前面
function fun() {//把函数声明提升到前面
    var num;//把变量声明提升到当前作用域的最前面
    document.write(num);
    num = 20;
}
num = 10;
fun();
```

```
undefined//所以结果为
```

案例2

```
undefined20
```

案例3

```
undefined9
```

案例4

```js
function f1() {
    //var a = b = c = 9;//相当于var a=9;b=9;c=9;也就是b跟c是没有var声明的
    var a;
    a = 9;//局部变量
    b = 9;//全局变量
    c = 9;//全局变量
    document.write(c);
    document.write(b);
    document.write(a);
}
f1();
document.write(c);
document.write(b);
document.write(a);
```

```
99999，最后一个出错
```

