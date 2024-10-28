[TOC]



#### 内置对象

JavaScript中的对象分为三种：自定义对象、内置对象、浏览器对象

前两种是JS基础内容，属于ECMAScript；第三种浏览器对象属于JS独有的，会在JS API讲解

MDN查阅网址：https://developer.mozilla.org/zh-CN/



#### Math对象

不是构造函数，不需要new，用Math.PI来访问圆周率π，用Math.max方法来调用计算最大值方法

```js
document.write(Math.PI);//3.141592653589793
document.write(Math.max(45,8,78,9,7,2));//78
//存在非数值时返回NaN
//括号为空时返回-Infinity
document.write(Math.max(45,8,78,9,7,2,'你好'));//NaN
document.write(Math.max());//-Infinity
```

+ Math.PI——圆周率
+ Math.floor()——向下取整
+ Math.ceil()——向上取整
+ Math.round()——四舍五入，就近取整，注意-3.5结果为-3，4.5结果为5
+ Math.abs()——绝对值
+ Math.max()/Math.min()——最大值最小值

##### 随机数random()

获取一个0-1之间的随机浮点数，

```js
document.write(Math.random());//不跟参数   结果0.2354750904963585
```

##### 利用random()得到一个两数之间的随机整数（包括两数）

```js
min = Math.ceil(min);
max = Math.floor(max);
var ran = Math.floor(Math.random() * (max - min + 1)) + min;
```

封装成函数

```js
function getRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.write(getRandom(1,99));
```

##### 利用随机数来猜大小

```js
function getRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var num = getRandom(1,10);
while(true) {
    var num1 = prompt();
    if (num < num1) {
        alert('大了');
    }
    else if(num > num1) {
        alert('小了');
    }
    else {
        alert('猜对了'+num);
        break
    }
}
```

##### 利用随机数来随机点名

```js
function getRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arr = ['张三','李四','王五','赵六','陈七','钱八','孙久'];
var num = getRandom(0,arr.length-1);//获取0到数组长度-1的一个随机数
document.write(arr[num]);
```



#### 日期对象

是一个构造函数，必须使用new来调用创建我们的日期对象

+ 如果没有参数，返回当前系统的当前时间
+ 参数常用写法
  + 数字型	2022,05,30
  + 字符串型	'2022-5-30 8:8:8'

不带参数

```js
var date = new Date();
document.write(date);
```

```
Mon May 30 2022 00:50:59 GMT+0800 (中国标准时间)
```

带参数

```js
var date = new Date(2022,5,30);//返回的是六月而不是五月
document.write(date);
```

```
Thu Jun 30 2022 00:00:00 GMT+0800 (中国标准时间)
```

```js
var date = new Date('2022-5-30 8:8:8');//返回的是六月而不是五月
document.write(date);
```

```
Mon May 30 2022 08:08:08 GMT+0800 (中国标准时间)
```

##### 格式化日期对象

| 方法名        | 说明                      | 代码              |
| ------------- | ------------------------- | ----------------- |
| getFullYear() | 获取当年                  | obj.getFullYear() |
| getMonth()    | 获取当月（0-11）          | obj.getMonth()    |
| getDate()     | 获取当天日期              | obj.getDate()     |
| getHours()    | 获取当前小时              | obj.getHours()    |
| getMinutes()  | 获取当前分钟              | obj.getMinutes()  |
| getSeconds()  | 获取当前秒钟              | obj.getSeconds()  |
| getDay()      | 获取星期几（周日0-周六6） | obj.getDay()      |

```js
var date = new Date('2022-5-30 8:8:8');
document.write(date.getFullYear()+'年',date.getMonth()+'月',date.getDate()+'日','星期'+date.getDay());

//结果——2022年4月30日星期1
```

改进版

```js
//因为月数少一所以要加1，周几返回的是数字，可以用数组来实现纯中文的输出
var date = new Date('2022-5-30 8:8:8');

var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
document.write(date.getFullYear()+'年',date.getMonth()+1+'月',date.getDate()+'日',week[date.getDay()]);
//结果——2022年5月30日星期一
```

完整版

```js
var date = new Date('2022-5-30 8:8:8');

var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
document.write(date.getFullYear()+'年',date.getMonth()+1+'月',date.getDate()+'日',week[date.getDay()],date.getHours()+'时',date.getMinutes()+'分',date.getSeconds()+'秒');
//结果为——2022年5月30日星期一8时8分8秒
```

##### 获取日期的总的毫秒形式——四种方法

我们经常利用==总的毫秒数==（又叫==时间戳==）来计算时间，因为它更准确

Date总的毫秒数，不是当前毫秒，而是距离1970年1月1日过了多少毫秒

+ ValueOf()
+ getTime()
+ var date1 = +new Date();
+ Date.now()——H5新增的

```js
var date = new Date();
document.write(date.valueOf()+'<br>');// ——方法一
document.write(date.getTime()+'<br>');// ——方法二
document.write(date1+'<br>');// ——方法三
document.write(Date.now());// ——方法四
```

```
1653900278425
1653900278425
1653900278425
1653900278425
```



#### 数组对象

##### 创建数组

```js
var arr1 = [];// 创建一个空数组
var arr2 = [2];// 创建一个数组存放2

var arr1 = new Array();// 创建一个空数组
var arr2 = new Array(2);// 创建一个空间为2的空数组
var arr3 = new Array(2,3);// 创建一个数组，里面存放2,3
```

##### 检测是否为数组——instanceof

```js
var arr = [];
document.write(arr instanceof Array);// 结果为true
```

##### 检测是否为数组——Array.isArray()

```js
var arr = [];
document.write(Array.isArray(arr));// 结果为true
```

##### 添加或删除数组元素的方法

| 方法名            | 说明                                                         | 返回值               |
| ----------------- | ------------------------------------------------------------ | -------------------- |
| push(参数1...)    | 末尾添加一个或多个元素，注意：原数组发生变化                 | 并返回新的长度       |
| pop()             | 删除数组最后一个元素，把数组长度减1，无参数，注意：原数组发生变化 | 返回它删除的元素的值 |
| unshift(参数1...) | 向数组的开头添加一个或多个元素，注意：原数组发生变化         | 并返回新的长度       |
| shift()           | 删除数组的第一个元素，数组长度减1无参数，注意：原数组发生变化 | 并返回第一个元素的值 |

**push()**

```js
var arr = [];
document.write(arr.push(1,2,3,4,'你好')+'<br>');// 返回值为改变后的数组长度
document.write(arr);// 原数组发生改变
```

```
5
1,2,3,4,你好
```

**unshift()**

```js
var arr = [1,2,3,4,5];
document.write(arr.unshift(6)+'<br>');// 返回值为改变后的数组长度
document.write(arr);// 原数组发生改变
```

```
6
6,1,2,3,4,5
```

**pop()**

```js
var arr = [1,2,3,4,5];
document.write(arr.pop()+'<br>');// 返回值为被删除的那个元素
document.write(arr);// 原数组发生改变
```

```
5
1,2,3,4
```

**shift()**

```js
var arr = [1,2,3,4,5];
document.write(arr.shift()+'<br>');// 返回值为被删除的那个元素
document.write(arr);// 原数组发生改变
```

```
1
2,3,4,5
```

##### 筛选数组

把数组的奇偶数区分出来，存放到两个数组

```js
var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2 = [];
var arr3 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr2.push(arr[i]);
    }else {
        arr3.push(arr[i]);
    }
}
document.write(arr2+'<br>');
document.write(arr3);
```

```
2,4,6,8,10
1,3,5,7,9
```

##### 数组排序

| 方法名    | 说明                     | 返回值               |
| --------- | ------------------------ | -------------------- |
| reverse() | 翻转数组，原数组发生改变 | 返回值为翻转后的数组 |
| sort()    | 冒泡排序，原数组发生改变 | 返回值为排序后的数组 |

**reverse()**

```js
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.reverse();
document.write(arr);
```

```
10,9,8,7,6,5,4,3,2,1
```

**sort()**

```js
var arr = [1,3,4,2,9,6,5,8,7];
arr.sort();
document.write(arr);
```

```
1,2,3,4,5,6,7,8,9
```

**sort()的缺点**——只看第一位数排序

```js
var arr = [1,13,44,32,9,6,5,8,7];
arr.sort();
document.write(arr);
```

```
1,13,32,44,5,6,7,8,9
```

**解决办法**

在sort方法里加上一个function，参数为a,b，==返回值为a-b==——==升序==，==返回值为b-a==——==降序==。

```js
var arr = [1,13,44,32,9,6,5,8,7];
arr.sort(function(a,b) {
    return a - b;
});
document.write(arr);
```

```
1,5,6,7,8,9,13,32,44
```

##### 获取数组索引

| 方法名                              | 说明                                                         | 返回值                         |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| indexOf(要查找的值，起始位置(可选)) | 获取值的索引号，从前往后查，有多个相同的值只返回找到的第一个 | 返回值为索引号，不存在则返回-1 |
| lastIndexOf(要查找的值)             | 从后往前查，有多个相同的值只返回找到的第一个                 | 返回值为索引号，不存在则返回-1 |

```js
var arr = [1,13,44,32,9,6,5,8,7];
document.write(arr.indexOf(13));// 有好几个相同的值，只返回第一个
```

```
1
```

```js
var arr = [1,13,44,32,9,6,5,8,7];
document.write(arr.lastIndexOf(5));
```

```
6
```

##### 数组去重（重点案例）

+ 遍历旧数组，如果不在新数组中，就向新数组里添加
+ 循环结束，新数组就是去重后的数组

```js
var oldArr = ['c','a','z','a','x','a','x','c','b'];
var newArr = [];
for (var i = 0; i < oldArr.length; i++) {
    if (newArr.indexOf(oldArr[i]) == -1) {
        newArr.push(oldArr[i]);
    }
}
document.write(newArr);
```

```
c,a,z,x,b
```

##### 数组转化为字符串

| 方法名         | 说明                                       | 返回值         |
| -------------- | ------------------------------------------ | -------------- |
| toString()     | 把数组转换成字符串，逗号分割每一项         | 返回一个字符串 |
| join('分隔符') | 方法用于把数组中的所有元素转换为一个字符串 | 返回一个字符串 |

```js
var arr = [1,2,3,4,5,6,7,8];
document.write(arr.toString());
document.write('<br>');
document.write(arr.join('|'));
```

```
1,2,3,4,5,6,7,8
1|2|3|4|5|6|7|8
```

##### 数组方法

| 方法名   | 说明                                                         | 返回值                 |
| -------- | ------------------------------------------------------------ | ---------------------- |
| concat() | 连接两个或多个数组，不影响原数组                             | 返回一个新数组         |
| slice()  | 数组截取slice(begin,end)，begin为数组下标，包含begin跟end，不影响原数组 | 返回被截取项目的新数组 |
| spilce() | 数组删除splice(从第几个开始，要删除个数)，会影响原数组       | 返回被删除项目的新数组 |

**concat()**

```js
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
document.write(arr1.concat(arr2));
```

```
1,2,3,4,5,6,7,8,9,10
```

**spilce()**

```js
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
document.write(arr1.slice(1,3));//从下标1开始，到下标3结束，不包含end，即[begin,end)
document.write('<br>');
document.write(arr1);// 不影响原数组
```

```
2,3
1,2,3,4,5
```

**splice()**

```js
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
document.write(arr1.splice(0,3));//从下标0开始，到下标3结束，不包含end，即[begin,end)
document.write('<br>');
document.write(arr1);// 影响原数组
```

```js
1,2,3
4,5
```



#### 字符串对象

##### 基本包装类型

为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：String、Number、Boolean。

基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法

```js
var str = 'hello';
document.write(str.length);// 结果为5
//对象才有属性和方法  或者  复杂数据类型才有属性和方法
//为什么简单数据类型的字符串有length属性呢
//基本包装类型：就是把简单数据类型 包装成为  复杂数据类型
//上面的两句代码底层逻辑：

// var temp = new String('hello');//定义复杂数据类型的临时变量temp
// str = temp;// 把temp赋值给str
// temp = null;// 销毁temp
```

##### 字符串的不可变性

```js
var str = 'hello';
document.write(str);
document.write('<br>');
str = 'world';
document.write(str);
```

```
hello
world
```

虽然变量str的值发生了改变，但是其实只是指向的内存空间由'hello'变成了'world'，而不是'hello'的内存空间被'world'占据了，所以'hello'还是存在于内存空间的。

因此不要随意的拼接字符串，因为每次生成新字符串都要申请新的内存空间，而旧的字符串不会被销毁，依然占据着一块内存空间。

##### 根据字符串返回位置

==字符串的所有方法都不会修改字符串本身（字符串本身是不可变的）==，所以每次操作完成都会返回一个新的字符串

| 方法名                   | 说明                                            | 返回值                     |
| ------------------------ | ----------------------------------------------- | -------------------------- |
| indexOf('字符',起始位置) | 查找字符所在字符串的下标,起始位置可选，包含起始 | 找到返回位置，找不到返回-1 |

**indexOf()**

```js
var str = '举杯消愁愁更愁';
document.write(str.indexOf('愁',4));
```

```
4 //从下标4开始，包含了下标4所在的字符
```

##### 案例——查找单个字符出现的位置及次数

```js
var str = 'abdsaasdffasasd';
var key = 0;// 计数器
var j = 0;// 计算次数计数器
var s = 'a';// 需要查找的字符
while(true) {
    
    if ((str.indexOf(s,key)) != -1) {
        document.write(str.indexOf(s,key) + '<br>');
        key = str.indexOf(s,key)+1;
        j++;
    }else {
        break;
    }
}
document.write('次数为'+j);
```

```
0
4
5
10
12
次数为5
```

##### 根据位置返回字符（重点）

| 方法名            | 说明                                                   | 使用                 |
| ----------------- | ------------------------------------------------------ | -------------------- |
| charAt(index)     | 返回指定位置的字符，（index为字符串的索引号）          | str.charAt(0)        |
| charCodeAt(index) | 获取指定位置处字符的ASCII码，（index为字符串的索引号） | str.charCodeAt(0)    |
| str[index]        | 获取指定位置字符，（index为字符串的索引号）            | H5,IE8和charAt()等效 |

```js
var str = 'abcdef123456';
document.write(str.charAt(0)+'<br>');// 返回下标所在字符
document.write(str.charCodeAt(0)+'<br>');// 返回下标所在字符的ASCII码
document.write(str[0]);// 返回下标所在字符
```

```
a
97
a
```

##### 案例——统计出现最多次的字符

做法：

+ 遍历字符串，把每个字符串存储给对象
+ 对象没有该属性就新建为1，有就加1
+ 遍历对象，得到最大值和字符

提示：

```js
var o = {
    age: 0
}
if (o.['age'] != null) {
    document.write('里面有该属性');
}else {
    document.write('里面没有该属性');
}
```

```
里面有该属性
```

核心代码：

```js
var str = 'asdfqwegasdqwedasqdw';
var o = {};
for (var i = 0; i < str.length; i++) {
    var chars = str[i];// chars为当前的临时字符
    if (o[chars] == null) {
        o[chars] = 1;// 不能用o.chars，因为是字符型，所以要用o[]
    }else {
        o[chars]++;
    }
}
for (var key in o) {
    document.write(key+'：'+o[key]+'<br>');
}
```

```
a：3
s：3
d：4
f：1
q：3
w：3
e：2
g：1
```

完整代码：

```js
var str = 'asdfqwegasdqwedasqdw';
var o = {}
for (var i = 0; i < str.length; i++) {
    var chars = str[i];// chars为当前的临时字符
    if (o[chars] == null) {
        o[chars] = 1;// 不能用o.chars，因为是字符型，所以要用o[]
    }else {
        o[chars]++;
    }
}

//因为会存在多个最多字符的情况，所以新建个对象来存放
// 先遍历一遍得出最大值max
var obj = {}
var max = 0;// 最大值临时变量
for (var key in o) {
    if (o[key] > max) {
        max = o[key];
    }
}
// 再次遍历比较是否有多个等于max的值，依次添加在新对象obj里
for (var key in o) {
    if (o[key] == max) {
        obj[key] = max;
    }
}
// 遍历新对象obj
for (var k in obj) {
    document.write(k+':'+obj[k]+'<br>');
}
```

```
d:4
```

##### 字符串操作方法（重点）

| 方法名                                 | 说明                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| concat(str1,str2,str3)                 | 连接两个或多个字符串，等效于+，且+更常用                     |
| substr(start,length)                   | 从start位置（索引号）开始，length取的个数                    |
| slice(start,end)                       | 从start开始，end结束，不包括end                              |
| substring(start,end)                   | 从start开始，end结束，不包括end，等同slice，但是不接受负值   |
| replace('要被替换的字符','替换的字符') | str.replace('a','b)，数字不加引号也可以替换，多个相同字符只会替换第一个，解决方法在下 |
| split('分隔符')                        | str.split('\|')不改变原字符串，空字符为逗号，不加为无间隙，仍能转化为数组 |

```js
var str = '0123456789';
var str1 = str.substr(1,3);// 在2022-6-1已被下划线，可能不常用
document.write(str1+'<br>');
var str2 = str.slice(1,3);
document.write(str2+'<br>');
var str3 = str.substring(1,3);
document.write(str3);
```

```
123
12
12
```

```js
var str = '0123456789';
var str1 = str.replace('0','a');// 不改变原字符串
document.write(str1+'<br>');
var str2 = str.split('');// 不改变原字符串，每个字符为一个数组元素
document.write(str2+'<br>');
var str3 = str.split();// 不改变原字符串，不加分隔符也可以，即无间隙，也仍能转化为数组
//但是这样子，整个字符串为一个数组元素
document.write(str3);
```

```
a123456789
0,1,2,3,4,5,6,7,8,9
0123456789
```

##### replace只能替换第一个的解决方法

```js
var str = 'aaaaaabadshjk';
// replce只能改变相同的第一个字符
var str1 = str.replace('a','b');
document.write(str1 + '<br>');

//这个方法利用循环更改每一个要被替换的字符，直到字符串里不再存在
//该字符，即indexOf=-1,
//每次更改完赋值给原字符串，所以会改变原字符串
//所以可以把原字符串赋值给新的字符串，然后对新字符串进行操作就可以了
var str2 = str;
while (str2.indexOf('a') != -1) {
    str2 = str2.replace('a','哇');
}
document.write(str2);
```

```
baaaaabadshjk
哇哇哇哇哇哇b哇dshjk
```

##### split详解

```js
var str = 'a|sa|sd|d|fas|g|h|h';
var str1 = str.split();//不加分隔符
document.write(str1+'<br>');//即不分割的意思，整个字符串为一个数组元素

var str2 = str.split('');//分隔符为空字符
document.write(str2+'<br>');//每个字符为一个数组变量

var str3 = str.split('|');//以字符串里面的字符为分隔符
document.write(str3);//每个分隔符左右都会被分隔为一个数组元素
```

```
a|sa|sd|d|fas|g|h|h
a,|,s,a,|,s,d,|,d,|,f,a,s,|,g,|,h,|,h
a,sa,sd,d,fas,g,h,h
```

##### 大小写转换

| 方法名        | 说明                                       |
| ------------- | ------------------------------------------ |
| toUpperCase() | 将字符串所有小写转换成大写，不改变原字符串 |
| toLowerCase() | 将字符串所有大写转换成小写，不改变原字符串 |

```js
var str = 'abcdefghijk';
var str1 = 'ABCDEFGHIJK';
var str2 = str.toUpperCase();
document.write(str2+'<br>');

var str3 = str1.toLowerCase();
document.write(str3);
```

```
ABCDEFGHIJK
abcdefghijk
```

