#### JavaScript是什么

+ JavaScript是运行在客户端的脚本语言，即使用者本地电脑
+ 脚本语言：不需要编译，运行过程有js解释器逐行进行解释并执行
+ 现在也可以基于Noode.js进行服务器端编程



#### JavaScript的作用

+ 表单动态验证（密码强度检测）（js最初产生的目的）
+ 网页特效
+ 服务端开发（Noode.js）
+ 桌面程序（Electron）
+ App（Cordova）
+ 控制硬件-物联网（Ruff）
+ 游戏开发（cocos2d-js）



#### 浏览器执行JS简介

浏览器分为两部分，渲染引擎和js引擎

+ ==渲染引擎==：用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit
+ ==JS引擎==：也称为JS解释器，用来读取网页中的JavaScript代码，对齐处理后运行，比如chrome浏览器的V8



#### JS的组成

+ ECMAScript——JavaScript语法
+ DOM——页面文档对象模型
+ BOM——浏览器对象模型

##### ECMAScript

ECMAScript是由ECMA国际进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JSCript，但实际上后两者是ECMAScript语言的实现和扩展

ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准



##### DOM——文档对象模型

是W3C组织推荐的处理可拓展标记语言的标准编程接口。通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）



##### BOM——浏览器对象模型

它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等





[TOC]



#### JS的三种书写位置

##### 行内式

```js
<input type="button" value="你好" onclick="alert('再见')">
```

直接在按钮里写，onclick是点击，alert是弹出，语句的语义是点击按钮弹出'再见'

**行内式书写的注意点：**

+ 可以将单行和少量js代码写在HTML标签的事件属性中，（比如以on开头的属性），如onclick
+ 注意单双引号的使用：在HTML里推荐使用==双引号==，在JS里推荐使用==单引号==
+ 可读性差：在html中编写大量代码时，不方便阅读
+ 引号易错，引号多层嵌套匹配时，容易弄混
+ 特殊情况下使用



##### 内嵌式

跟内嵌式css一样，在head模块里添加标签进行书写，只不过css是style的标签，而js是script的标签

```html
	<script>
        alert('你好,现在是2022年5月22日21时24分');
    </script>
```



##### 外链式

新建js文件，然后在head里进行链入

```html
<script src="5-22-1.js"></script>
```

**外链式书写的注意点：**

+ 利于HTML页面结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用
+ 引用外部JS文件这个scipt标签中间不可以写代码
+ 适合于JS代码量比较大情况



#### JS注释

单行注释：ctrl + /

多行注释：shift + alt + a#### 输入输出语句

| 方法             | 说明                           | 归属   |
| ---------------- | ------------------------------ | ------ |
| alert(msg)       | 浏览器弹出警示框               | 浏览器 |
| console.log(msg) | 浏览器控制台打印输出信息       | 浏览器 |
| prompt(info)     | 浏览器弹出输入框，用户可以输入 | 浏览器 |



##### prompt

```js
prompt('请输入手机号码');
```

![image-20220522215023155](image-20220522215023155.png)

需要注意的是，prompt输入进来的值是==字符型==的，可以理解为python的input，如果要对数字进行其他操作，需要进行类型转换



##### alert

```js
alert('你好');
```

![image-20220522215157821](image-20220522215157821.png)



##### console

```js
console.log('我是给程序员看的');
```

![image-20220522215528940](image-20220522215528940.png)[TOC]



#### 变量

==var==是JS关键字，用来声明变量（variable是变量的意思）

```js
var kname = "旗木卡卡西";
var age = 30;
var post = 'kakaxi@itcast.cn';
var local = "木叶村";
var wage = 2000;
document.write(kname + age + post + local + wage);
```



##### 可以同时声明多个变量

第一个变量结束后加==逗号==，然后声明第二个变量，直到结束再加==分号==

可以如下换行声明，结构美观

```js
var kname = "旗木卡卡西",
    age = 20,
    post = 'kakaxi@itcast.cn';
```



##### 声明变量的四种情况

+ 不声明
+ 声明不赋值
+ 赋值不声明
+ 声明且赋值

**不声明**

```js
document.write(xx);
```

```
报错//用write是不显示的，可以用console.log
```

**声明不赋值**

```js
var xx;
document.write(xx);
```

```
undefined//未定义的
```

**赋值不声明**

此时是可以使用的，但是不提倡，因为不声明赋值会导致其变为全局变量

```js
xx = "你好";
document.write(xx);
```

```
你好
```

**声明且赋值**

```js
var xx = "你好";
document.write(xx);
```

```
你好
```



##### 变量命名规范

+ 由字母（A-z）、数字（0-9）、下划线（_）、美元符号（$）组成
+ 不能以数字开头
+ 严格区分大小写
+ 中间不能有空格→my  age
+ 不能使用关键字、保留字，特殊：name，虽然不是关键字也不是保留字，但是在浏览器中有特殊的含义
+ 变量名必须有意义，比如年龄→不能是nl，而是age
+ 驼峰命名法，首字母小写，后续单词首字母大写→myNewSchool



#####  为两个变量交换值

```js
var a = 1;
var b = 2;
var temp;
temp = a;
a = b;
b = temp;
document.write("a当前值为",a);
document.write("      ");
document.write("b当前值为",b);
```

不像pytohn那样

```python
a,b = b,a;//就可以交换完成
```

[TOC]



#### 数据类型

同python一样，在变量声明时不需要对其定义类型，而是系统根据其值来对其进行定义



##### 数据类型可变

JavaScript拥有动态类型，同时也就意味着相同的变量可用作不同的类型

```js
var a = 1;//数字型
a = "你好";//字符串型
document.write(a);
```

```
你好
```



#### 简单数据类型

| 简单数据类型 | 说明                       | 默认值    |
| ------------ | -------------------------- | --------- |
| Number       | 数字型，包含整型和浮点型   | 0         |
| Boolean      | 布尔型                     | false     |
| String       | 字符串                     | ""        |
| Undefined    | 声明但不赋值               | undefined |
| Null         | 声明a为控制，var a = null; | null      |



#### 数字型Number

有整型、浮点型、十进制、八进制、十六进制

##### 八进制

在数字前面加==0==表示八进制

```js
var num1 = 010;
document.write(num1);
```

```
8
```

##### 十六进制

在数字前面加==0x==表示十六进制

```js
var num1 = 0xa;
document.write(num1);
```

```
10
```

##### 数字型范围

JavaScript中数值的最大值和最小值

```js
document.write(Number.MAX_VALUE);//1.7976931348623157e+308
document.write(Number.MIN_VALUE);//5e-324，-324次方
```

##### 数字型三个特殊值

+ Infinity：代表无穷大
+ -Infinity：代表无穷小
+ NaN：Not a number，代表一个非数字

**方法isNaN()**

用来判断是否为非数字，是数字返回false，非数字则返回true

```js
document.write(isNaN(1));
document.write(isNaN("你好"));
```

```
false
true
```



#### 字符串型String

用单引号或双引号括起来

因为HTML标签里的属性使用的是双引号，所以js里更推荐使用==单引号==

##### 字符串引号嵌套

js可以嵌套引号，但是要==单嵌套双==，或者==双嵌套单==

```js
var str1 = '我是"程序猿"';
var str2 = "我是'程序猿'";
var str3 = "我是"程序员""//错误写法
var str4 = '我是'程序员''//错误写法
```



##### 字符串转义字符

转义字符都是==\\==开头的，并且都必须在==引号内==

举例：

```js
var xx = "我是一个\n程序员";
document.write(xx);//换行失败，显示空格
console.log(xx);//换行成功
```

```js
var xx = "我是一个程序员";
document.write(xx,"</br>",xx);
//document.write需要用"<br>"进行换行
```

| 转义字符 | 解释                     |
| -------- | ------------------------ |
| \n       | 换行符，n是newline的意思 |
| \\\      | 反斜杠\                  |
| \\\'     | 单引号                   |
| \\\"     | 双引号                   |
| \\t      | tab缩进                  |
| \\b      | 空格，b是blank的意思     |

例子

```js
alert('锄禾日当午，\n汗滴禾下土。\n谁知盘中餐，\n粒粒皆辛苦。');
```

![image-20220523175816427](image-20220523175816427.png)

##### 字符串长度及拼接

**length用来测量字符串长度**

```js
var myname = 'my name is Badboy';
document.write(myname.length);
```

```
17//空格也计算在内
```

**字符串拼接**

+ 多个字符串可以使用==+==进行拼接，拼接方式为==字符串+任何类型=拼接之后的新字符串==
+ 拼接时会把与字符串相加的任何类型转成字符串，再拼接成一个新字符串

例子：

```js
var str1 = '12';
var int1 = 12;
document.write(str1 + int1+'<br>');
document.write(int1 + int1);
```

```
1212
24
```



#### 布尔型Boolean

在参与运算时，true为1，false为0

```js
document.write(false + 1);//1
document.write(true + 1);//2
```



#### Undefined

+ 一个变量声明但未赋值时，默认值为undefined，等同于直接给变量值为undefined
+ 未定义＋字符串结果为字符串
+ 未定义＋数字结果为非数字

例子：

```js
var notdefind1;//声明未赋值
var notdefind2 = undefined;//直接给值
document.write(notdefind1);
document.write('<br>');
document.write(notdefind2);
```

```
undefined
undefined
```

再看看一下几个案例

```js
var notdefind1;//声明未赋值
document.write(notdefind1 + '你好');//未定义＋字符串结果为字符串
document.write('<br>');
document.write(notdefind1 + 1);//未定义＋数字结果为非数字
```

```
undefined你好
NaN
```



#### Null

+ 一个变量未声明未定义时默认值为null，等同于直接给值为null
+ 空值+字符串结果为字符串
+ 空值+数字结果为数字

```js
var blank = null;
document.write('你好'+blank);
document.write('<br>');
document.write(blank+1);
```

```
你好null
1
```



#### 检测变量的数据类型——typeof

==格式：==typeof 空格 变量

```js
var age = 18;
document.write(typeof age);
```

```
number
```

比较特殊的是有

```js
var age = null;
document.write(typeof age);//object
```

```js
var age2 = undefined;
document.write(typeof age);//undefined
```



#### 数据类型转换

使用==表单==、==prompt==获取过来的数据默认都是字符串类型，此时就不能直接简单进行加法运算，而需要转换变量的数据类型。

##### 转换为字符串

| 方式                | 说明                         | 案例                                |
| ------------------- | ---------------------------- | ----------------------------------- |
| .toString()         | 转成字符串                   | var num = 1; alert(num.toString()); |
| String(num)强制转换 | 转成字符串                   | var num = 1; alert(String(num));    |
| 加号拼接字符串      | 和字符串拼接的结果都是字符串 | var num = 1; alert(num+'');         |

需要注意的是，这三种方法并不会改变变量的本质类型，原来是整型，操作完后仍为整型，只在使用时为字符串型，除非重新赋值

**不改变**

```js
var num = 1;//当前类型为number
String(num);
num.toString();
num+'';
document.write(typeof num);//number
```

**改变**

```js
var num = 1;
num = num+'';
document.write(typeof num);//string
```



##### 转换为数字型

| 方式                    | 说明                             | 案例                |
| ----------------------- | -------------------------------- | ------------------- |
| parseInt(string)函数    | 将string类型转成==整数数值型==   | parseInt('18');     |
| pareseFloat(string)函数 | 将string类型转成==浮点数值型==   | parseFloat('3.14'); |
| Number()强制转换函数    | 将string转换为==数值型==         | Number('12');       |
| js隐式转换(- * /)       | 利用算术运算隐式转换为==数值型== | '12' - 0            |

同上，这几种在使用时也不会改变变量的本质类型，仅仅在使用时改变，操作完后仍为原来类型，除非重新赋值，才会使其类型发生本质改变

**不改变**

```js
var age = '18';//当前为string
Number(age);
document.write(typeof age);//string
```

**改变**

```js
var age = '18';//当前为string
age = Number(age);
document.write(typeof age);//number
```



###### **parseInt()**

取整，不进位

```js
parseInt('3.14');//结果为3
parseInt('3.94');//结果为3
parseInt('-3.14');//结果为-3
parseInt('-3.94');//结果为-3
=======================这是一个非常重要的功能=======================
    可以去掉数字后面的字母，但是字母开头的话会为NaN
parseInt('120px');//结果为120
parseInt('120asdasd');//结果为120
```



###### **parseFloat()**

与parseInt基本是类似的，也是可以去数字后面字母

```js
parseFloat('120d213sah');//结果为120
parseFloat('3.14');//结果为3.14
parseFloat('das120d213sah');//结果为NaN
```



###### **Number()**

感觉与parseFloat类似，只是不能去单位

```js
Number('3.14');//结果为3.14
Number('3.14sad');//结果为NaN
```

不过Number()有一个特殊的地方就是可以转换布尔型，其他三个都不行

举例：

```js
document.write(Number(false));//结果为0
document.write(parseFloat(false));//结果为NaN
document.write(parseInt(false));//结果为NaN
document.write(false + '0');//结果为false0
```



###### **- * /**

减号可以理解为字符串连接的逆，字符串+任何都为字符串，那字符串减字符串就是数字了

总结就是，==加==号被字符串占有，==减乘除==被数字占有

```js
document.write('3.14' - 0);//结果为3.14
document.write('100' - '1');//结果为99
document.write('50' * '2');//结果100
document.write('50' / '3');//结果16.666666666666668
```



##### 转换为布尔型

| 方式          | 说明               | 案例            |
| ------------- | ------------------ | --------------- |
| Boolean()函数 | 其他类型转为布尔值 | Boolean('true') |

+ 代表==空的、否定的值==都会被转为==false==，比如==' '、0、NaN、null、undefined==
+ 其余值会被转为==true==
[TOC]



#### 浮点数

浮点数的最高精度是17位小数，但在进行算数计算时其精度远远不如整数

```js
document.write(0.1 + 0.2);//0.30000000000000004
document.write(0.07 * 100);//7.000000000000001

var num1 = 7;
var num2 = 0.07 * 100//7.000000000000001
document.write(num1 == num2);//结果为false
```

**注意：**==不要直接判断两个浮点数是否相等==



#### 自增自减运算符

与c++跟java相同，js支持自增自减，比如

```js
var num1 = 7;
--num1;
document.write(num1);//结果为6
```

**a++,先返回原值再自增**

```js
var num1 = 7;
num1++;
document.write(num1);//结果为8

===================与++a不同之处================
var num1 = 7;
document.write(num1++);//结果为7
```



**++a,先自增再返回原值**

```js
var num1 = 7;
++num1;
document.write(num1);//结果为8

===================与a++不同之处================
var num1 = 7;
document.write(++num1);//结果为8
```



#### 比较运算符

##### 等于==

```js
document.write('55' == 55);//结果为true
//不等于则为         !=
```

**因为==会把字符串型的数据转为数字型**

**不等于则为         !=**



##### 全等于===

要求==值==和==数据类型==都一样，即上述情况不会再发生

```js
document.write('55' === 55);//结果为false
```

**不全等于则为     ===**



#### 逻辑运算符

+ 与&&
+ 或||
+ 非!

```js
document.write(1 || 1<2);//结果为1
document.write(1 < 2 || 1);//结果为true
document.write(1 > 2|| 1 < 2);//结果为true

document.write(1 > 2 && 1 < 2);//结果为false
document.write(1 && 1 < 2);//结果为true
document.write(1 && 2);//结果为2
```

**总结1：**逻辑运算符两边不一定都要表达式，因为在布尔值里，除了一些特殊值其余都为true，而与跟或，前者是全真为真，一假即假，后者是全假为假，一真即真，

&&先判断前者，如果为真再判断后者，确保都为真，然后输出后者，比如代码第6行7行，但是如果前者为假，就不再判断后者了，因为整个表达式都为假了，所以只输出前者

而||会区分情况，前者为真不再往下，前者为假再判断后者，所以它也只会输出一次，前者为真就输出前者就好了，比如代码第1行2行，前者为假就再判断后者，后者为真就只输出后者，比如代码第3行

**总结2：**上面的文字有更简单的说法

**与&&：**

+ 表达式1为真，则返回表达式2
+ 表达式1为假，则返回表达式1

**或||**

+ 表达式1为真，则返回表达式1
+ 表达式1为假，则返回表达式2



##### 短路求值

同总结处，与或非在符号左边值的真假情况不同时有不一样的情况，在求真假时不会影响，但是如果其中是运算符的话就会有影响

**与&&**

```js
var num = 1;
1 && (++num);//前者为真，需要再判断后者是否为真，所以运行了++num
document.write(num);//结果为2

var num = 1;
0 && (++num);//前者为假，不再判断运算符右边
document.write(num);//结果为1
```



**或||**

```js
var num = 1;
1 || (++num);//前者为真，不再判断后者，所以++num没有运行
document.write(num);//结果为1

var num = 1;
0 || (++num);//前者为假，再判断后者是否为假，所以执行了++num
document.write(num);//结果为2
```



#### 赋值运算符

在js中可以+=赋值



#### 运算符优先级

| 优先级 | 运算符     | 顺序                   |
| ------ | ---------- | ---------------------- |
| 1      | 小括号     | ()                     |
| 2      | 一元运算符 | ++  --  !              |
| 3      | 算术运算符 | 先* / % 后 + -         |
| 4      | 关系运算符 | >  >=  >  >=           |
| 5      | 相等运算符 | ==  !=  ===  !等于等于 |
| 6      | 逻辑运算符 | 先&&  后\|\|           |
| 7      | 赋值运算符 | =                      |
| 8      | 逗号运算符 | ,                      |

[TOC]



#### if语句

案例1

```js
if (1<2) {
    document.write('你好');
}
```

案例2

```js
if (1<2) {
    document.write('你好');
} else {
    document.write('你不好');
}
```

案例3

判断年份是平年闰年

```js
var age = prompt('请输入年份');
if (age % 4 == 0 && age % 100 != 0) {
    alert(age+'是闰年');
}else if (age % 400 == 0) {
    alert(age+'是闰年');
} else {
    alert(age+'是平年');
}
```



#### 三元运算符

==语法结构：== 条件表达式 ？ 表达式1 : 表达式2

条件表达式，为真则返回表达式1，为假则返回表达式2

案例1——为真执行前者，为假执行后者

```js
1 > 2 ? document.write('你好') : document.write('你不好');
//结果为你不好
```

案例2——为真返回前者，为假返回后者

```js
var text;
text = 1 < 2 ? '他好' : '他不好';
document.write(text);
//结果为他好
```



#### switch语句

==语法结构：==

```js
switch (值/变量) {
    case 值/变量:
        表达式;
        break;//退出语句，不设置break将会执行下一个case
    case 值/变量:
        表达式;
        break;
    default:
        表达式;//当switch里的值没有一个匹配的上时就执行default
}
```

案例1

```js
var num = prompt('请输入一个数');
switch (num) {
    case '1':
        document.write('这是1');
        break;
    case 2:
        document.write('这是2');
        break;
    case 3:
        document.write('这是3');
        break;
    case 4:
        document.write('这是4');
        break;
    case 5:
        document.write('这是5');
        break;
}
```

当switch里面的值与case后面的值匹配时，就会执行case后面的语句，需要注意的是，在本案例里，对输入进来的数没有进行强转，所以只有输入为1时才能执行，因为1是字符型，而其他的case全是整型。

案例2

```js
var num = prompt('请输入要查询的水果');
switch (num) {
    case '苹果':
        document.write('苹果3.5元一斤');
        break;
    case '香蕉':
        document.write('香蕉2块钱一斤');
        break;
    case '榴莲':
        document.write('榴莲50元一斤');
        break;
    case '香梨':
        document.write('香梨5块钱一斤');
        break;
    case '椰子':
        document.write('椰子10块钱一个');
        break;
    default:
        document.write('没有'+num);
}
```

[TOC]



#### for循环

==语法格式：==

```js
for (初始变化量; 条件表达式; 操作表达式) {
    执行语句//循环体
}
```

案例1

```js
for (var i = 1; i <= 3; i++) {
    document.write('你好');
}
//结果为你好你好你好
```

#### 嵌套for循环

案例1

```js
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= i; j++){
        document.write('@');
    }
    document.write('<br>');
}
```

```
@
@@
@@@
@@@@
@@@@@
@@@@@@
@@@@@@@
@@@@@@@@
@@@@@@@@@
@@@@@@@@@@
```

+ 外层循环执行一次，内层循环执行全部
+ 外层for决定总共几行，内层循环决定总共几列

案例2

```js
var x = prompt('输入打印的行数');
var y = prompt('输入打印的列数');

for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= y; j++){
        document.write('@');
    }
    document.write('<br>');
}
```

案例3——倒三角

```js
for (var i = 10; i >= 1; i--) {
    for (var j = 1; j <= i; j++){
        document.write('@');
    }
    document.write('<br>');
}
```

```
@@@@@@@@@@
@@@@@@@@@
@@@@@@@@
@@@@@@@
@@@@@@
@@@@@
@@@@
@@@
@@
@
```

案例4——打印九九乘法表

```js
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(i+'×'+j+'='+i*j);
        if (i*j<10) {
            document.write('&nbsp&nbsp&nbsp');
        } else {
            document.write('&nbsp&nbsp');
        }
        //上面的if-else语句只是为了打出空格让格式好看点
    }
    document.write('<br>');
}
```

```
1×1=1   
2×1=2   2×2=4   
3×1=3   3×2=6   3×3=9   
4×1=4   4×2=8   4×3=12  4×4=16  
5×1=5   5×2=10  5×3=15  5×4=20  5×5=25  
6×1=6   6×2=12  6×3=18  6×4=24  6×5=30  6×6=36  
7×1=7   7×2=14  7×3=21  7×4=28  7×5=35  7×6=42  7×7=49  
8×1=8   8×2=16  8×3=24  8×4=32  8×5=40  8×6=48  8×7=56  8×8=64  
9×1=9   9×2=18  9×3=27  9×4=36  9×5=45  9×6=54  9×7=63  9×8=72  9×9=81
```

+ 外层for决定行
+ 内层for决定列



#### while循环

同for语句一样，也应该有初始化变量，条件表达式，操作表达式

```js
初始变化量
while (条件表达式) {
    //循环体
    操作表达式
}
```

案例1

```js
var i = 1;//初始变化量
while (i <= 3) {//i<=3是条件表达式
    document.write('你好'+'<br>');
    i++;//操作表达式
}
```

```
你好
你好
你好
```



#### do while循环

==语法格式：==

```js
初始变化量
do {
    //循环体
    //操作表达式
} while (条件表达式)
```

案例1

```js
var i = 1;
do {
    document.write('你好'+'<br>');
    i++;
} while (i <= 3);
```

```
你好
你好
你好
```

+ while是先判断再做
+ do while是先做再判断，所以do while至少会执行一次循环体



#### 关键字continue

立即跳出本次循环，开始下一次循环

案例1

```js
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        sum += i;
    } else {
        continue;
    }
    document.write(i+'能被7整除'+'<br>');
}
document.write('和为'+sum);
```

```
7能被7整除
14能被7整除
21能被7整除
28能被7整除
35能被7整除
42能被7整除
49能被7整除
56能被7整除
63能被7整除
70能被7整除
77能被7整除
84能被7整除
91能被7整除
98能被7整除
和为735
```



#### 关键词break

退出全部循环，即循环结束

案例1

```js
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        sum += i;
    } else {
        break;
    }
    document.write(i+'能被7整除'+'<br>');
}
document.write('和为'+sum);
```

```
和为0
```

[TOC]



#### 数组

+ 创建数组的方式一

```js
var arr = new Array(); //arr为数组名
```

+ 创建数组的方式二

```js
var arr = [];
```



#### 遍历数组

```js
var arr = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}
```

```
1
2
3
4
5
6
7
8
9
10
```



#### 数组长度

```js
arr.length
```



#### 取数组中最大值

```js
var arr = [12,2,3,44,5,65,7,8,99,10];
var max = arr[0];//这里赋值为数组第一个元素，而不是0，因为里面可能不是整型
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < max) {
        continue;
    } else {
        max = arr[i];
    }
}
document.write(max);
```

```
99
```



#### 数组转换为分割字符串

将数组['a','b','c','d','e','f']，转换成字符串，并用其他符号进行分割并输出，例如a|b|c|d|e|f|

```js
var arr = ['a','b','c','d','e','f'];
var str = '';
for (var i = 0; i < arr.length; i++) {
    str += arr[i] + '|';
    document.write(str);
}
```



#### 数组中新增元素

+ 修改length长度新增数组元素——此时新增的是两个undefined元素
+ 通过索引号增加数组元素



**方式一**

```js
var arr = ['a','b','c'];
arr.length = 5;//把长度3修改为5，多个两个undefined元素
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}
```

```
a
b
c
undefined
undefined
```

**方式二**

```js
var arr = ['a','b','c'];
arr[3] = 'e'; 
arr[4] = 'f';
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}
```

```
a
b
c
e
f
```

==注意：==不要直接给数组名赋值，否则里面的数组元素都没了



**案例**

筛选数组arr1中大于等于10的元素并放进输入数组arr2中

**方法一**

```js
var arr1 = [2,0,6,1,77,0,52,0,25,7];
var arr2 = [];
var j = 0;
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 10) {
        arr2[j] = arr1[i];
        j++;
    }
}
document.write(arr2);
```

```
77,52,25
```

**方法二**

区别就在于方法二以新数组的长度为变量，不用再新定义一个计数变量j，也不用j++进行自增了

也可以理解为==arr[arr.length]==永远是空的

```js
var arr1 = [2,0,6,1,77,0,52,0,25,7];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 10) {
        arr2[arr2.length] = arr1[i];      
    }
}
document.write(arr2);
```

```
77,52,25
```



#### 数组排序（冒泡排序）

1.一共需要的趟数，用外层for循环

+ 5个数就需要走四趟
+ 趟数就是数组长度减去1，即arr.length-1

2.每一趟交换次数，用内层for循环

+ 第一趟比较4次
+ 第二趟比较3次
+ 长度就是数组长度减去次数
+ 但是次数是从0开始的，所以就是arr.length-i-1

3.每次是交换两个变量

```js
var arr = [4,5,1,3,2];
for (var i = 0; i <= arr.length-1; i++) {//总共走arr.length-1趟
    for (var j = 0; j <= arr.length-i-1; j++) {
        if (arr[j] > arr[j+1]) {
            var tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }      
    }
}
document.write(arr);
```

```
1,2,3,4,5
```

[TOC]



#### 函数

用==function==来声明函数

**方法1语法：**

```js
function 函数名() { 
    
}
```

**方法2语法：**

```js
var 变量名 = function() {
    //注意，这个变量名并不是函数名，所以这个函数是匿名的
    //可以理解为是指向函数的指针
}
```

方法1例子

```js
function sayName(isName) {
    document.write(isName+'你好');
}

sayName('一西');
```

```
一西你好
```

方法2例子

```js
var fn = function(){
    document.write('你好');
};
fn();
```

+ fn是变量名，不是函数名
+ 函数表达式也可以传递参数
+ 但是如果存在函数调用在函数上面时，方法一可以，方法二不行

#### 函数的形参实参个数匹配问题

在java中，要求形参实参个数必须匹配，而js不一样，js会将实参一一对应形参，多出来的实参就丢弃了

**例子——实参多于形参**

```js
function sayName(num1,num2) {
    document.write(num1+num2);
}
sayName(1,2,3);
```

```
3//实参3不参与运算
```

**例子——形参多于实参**

形参可以看做是不用声明的变量，所以num2是变量，但没赋值，所以值为undefined

```js
function sayName(num1,num2) {
    document.write(num1+num2);
}
sayName(1);
```

```
NaN
```



#### return

```js
function sayName(num1,num2) {
    return num1+num2;
}
document.write(sayName(1,2));
```

```
3
```

##### 注意事项

+ 函数遇到return就会终止函数
+ ==return只能返回一个值==，如果多个值用逗号隔开，以最后一个为准
+ 没有return语句则返回值为==undefined==



#### arguments

当不确定有多少个参数传递时，可以用arguments来获取。arguments是当前函数的一个内置对象，里面存储了传递的所有实参

```js
function fn() {
    console.log(arguments);
    document.write(arguments);
}
fn(1,2,3);
```

```
[object Arguments]//这里是document.write(arguments);的输出结果
```

==arguments==展示形式是一个==伪数组==，因此可以进行遍历。伪数组具有以下特点：

+ 具有length属性
+ 按索引存储数据
+ 不具有数组的push，pop方法

例子

```js
function fn() {
    for (var i = 0; i < arguments.length; i++) {
        document.write(arguments[i]);
    }
}
fn(1,2,3);
```

```
123
```

##### 翻转数组

```js
function fn() {
    var a = [];
    //a = arguments;
    var x = arguments.length-1;
    var j = 0;
    for (var i = x;i >= 0; i--) {
        a[j] = arguments[i];
        j++;
    }
    for (var k = 0; k < a.length; k++) {
        document.write(a[k]);
    }
}
fn(1,2,3,4,5,6,7,8,9);
```

```
987654321
```

当代码3没被注释时，结果为987656789，所以可以看出，js中==数组的赋值是传地址的==，也就是当执行a = arguments时，它们指向的是同一块内存空间



#### 函数的调用

```javascript
function fn1() {
    document.write('我是函数1');
    fn2();
}

function fn2() {
    document.write('我是函数2');
}

//此处运行fn1
fn1();
```

```
我是函数1我是函数2
```



#### 作用域

在js里面就是全局作用域，在函数里面就是局部作用域

根据作用域的不同，变量就分为全局变量跟局部变量

```js
var num = 10;//全局变量
function fn() {
    var num = 20;//局部变量
    document.write(num);
}
document.write(num);
fn();
```

```
1020
```

+ 全局变量当浏览器关闭时才回销毁，比较占用内存资源
+ 局部变量在程序执行完毕就会销毁，比较节约内存资源



##### 全局变量

在全局作用域下声明的变量叫做全局变量

+ 全局变量在代码的任何位置都可以使用
+ 在全局作用域下用var声明的变量就是全局变量
+ 特殊情况下，在函数内部不使用var声明的变量也是全局变量（不建议使用）



##### 块级作用域

现阶段js是没有块级作用域的，js里在es6时才新增的块作用域，块级作用域是包含在{}里的，比如if语句，for语句等里面的作用域就叫做块级作用域

```js
if (true) {
    var num = 10;
}
document.write(num);//在块级作用域外可以访问到里面的变量num
```

```
10
```



##### 作用域链

内部作用域可以访问外部作用域，比如局部作用域跟全局作用域，而函数的嵌套中，内部函数可以访问外部函数的变量，当一个外部函数嵌套一个内部函数，此时外部函数跟全局作用域存在相同的变量名时，内部函数优先访问外部函数的变量，如果外部函数没有这个变量，会再往上查找，这就是作用域链

```js
var num = 10;//全局变量
function fn1() {
    var num = 20;//存在于外部函数的局部变量
    function fn2() {
        document.write(num);
    }
    fn2();
}
fn1();
```

```
20
```

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

[TOC]



#### 对象

在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数组、数值、函数等

对象是由==属性==和==方法==组成的

+ 属性：事物的特征，在对象中用属性来表示
+ 方法：事物的行为，在对象中用方法来表示

#### 为什么需要对象

保存一个值时可以用变量，保存多个值时可以用数组。例如将一个人的信息保存在数组里为

```js
var arr = ['一西','男',170,120];
```

语义是不清晰的，不好分辨其中的含义

js的对象表达结构更为清晰，例如

```js
一西.姓名 = '一西';
一西.性别 = '男';
一西.身高 = 170;
一西.体重 = 120;
person.name = '一西';
person.sex = '男';
person.height = 170;
person.weight = 120;
```



#### 创建对象的三种方式

+ 利用==字面量==创建对象
+ 利用==new Object==创建对象
+ 利用==构造函数==创建对象

##### 字面量

```js
var obj = {
    uname: '一西',
    age: 18,
    sex: '男',
    //里面也可以存方法
    sayHello: function() {
        document.write('你好');
    }
    //属性或者方法是键值对的形式，多个属性或方法后面跟逗号隔开
    //最后一个可以不加逗号
    //对象名.属性名来调用对象的属性
}
```

##### new Object

```js
var obj = new Object();//先创建一个空对象
obj.uname = '一西';//再以新增属性的方式对其添加，结束用分号
obj.age = 18;
obj.sex = '男';
obj.sayHello = function() {
    document.write('你好');
}
```

##### 构造函数

+ 为什么需要构造函数——因为前面两种一次只能创建一个对象
+ 比如一个班10个学生（即10个对象），他们的属性方法是大量相同的，我们可以进行复制
+ 利用函数的方法，重复这些相同的代码，我们把这个函数称为构造函数
+ 构造函数：就是把对象里面一些相同的属性和方法抽象出来封装到函数里

```js
function 构造函数名() {//构造函数名首字母要大写
    this.属性 = 值;
    this.方法 = function() {   
    }
}
```

例子

```js
function Fn(uname,age,sex) {
    this.uname = uname;
    this.age = age;
    this.sex = sex;
}
```

使用时

```js
new 构造函数名();
```

例子

```js
var yixi = new Fn('一西',18,'男');//构造函数不需要return就可以返回结果
```

完整代码

```js
function Fn(uname,age,sex) {
    this.uname = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function(song) {
        document.write(song);
    }
}
var yixi = new Fn('一西',18,'男');
yixi.sing('天梯');
```



##### 调用属性的两种方法

+ 对象名.属性名
+ 对象名['属性名']

```js
document.write(obj.uname);
document.write(obj['uname']);
```

##### 调用方法

+ 对象名.方法名——记得加括号

```js
obj.sayHello();
```



#### 变量—属性、函数—方法的区别

##### 变量—属性--相同点

+ 它们都是用来存储数据的

```js
var num = 10;
var obj = {
    age: 18
}
```

##### 变量—属性--不同点

+ 变量—声明并赋值，使用的时候直接写变量名，单独存在
+ 属性—在对象里面不需要声明，使用的时候是对象.属性

##### 函数—方法--相同点

+ 都是用来实现某种功能，做某件事

##### 函数—方法--不同点

+ 函数—是单独声明并且调用的，函数名()是单独存在的
+ 方法—在对象里面。并且调用的时候要对象.方法名



#### new关键字

+ new构造函数会先在内存里创建一个空对象
+ 然后this关键字会指向这个空对象
+ 再执行构造函数里面的代码，给这个空对象添加属性和方法
+ 然后返回这个新对象（所以构造函数里不需要return）



#### 遍历对象属性

==for in 语句格式==

```js
for (变量 in 对象) {
    
}
```

例子

```js
var obj = new Object();//先创建一个空对象
obj.uname = '一西';//再以新增属性的方式对其添加，结束用分号
obj.age = 18;
obj.sex = '男';
obj.sayHello = function() {
    document.write('你好');
}
for (var k in obj) {//计数器k不给初值，一般命名为k或者key
    //document.write(k+'<br>');//直接输出k得到的是属性名/方法名
    document.write(obj[k]+'<br>');//obj[k]得到的是属性值/方法体
}
```

```
名=========
uname
age
sex
sayHello
```

```
值=========
一西
18
男
function() { document.write('你好'); }
```

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

#### 案例分析

+ 输入的时间（即活动开始时间）减去现在的时间就是剩余的时间，但是不能拿时分去相减，比如05分-25分会是负数。
+ 用时间戳来做，把开始时间的毫秒数减去现在时间的毫秒数，得到的就是剩余时间的毫秒数
+ 把剩余时间转换为天、时、分、秒
+ 转换公式如下
  + d = parseInt(总秒数/60/60/24);	// 计算天数
  + h = parseInt(总秒数/60/60%24);     // 计算小时
  + m = parseInt(总秒数/60%60);    // 计算分
  + s = parseInt(总秒数%60);    //计算当前秒数

例子

```js
function countDown(time) {
    var nowTime = +new Date();// 当前时间毫秒数
    var futureTime = +new Date(time);// 未来时间毫秒数
    var times = (futureTime - nowTime) / 1000;// 剩余时间秒数
    var d = parseInt(times/60/60/24);	// 计算天数
    var h = parseInt(times/60/60%24);     // 计算小时
    var m = parseInt(times/60%60);    // 计算分
    var s = parseInt(times%60);    //计算当前秒数
    return d+'天'+h+'时'+m+'分'+s+'秒';
}

var time = new Date('2022-6-7 0:0:0');
document.write(countDown(time));
```

```
7天6时50分48秒
```

完整版——加了补0

```js
function countDown(time) {
    var nowTime = +new Date();// 当前时间毫秒数
    var futureTime = +new Date(time);// 未来时间毫秒数
    var times = (futureTime - nowTime) / 1000;// 剩余时间秒数
    var d = parseInt(times/60/60/24);	// 计算天数
    d = d < 10 ? '0' + d : d;//用来给天数补0的
    var h = parseInt(times/60/60%24);     // 计算小时
    h = h < 10 ? '0' + h : h;//用来给小时补0的
    var m = parseInt(times/60%60);    // 计算分
    m = m < 10 ? '0' + m : m;//用来给分补0的
    var s = parseInt(times%60);    //计算当前秒数
    s = s < 10 ? '0' + s : s;//用来给秒补0的
    return d+'天'+h+'时'+m+'分'+s+'秒';
}

var time = new Date('2022-6-7 0:0:0');
document.write(countDown(time));
```

```
07天06时47分43秒
```



#### 简单数据类型与复杂数据类型

##### 简单数据类型

+ 简单数据类型又叫基本数据类型或者值类型，因为存储时变量中存储的是值本身，所以叫值类型

+ string、number、boolean、undefined、null

特殊——null：

其他简单数据类型返回的都是本身，比如boolean返回boolean，undefined返回unfinished，但是null返回的是==空对象==

所以，如果有一个变量，打算存储为对象，但是还没想好给什么，可以先赋值为null

##### 复杂数据类型

+ 在存储变量时存储的仅仅是地址（引用），因此又叫做引用数据类型
+ 通过new关键字创建的对象，如对象、数组等



#### 堆和栈

**注意：**JavaScript中没有堆栈的概念，通过堆栈的方式，可以更容易理解代码的一些执行方式。

##### 栈（操作系统）

由操作系统自动分派释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈

==简单数据类型存放到栈里面==

##### 堆（操作系统）

存储复杂类型（对象），一般由程序员分配释放，若程序员不释放，则由垃圾回收机制释放

==复杂数据类型存放到堆里面==



#### 简单数据类型的内存分配

简单数据类型（string、number、boolean、undefined、null）的数据直接存在变量（栈空间）中

#### 复杂数据类型的内存分配

在栈里开辟一个空间存==地址==，然后真正的数据存在堆里面，由地址指向数据，由栈空间指向堆空间



#### 简单数据类型传参

```js
function fn(a) {
    a++;
    document.write(a);
}

var x = 10;
fn(x);
document.write(x)
```

```
11
10
```

![image-20220705142018005](image-20220705142018005.png)



#### 复杂数据类型传参

```js
function Person(name) {
    this.name = name;
}

function f1(x) {
    document.write(x.name+'<br>');//2.这个输出什么
    x.name = '张学友';
    document.write(x.name+'<br>');//3.这个输出什么
}

var p = new Person('刘德华');
document.write(p.name+'<br>');//1.这个输出什么
f1(p);
document.write(p.name);//4.这个输出什么
```

**1.2语句输出**

![image-20220705144913087](image-20220705144913087.png)

**3.4语句输出**

![image-20220705145022523](image-20220705145022523.png)

```
刘德华
刘德华
张学友
张学友
```

#### Web APIs和JS的关联

![image-20220705145529426](image-20220705145529426.png)



![image-20220705145646236](image-20220705145646236.png)

JS基础学习ECMAScript基础语法为后面作铺垫，Web APIs是JS的应用，大量使用JS基础语法做交互效果

![image-20220705150048694](image-20220705150048694.png)

![image-20220705150220688](image-20220705150220688.png)

![image-20220705150353122](image-20220705150353122.png)

#### DOM

![image-20220705150659625](image-20220705150659625.png)

![image-20220705150931104](image-20220705150931104.png)

#### 如何获取页面元素

![image-20220705151623671](image-20220705151623671.png)

#### 根据ID获取

使用==getElementById()==方法可以获取带有ID的元素对象

![image-20220705152038189](image-20220705152038189.png)![image-20220705152919718](image-20220705152919718.png)

![image-20220705153112554](image-20220705153112554.png)



#### 根据标签名获取

通过==getElementsByTagName()==方法可以返回带有指定标签名的==对象的集合==

若找不到标签名，则返回==空的伪数组==

![image-20220705154022554](image-20220705154022554.png)

![image-20220705154039038](image-20220705154039038.png)

![image-20220705154353323](image-20220705154353323.png)

![image-20220705154457074](image-20220705154457074.png)

##### 获取某个父元素下的子标签

比如ul-li跟ol-li，只要获取ol里面的li标签

![image-20220705155429022](image-20220705155429022.png)

**例子**

```html
<body>

    <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ol>

    <ul>
        <li>6</li>
        <li>7</li>
        <li>8</li>
    </ul>

    <script>
        var ols = document.getElementsByTagName('li');
        //获取的ols是一个伪数组，但是用于获取子标签必须是单个对象
        //所以要用数组元素的方式进行使用
        console.log(ols[0].getElementsByTagName('li'));
    </script>

</body>
```

或者是为ol指定id，然后ols = getid，直接(ols.getElementsByTagName('li')也可以



#### 通过HTML5新增的方法获取

![image-20220705161930797](image-20220705161930797.png)

```
document.getElementsByClassName('类名');//根据类名返回元素对象集合
```

##### getElementsByClassName

![image-20220705161011365](image-20220705161011365.png)

![image-20220705161031079](image-20220705161031079.png)

##### querrySelector

什么选择器都可以选

![image-20220705161844762](image-20220705161844762.png)

##### querrySelectorAll

![image-20220705162124602](image-20220705162124602.png)#### 事件概述

JS使我们有能力创建动态页面，而事件是可以被JS侦测到的行为

比如：点击按钮时产生一个事件，然后去执行某些操作

#### 事件三要素

事件源：用来触发事件的对象，比如按钮

事件类型：如何触发事件，比如鼠标经过、鼠标点击

事件处理程序：通过一个函数赋值的方式完成

##### 案例——点击按钮弹出对话框

```html
<body>
    <button id="btn">按钮</button>
    <script>
        var btn = document.getElementById('btn');
        btn.onclick = function() {
            alert('你好');
        }

    </script>
</body>
```

[TOC]



![image-20220721153958076](D:\TyporaWorks\JavaScript\image-20220721153958076.png)

#### innerText

```html
<body>
<button>显示当前系统时间</button>
<div>某个时间</div>

    <script>
       var btn = document.querySelector('button');
       var div = document.querySelector('div');
       btn.onclick = function() {
        div.innerText = '2022-7-21';
       }
    </script>

</body>
```

#### innerHTML

```html
<body>
<div></div>
    <script>
       var div = document.querySelector('div');
       div.innerText = '<strong>今天是：</strong>2022-7-21';
    </script>
</body>
```

```
<strong>今天是：</strong>2022-7-21
```

```html
<body>
<div></div>
    <script>
       var div = document.querySelector('div');
       div.innerHTML = '<strong>今天是：</strong>2022-7-21';
    </script>
</body>
</html>
```

```
今天是：2022-7-21
```

innerHTML跟innerText的区别是一个识别html标签，一个不识别html标签

+ innerText是非标准，是IE发起的
+ innerHTML是W3C标准，使用最多
+ 这两个属性是可读写的，可以获取元素里面的内容
  + innerHTML保留空格、换行跟标签
  + innerText去除空格跟换行，



```html
<body>
<p>
    你好
    <span>123</span>

</p>
    <script>
       var p = document.querySelector('p');
       console.log(p.innerHTML);
    </script>
</body>
```

![image-20220721162659004](D:\TyporaWorks\JavaScript\image-20220721162659004.png)

```html
<body>
<p>
    你好
    <span>123</span>

</p>
    <script>
       var p = document.querySelector('p');
       console.log(p.innerText);
    </script>
</body>
</html>
```

![image-20220721162743207](D:\TyporaWorks\JavaScript\image-20220721162743207.png)



#### 案例

```html
<body>
<button id="one">按钮1</button>
<button id="two">按钮2</button>
<br>
<img src="image/睡熊img.png" alt="">

<script>
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var img = document.querySelector('img');

    one.onclick = function() {
        img.src = 'image/涂鸦img.png';
    }

    two.onclick = function() {
        img.src = 'image/睡熊img.png';
    }

</script>
</body>
```

![image-20220811154309267](C:\Users\Acer\AppData\Roaming\Typora\typora-user-images\image-20220811154309267.png)



#### 分时问候案例

![image-20220811154624732](C:\Users\Acer\AppData\Roaming\Typora\typora-user-images\image-20220811154624732.png)

```html
    <style>
        img {
            width: 300px;
        }


    </style>
</head>
<body>
<img src="image/睡熊img.png" alt="">
<div>上午好</div>

<script>
    //1.获取元素
    var img = document.querySelector('img');
    var div = document.querySelector('div');
    //2.得到当前小时数
    var date = new Date();
    var h = date.getHours();
    //3.判断小时数改变图片和文字信息
    if(h < 12) {
        img.src = 'image/军帽派大星.png';
        div.innerHTML = '早上好';
    } else if (h < 18) {
        img.src = 'image/派大星捂唧唧.png';
        div.innerHTML = '下午好';
    } else {
        img.src = 'image/蟹老板提派大星.png';
        div.innerHTML = '晚上好';
    }
</script>
</body>
</html>
```

![image-20220911203548956](D:\TyporaWorks\图片文件夹存放\image-20220911203548956.png)
#### 表单元素的属性操作

==不能再用innerText修改表单里的，而是有专属的属性value==

利用DOM可以操作以下表单元素的属性：

type、value、checked、selected、disabled

##### value

点击按钮更改表单的value值，如果是调用innerHTML是没用的

```html
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    
    <script>
        //1.获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        //2.注册事件、处理程序
        btn.onclick = function() {
            input.innerHTML = '被点击了';//这个是普通盒子，比如div标签里面的内容
            input.value = '被点击了';//表单修改内容要用value
            //想要表单被禁用，不能再被点击，用到dissabled属性
            //btn.disabled = true;//方法一
            this.disabled = true;//方法二，效果同上，更简单
            //this指向的是事件函数的调用者，即btn.onclick的btn
        }
    
    </script>
    </body>
```

##### disabled

想要某个表单被禁用，不能再点击，则使用disabled

**使表单无法再被输入**

```
input.disabled = 'true';
```

**使表单无法再被点击**

this表示的是函数的调用者，即==btn==

```
this.disabled = 'true';
```



#### 案例：仿京东显示密码

![image-20220911204848155](D:\TyporaWorks\图片文件夹存放\image-20220911204848155.png)

##### 思路：

![image-20220911205001646](D:\TyporaWorks\图片文件夹存放\image-20220911205001646.png)



布局思路：

设置一个div，然后里面一个input，再把小眼睛定位到右边位置，子绝父相，为div位置相对定位

```html
    <style>
        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
        }

        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
        }

        .box img {
            position: absolute;
            top: 4px;
            right: 3px;
            width: 24px;
            width: 24px;
        }


    </style>
</head>
<body>
    <div class="box">
        <label for="">
            <img src="image\spring.jpg" alt="" id="eye">
        </label>
        <input type="password" name="" id="pwd">
    </div>
    
    <script>
        //1.获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        var xxbb = 1;//设置一个初始变量
        //2.注册事件 处理程序
        //眼睛点击事件，把密码框的密码属性改成文本属性
        eye.onclick = function() {
            if (xxbb == 1) {//变量为1时，修改成文本框，图片睁开眼
                pwd.type = 'text';
                eye.src = 'image/winter.jpg';
                xxbb = 0;//事件结束后赋值为初始值的对立面，即0
                
            } else {//当变量为0时，修改为密码框，眼睛闭上
                pwd.type = 'password';
                eye.src = 'image/spring.jpg';
                xxbb = 1;//事件结束后变量赋值为1
            }
             
        }
        
    </script>
    </body>
```

![image-20220911223700058](D:\TyporaWorks\图片文件夹存放\image-20220911223700058.png)

==注意==：

1.JS里面的样式采用驼峰命名法，比如fontSize、backgroundColor

2.JS修改style样式操作，产生的是==行内样式==，CSS权重比较高

```html
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: #002EA6;
        }
    </style>
</head>
<body>

    <div></div>

    <script>
        var div = document.querySelector('div');
        div.onclick = function() {
            this.style.backgroundColor = '#FFE76F'
            this.style.width = '400px';
        }
    </script>
    </body>
```



#### 案例——网页二维码的关闭

![image-20220911225845494](D:\TyporaWorks\图片文件夹存放\image-20220911225845494.png)

思路：设置一个大盒子，里面存放图片跟一个小盒子，再利用定位把小盒子定到大盒子外面，点击一下就关掉

```html
    <style>
        .box {
            position: relative;
            width: 74px;
            height: 88px;
            border: 1px solid #ccc;
            margin: 100px auto;
            font-size: 12px;
            text-align: center;
            color: #f40;
            display: block;
        }

        .box img {
            width: 60px;
            margin-top: 5px;
        }


        .close_btn {
            position: absolute;
            top: -1px;
            left: -16px;
            width: 14px;
            height: 14px;
            border: 1px solid #ccc;
            line-height: 14px;
            font-family: Arial, Helvetica, sans-serif;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="box">
        淘宝二维码
        <img src="image/派大星捂唧唧.png" alt="">
        <i class="close_btn">×</i>
    </div>

    <script>
        //1.获取元素，需要大盒子（被关闭），小盒子（被点击）
        var btn = document.querySelector('.close_btn');
        var box = document.querySelector('.box');
        btn.onclick = function(){
            box.style.display = 'none';
        }
    </script>
    </body>
```



![image-20220911232222318](D:\TyporaWorks\图片文件夹存放\image-20220911232222318.png)





```css
.card {
  width: 190px;
  height: 120px;
  background-color: #363636;
  text-align: center;
  border: 10px solid #363636;
  border-radius: 20px;
  box-shadow: inset 5px 5px 10px #828282, inset -5px -5px 10px #1c1c1c;
  transition: 0.5s;
}

.card:hover {
  height: 254px;
}

.icon {
  width: 60px;
  height: 60px;
  color: red;
  font-size: 30px;
  background-color: #363636;
  margin: 20px auto;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 8px 8px 10px #4f4f4f, -8px -8px 10px #1c1c1c;
}

.content {
  color: #999;
  background-color: #363636;
  padding: 10px;
  margin: 5px 20px;
  border-radius: 8px;
  box-shadow: 8px 8px 10px #4f4f4f, -8px -8px 10px #1c1c1c;
  transform: translateY(-80px) scale(0);
  transition: all 0.5s;
}

.card:hover .content {
  transform: translateY(0) scale(1)
}

```



```js
window.onload = function(){
  let btn = document.querySelector('.btn1');
  let login = document.querySelector('.login');
  let card = document.querySelector('.card')
  let icon = document.querySelector('.icon')
  let content = document.querySelector('.content')
  let h2 = document.querySelector('h2')
btn.onclick = function(){
  login.style.backgroundColor = '#e8e8e8';
  card.style.boxShadow = 'inset 5px 5px 10px #828282, inset -5px -5px 10px #1c1c1c'
  card.style.backgroundColor = '#363636'
  icon.style.boxShadow = '8px 8px 10px #4f4f4f, -8px -8px 10px #1c1c1c'
  icon.style.backgroundColor = '#363636'
  content.style.boxShadow = '8px 8px 10px #4f4f4f, -8px -8px 10px #1c1c1c'
  content.style.backgroundColor = '#363636'
  h2.style.color = 'black'
}
}
```

#### 精灵图定位

淘宝的精灵图都是一排下来的，x轴为0，然后利用for循环不断修改y轴的像素，以此达到修改小li的背景图

![image-20220915233336447](D:\TyporaWorks\图片文件夹存放\image-20220915233336447.png)


##### 遍历图片的核心代码

```js
1.//获取元素
        var lis = document.querySelectorAll('li');
        for(var i = 0; i < lis.length; i++) {
            //让索引号*图片间距，就是li的背景坐标
            var index = i*20;
            lis[i].style.backgroundPosition = '0 -'+index+'px';
        }
```

##### 完整代码

```html
    <style>
        .box {
            width: 250px;
            margin: 100px auto;
        }

        .box li {
            float: left;
            width: 24px;
            height: 24px;
            background-color: pink;
            margin: 15px;
            background: url(image/banner_img.png) no-repeat;
        }


    </style>
</head>
<body>
    <div class="box">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

    </div>

    <script>
        1.//获取元素
        var lis = document.querySelectorAll('li');
        for(var i = 0; i < lis.length; i++) {
            //让索引号*图片间距，就是li的背景坐标
            var index = i*20;
            lis[i].style.backgroundPosition = '0 -'+index+'px';
        }
    </script>
    </body>
```

首先表单需要两个新事件，==获得焦点跟失去焦点，onfocus、onblur==

有一个表单输入框，里面有默认内容“手机”，当点击表单，获得焦点，里面为默认值时则清空

当失去焦点时，里面为空时，则恢复默认值“手机”

而且为默认值时颜色较浅，当用户自己输入时颜色较深

```html
    <style>
        input {
            color: #999;
        }
    </style>
</head>
<body>
<input type="text" name="" id="" value="手机">

    <script>
        //获取元素
        var text = document.querySelector('input');
        //注册事件,获得焦点事件onfocus
        text.onfocus = function() {
            //console.log('得到了焦点');
            if (this.value === '手机') {
                this.value = '';
            }
            this.style.color = '#333';
        }
        //注册事件，失去焦点事件onblur
        text.onblur = function() {
            //console.log('失去了焦点');
            if (this.value === '') {
                this.value = '手机';
                this.style.color = '#999';
            }
        }

    </script>
    </body>
```

有一个盒子，当我们想通过点击修改他的样式属性时，当前的做法为

注册点击事件，将所需要的css逐个添加

```javascript
        //获取元素
        var test = document.querySelector('div');
        //注册事件
        test.onclick = function() {
            this.style.width = '100px';
            this.style.height = '100px';
            this.style.backgroundColor = 'pink';
        }
```

我们可以通过js修改元素的大小、颜色、位置等样式,上述是第一种

```javascript
element.style //行内样式操作
element.className//类名样式操作
```

我们可以通过第二种进行修改

```javascript
//先在css设置好样式
        .change {
            background-color: pink;
            width: 100px;
            height: 100px;
            font-size: 20px;
        }
        
//在js里通过className将类名修改成change
        var test = document.querySelector('div');
        test.onclick = function() {
            this.className = 'change';
        }
```

==但是如果只想修改某些样式，而采用修改类名会完全覆盖住以前的样式，所以我们可以采用**添加类名，而不是修改类名**==

```html
    <style>
        .first {
            width: 200px;
            height: 200px;
            background-color: antiquewhite;
            font-style: italic;
            border-radius: 5%;
        }

        .change {
            background-color: pink;
            width: 100px;
            height: 100px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="first">文本</div>

    <script>
        var test = document.querySelector('div');
        test.onclick = function() {
            this.className = 'first change';//css的多类名选择器
        }

    </script>
    </body>
```

采用==this.className = 'first change';==，则相同类型的样式会被覆盖，没有新的样式会被保留，而原来的==this.className = 'change';==则是完全覆盖，就算新的样式没有，也会把旧的覆盖掉有一个密码表单，获得焦点不代表什么，要等失去焦点才开始判断

1.失去焦点则开始判断密码是否符合标准

2.输入正确则==修改p内容。修改图片==

3.输入错误则==修改p内容，修改图片==

```html
    <style>
        div {
            width: 600px;
            margin: 100px auto;
        }

        /*默认的提示信息*/
        .message {
            display: inline-block;
            font-size: 12px;
            color: #333;
            background: url(/image/winter.jpg) no-repeat left center;
            padding-left: 20px;
        }

        /*错误的提示信息*/
        .wrong {
            color: red;
            background: url(/image/summer.jpg);
        }

        /*正确的提示信息*/
        .right {
            color: green;
            background: url(/image/spring.jpg);
        }
    </style>
</head>
<body>
    <div class="register">
        <input type="password" name="" id="" class="ipt">
        <p class="message">请输入6-16位密码</p>

    </div>

    <script>
        //获取元素
        var ipt = document.querySelector('.ipt');
        var message = document.querySelector('.message');
        //注册事件
        ipt.onblur = function() {
            if (6 < this.value.length && this.value.length < 16) {
                
                //console.log('正确');
                message.className = 'message right';
                message.innerHTML = '密码格式正确';
            } else {
                message.className = 'message wrong'
                message.innerHTML = '密码位数不对，请重新输入';
            }
        }

    </script>
    </body>
```



#### 操作元素总结

![image-20220925201926004](D:\TyporaWorks\图片文件夹存放\image-20220925201926004.png)



如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法

1.所有元素全部清除样式（干掉其他人）

2.为当前元素设置样式（留下自己）

3.注意顺序不能颠倒

![image-20220925203829480](D:\TyporaWorks\图片文件夹存放\image-20220925203829480.png)

```html
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>

    <script>
        //1.获取所有按钮元素
        var btns = document.getElementsByTagName('button');
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                //console.log('你好');
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
                }
                this.style.backgroundColor = 'pink';
            }
        }
    </script>
    </body>
```

点击图片，将当前的页面背景改为当前图片

**核心算法：**把当前图片的src路径取过来，给body做背景

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background: url(/image/banner_img.png) no-repeat center top;
        }

        li {
            list-style: none;
        }

        .baidu {
            overflow: hidden;
            margin: 100px auto;
            background-color: #fff;
            width: 410px;
            padding-top: 3px;
        }

        .baidu li {
            float: left;
            margin: 0 1px;
            cursor: pointer;
        }

        .baidu img {
            width: 100px;
        }
    </style>
</head>
<body>
    <ul class="baidu">
        <li><img src="/image/banner_img.png" alt=""></li>
        <li><img src="/image/集美大学1.jpg" alt=""></li>
        <li><img src="/image/集美大学2.jpg" alt=""></li>
        <li><img src="/image/涂鸦img.png" alt=""></li>
    </ul>
    <script>
        //获取元素
        //取到.baidu这个ul，然后再取里面所有的img，即imgs是伪数组
        var imgs = document.querySelector('.baidu').querySelectorAll('img');
        //循环注册事件
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                document.body.style.backgroundImage = 'url('+this.src+')';
            }
        }
    </script>
    </body>
```

新的鼠标事件

==鼠标经过——onmouseover==

==鼠标离开——onmouseout==

有一个表格table，第一行设为表头（thead），下面设为tbody，只有在tbody里才会变色

核心思路：鼠标经过tr行时，当前行变背景颜色，鼠标离开时去掉当前的背景颜色

```html
    <style>
        table {
            width: 800px;
            margin: 100px auto;
            text-align: center;
            border-collapse: collapse;
            font-size: 14px;
        }

        thead tr {
            height: 30px;
            background-color: skyblue;
        }

        tbody tr {
            height: 30px;
        }

        tbody td {
            border-bottom: 1px solid #d7d7d7;
            font-size: 12px;
            color: blue;
        }

        /*设置一个新的类名，里面存放一个背景颜色样式，为鼠标经过时使用*/
        .bg {
            background-color: tomato;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>代码</th>
                <th>名称</th>
                <th>最新公布净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>231</td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>231</td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>231</td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>231</td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>231</td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>231</td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
        </tbody>
    </table>
    <script>
        //获取元素 获取的是tbody里面所有的行
        var trs = document.querySelector('tbody').querySelectorAll('tr');
        //利用循环注册事件
        for (var i = 0; i < trs.length; i++) {
            trs[i].onmouseover = function() {
                //console.log('你好');
                //this.className = 'bg';//上面关于背景色的类名，下面也要是关于背景色的类，或者取消类
                this.style.backgroundColor = 'tomato';//上面是直接设置颜色，下面也要是直接设置颜色
            }
            trs[i].onmouseout = function() {
                //this.className = '';
                this.style.backgroundColor = '#fff';
            }
        }
        //两个事件都要弄在for循环里，因为每个行都要设置鼠标经过和离开事件
        //鼠标经过为tr设置一个关于背景色的css类，鼠标消失时再将其类取消
        //不要设置类，然后消失时设置颜色，因为style.backgroungColor是行内式，优先级高

    </script>
    </body>
```

![image-20220927144110572](D:\TyporaWorks\图片文件夹存放\image-20220927144110572.png)

**要求：点击表头复选框则会全选，再点击则全取消**

思路：点击表头复选框，如果属性checked是true，则将所有的表单checked改为true

反之，如果是false，则循环改为false

获取两个元素：

+ 表头的复选框input
+ 表身的所有input构成的伪数组

#### 完整代码

```html
    <style>
        table {
            width: 800px;
            margin: 100px auto;
            text-align: center;
            border-collapse: collapse;
            font-size: 14px;
        }

        thead tr {
            height: 30px;
            background-color: skyblue;
        }

        tbody tr {
            height: 30px;
        }

        tbody td {
            border-bottom: 1px solid #d7d7d7;
            font-size: 12px;
            color: blue;
        }

    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="" id="j_cbAll">
                </th>
                <th>名称</th>
                <th>最新公布净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody id="j_tb">
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
        </tbody>
    </table>
    <script>
        var j_cbAll = document.getElementById('j_cbAll');
        var j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
        j_cbAll.onclick = function() {
            if(this.checked == true) {
                for(var i = 0; i < j_tbs.length; i++) {
                    j_tbs[i].checked = true;
                }
            }else {
                for(var i = 0; i < j_tbs.length; i++) {
                    j_tbs[i].checked = false;
                }
            }
        }
    </script>
    </body>
```



要求：在上面的基础上，只要有一个复选框是空的，则取消表头复选框，只要复选框都是勾上的，则把表头复选框也够上

思路：

+ 注册小复选框的点击事件，每次点击都会判断所有的复选框，只要有一个为空，则将表头复选框改为空
+ 在循环里设置一个变量，只要一次都未执行“表头复选框改为空”，代表小复选框都是勾上的状态，当循环结束后，依据该变量，将表头复选框勾上



**前部分做的是表头复选框影响小复选框，后半部分做的是小复选框影响表头复选框**

#### 完整代码

```html
    <style>
        table {
            width: 800px;
            margin: 100px auto;
            text-align: center;
            border-collapse: collapse;
            font-size: 14px;
        }

        thead tr {
            height: 30px;
            background-color: skyblue;
        }

        tbody tr {
            height: 30px;
        }

        tbody td {
            border-bottom: 1px solid #d7d7d7;
            font-size: 12px;
            color: blue;
        }

    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="" id="j_cbAll">
                </th>
                <th>名称</th>
                <th>最新公布净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody id="j_tb">
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>213</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
        </tbody>
    </table>
    <script>
        var j_cbAll = document.getElementById('j_cbAll');
        var j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
        j_cbAll.onclick = function() {
            if(this.checked == true) {
                for(var i = 0; i < j_tbs.length; i++) {
                    j_tbs[i].checked = true;
                }
            }else {
                for(var i = 0; i < j_tbs.length; i++) {
                    j_tbs[i].checked = false;
                }
            }
        }
//判断小复选框是否都为true，只要有一个不是，则取消表头复选框的true
        for(var i = 0; i < j_tbs.length; i++) {
            j_tbs[i].onclick = function() {
                /*if(j_tbs[i].checked == false) {
                    j_cbAll.checked = false;
                }*/
                //要注册完再进行一轮循环判断，而不是注册的同时判断
                var LorR = true;//用来判断是否循环结束后是否有小框未全选的情况
                //这段for语句是用来判断小框有没有全选，没有的话将表头复选框改为false
                //可是这样子，后面再将小框逐个勾选，表头框不会再被选上，所以就是有取消，但没考虑恢复
                //设置一个变量，当for语句里的if一句也没被执行时，在结束以后将表头复选框勾上
                //或者再弄一遍for循环也行，false都改为true就行
                for(var i = 0; i < j_tbs.length; i++) {
                    if(j_tbs[i].checked == false) {
                    j_cbAll.checked = false;
                    LorR = false;
                    //只要有一个是false就直接break了，没必要全判断了
                    break;
                }
                }
                if (LorR == true) {
                    j_cbAll.checked = true;
                }
                    }
            }
    </script>
    </body>
```

#### 获取元素的属性值

+ ==element.属性——方式1==
+ ==element.getAttribute('属性');——方式2==

比如想获得一个div的id，一般是这样的

```html
<body>
    <div id="demo">

    </div>

    <script>
        var demo = document.querySelector('div');
        console.log(demo.id);//方式1
        console.log(demo.getAttribute('id'));//方式2

    </script>
    </body>
```

#### 引入自定义属性概念

设置了一个自定义属性**phone_index**，要获取它的值，要用==getAttribute==

```html
    <div id="demo" phone_index="1"></div>
```

```js
		var demo = document.querySelector('div');
        console.log(demo.getAttribute('phone_index'));//方式2
```

#### 区别

+ element.属性   获取内置属性值（元素自带的属性）

+ element.getAttribute('属性');  (主要用来获得自定义的属性，我们程序员自定义的属性)



#### 设置属性值

**属性存在就是修改，属性不存在就是新增**

+ ==element.属性 = '值'；==——旧方法
+ ==element.setAttribute('属性'，'值');==——新方法，主要针对自定义属性

比如想将div的id由demo改成test

##### 旧方法

```js
		var demo = document.querySelector('div');
        demo.id = 'test';//以前的方法
```

##### 新方法

```html
<body>
    <div id="demo" phone_index="1"></div>

    <script>
        var demo = document.querySelector('div');
        demo.id = 'test';//以前的方法
        demo.setAttribute('id','demo2');//新方法，主要针对自定义属性，比如phone_index
        demo.setAttribute('phone_index',999);
    </script>
    </body>
```

#### 移除属性

```js
demo.removeAttribute('phone_index');
```

![image-20220927232508814](D:\TyporaWorks\图片文件夹存放\image-20220927232508814.png)



**要求：**

点击各个模块，（1）背景颜色会换成红色，（2）然后展示模块的内容

**（1）**

```html
<div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
```

获取lis元素，循环注册li的点击事件，利用排他算法，用for循环将样式清除，最后留下this，设置类

**（2）**

```html
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>
        </div>
```

同样，获取items元素，然后在li的点击事件里，for循环1用来清除li的样式，再设置一个兄弟级别for循环2，把item的样式通通设置为不显示，最后在留下自己时，在留下this下面，写上一句留下当前的item，为其设置样式为‘block‘

**但是点击事件有this，而item是不相关的，怎么判断是哪个item呢**

为li设置自定义属性index，循环设置，然后利用getAttribute获取值，再将items[index]的display设置为块级就行



#### 完整代码

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .tab {
            width: 978px;
            margin: 100px auto;
        }
        
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }
        
        .item_info {
            padding: 20px 0 0 20px;
        }
        
        .item {
            display: none;
        }

        .item_new {
            display: block;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>

        </div>
    </div>
    <script>
        var tab_list = document.querySelector('.tab_list');
        var lis = tab_list.querySelectorAll('li');
        var items = document.querySelector('.tab_con').querySelectorAll('div');
        //为lis设置索引值——开始
        for (var i = 0;i < lis.length;i++) {
            lis[i].setAttribute('index',i);
        }
        //为lis设置索引值——结束
        for (var i = 0;i < lis.length;i++) {
            lis[i].onclick = function() {
                for (var i = 0;i < lis.length;i++) {
                    lis[i].className = '';
                }
                for (var j = 0; j<items.length;j++) {
                        items[j].style.display = 'none';
                    }
                this.className = 'current';
                var index = this.getAttribute('index');
                console.log(index);
                items[index].style.display = 'block';
            }
            
        }

       

    </script>
</body>
```

#### 为什么使用自定义属性

比如上个案例的index属性，是为了保存并使用数据，有些数据可以保存在页面中而不用保存在数据库中

**有些自定义属性容易引起歧义，不确定是自定义属性还是内置属性**

```html
<div hello="20"></div>
<script>
var div = document.querySelector('div');
console.log(div.hello);//做法是错的，自定义属性只能通过get获取
console.log(div.getAttribute('hello'));//正确做法
</script>
```

**所以H5规定，自定义属性要以==data-==作为属性名开头并且赋值**

比如

```html
<div data-hello='20'></div>
```

#### H5新增的自定义属性获取方法(只能获取data-开头的)

**方式1：**==element.dataset.自定义属性==   //记得去掉data-

**方式2：**==element.dataset['自定义属性']==   //记得去掉data-

```html
<div data-hello="20"></div>
<script>
var div = document.querySelector('div');

//H5新增方法
console.log(div.dataset.hello);
</script>
```

**注意：**dataset是一个==集合==，里面存放了以data-开头的自定义属性

```js
var div = document.querySelector('div');
console.log(div.dataset);
```

既然是集合，除了上述的div.dataset.hello方式，还可以

```html
<div data-hello="20"></div>
<script>
var div = document.querySelector('div');

//H5新增方法
console.log(div.dataset['hello']);
</script>
```

#### 连续英文的自定义属性该如何获取

例如

```html
<div data-hello-world="20"></div>
```

如果是==get方式==，则

```js
div.getAttribute('data-hello-world');
```

如果是==dataset方式==，则

```js
div.dataset.helloWorld
```

**将hello-world改成以驼峰命名法形式的连续英文**，索引形式获取同理

```js
div.dataset['helloWorld']
```



#### H5新增与get方法的区别

+ get任意获取，没有兼容性问题
+ dataset只兼容ie 11以上，而且==只支持获取data-开头的自定义属性==#### 为什么学习节点操作

![image-20220929121029653](D:\TyporaWorks\图片文件夹存放\image-20220929121029653.png)

```html
<!DOCTYPE html>
<html lang="en">
       //空格——文本节点
<head>//标签——元素节点
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
   <div class="box"></div>//class='box'——属性结点
    <script>

    </script>
</body>   
```

**所以页面中所有都是节点**

#### 节点概述

![image-20220929122617399](D:\TyporaWorks\图片文件夹存放\image-20220929122617399.png)

一般的，节点至少拥有nodeType（节点类型），nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

例如

```html
<body>
   <div class="box"></div>
    <script>
        var box = document.querySelector('.box');
        console.dir(box);
    </script>
</body>
```

![image-20220929123225728](D:\TyporaWorks\图片文件夹存放\image-20220929123225728.png)

**注意：**

+ 元素节点nodeType为1
+ 属性结点nodeType为2
+ 文本节点nodeType为3（文本节点包含文字、空格、换行等）
+ ==在实际开发中，节点操作主要操作的是元素节点==



#### 节点层级

![image-20220929124130463](D:\TyporaWorks\图片文件夹存放\image-20220929124130463.png)

##### 父级节点

==node.parentNode==

```html
<body>
   <div class="box">
        <span class="small_box"></span>
   </div>
    <script>
        var small_box = document.querySelector('.small_box');
        console.log(small_box.parentNode);
    </script>
</body>
```

在页面结构中，span的父亲是div，先用querySelector得到span，再利用span的parentNode获取父亲节点

**注意：**

+ ==parentNode得到的是离得最近的父亲节点==，比如三层嵌套，最底层得到的是第二层，因为第一层算是爷爷
+ 如果找不到父节点则返回为null

#### 子节点

##### 方法一

==parentnode.childNodes==（标准）——不常使用

```html
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        var lis = ul.childNodes;
        console.log(lis);
    </script>
</body>
```

```
NodeList(9)
0: text
1: li
2: text
3: li
4: text
5: li
6: text
7: li
8: text
length: 9
```

为什么会有九个呢，因为ul后面换行，是一个文本节点，然后li，li后再一个换行，总共五个换行加上4个li

有这么多节点，但是只需要其中的元素节点，需要用到上述的nodeType进行筛选

```js
    <script>
        var ul = document.querySelector('ul');
        var lis = ul.childNodes;
        //console.log(lis);
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].nodeType == 1) {
                console.log(lis[i]);
            }
        }
    </script>
```

```
<li></li>
<li></li>
<li></li>
<li></li>
```

**这样子就可以筛选出元素节点了**

##### 方法二

==parentNode.childern==（非标准）——大量使用

**它是一个只读属性，返回所有的子元素节点，它只返回子元素节点，其余节点不返回。**

但是如果每次获取子节点还有进行筛选，太过麻烦，于是有了方法二，即使它是一个非标准的，不是正式的规定用法，但是兼容于各个浏览器，可以正常使用

```js
    <script>
        var ul = document.querySelector('ul');
        var lis = ul.children;
        console.log(lis);
    </script>
```

```
HTMLCollection(4) [li, li, li, li]
0: li
1: li
2: li
3: li
length: 4
```

#### 获取子节点的头和尾——不常用

##### 头节点——第一个==子节点==

==parentNode.firstChild==——获取的是第一个子节点，例如在四个li，总共9个节点中，它获取的是第一个节点，即文本节点

##### 尾节点——最后一个==子节点==

==parentNode.lastChild==

**例子**

```html
<body>
    <ul>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        console.log(ul.firstChild);//返回的是第一个子节点，即ul后的换行——text节点
        console.log(ul.lastChild);//同上同理
    </script>
</body>
```

##### **常规做法**——也是最通用的做法

因为方法一无法只获取元素节点

方法二存在兼容性问题

```html
<body>

    <ul>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
    </ul>
    <script>

        var ul = document.querySelector('ul');
        var lis = ul.children;//因为这里用的是children，所以取到了li，如果用的是childNode，也会同上
        console.log(lis[0]);//常规做法也可以——获取lis数组的头
        console.log(lis[lis.length-1]);//获取lis数组的尾，即lis.length-1
    </script>
</body>
```

#### 获取子节点的头和尾——常用

***注意：存在兼容性问题，只能在IE9以上使用***

**头节点——第一个==元素节点==**

==parentNode.firstElementChild==

##### 尾节点——最后一个==元素节点==

==parentNode.lastElementChild==

**例子**

```html
<body>
    <ul>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        console.log(ul.firstElementChild);//返回的是第一个元素节点，即跳过换行这个文本节点，选到第一个元素节点
        console.log(ul.lastElementChild);//同上同理
    </script>
</body>
```

#### 完整代码

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        // // 1. 获取元素
        // var nav = document.querySelector('.nav');
        // var lis = nav.children; // 得到4个小li
        // // 2.循环注册事件
        // for (var i = 0; i < lis.length; i++) {
        //     lis[i].onmouseover = function() {
        //         this.children[1].style.display = 'block';
        //     }
        //     lis[i].onmouseout = function() {
        //         this.children[1].style.display = 'none';
        //     }
        // }









        var nav = document.querySelector('.nav');
        var lis = nav.children;//得到亲儿子的li
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function() {
                this.children[1].style.display = 'block';//这里的this是4个li，里面有两个元素，即a跟ul,然后选择儿子元素节点，第一个是a，第二个是ul，所以是chiledern[1]
            }

            lis[i].onmouseout = function() {
                this.children[1].style.display = 'none';
            }
        }
    </script>
</body>
```



#### 结构布局

设置一个无序列表，里面存放4个li，横向排放，当列表

li里面存放一个a，使其可以点击，再存放一个无序列表ul，ul里面存放多个li用来显示#### 兄弟节点——不常用

==node.nextSibling==——下一个兄弟节点，包含元素节点、文本节点，找不到返回null

==node.previousSibling==——上一个兄弟节点，包含元素节点、文本节点，找不到返回null

```html
<body>
    <div>我是div</div>
    <span>我是span</span>
    <script>
        var div = document.querySelector('div');
        console.log(div.nextSibling);//输出的是文本节点，因为nextSibling也包括元素节点，文本节点，而div后面是一个换行
    </script>
</body>
```

#### 兄弟节点——常用

**只获取元素节点的兄弟节点**

==node.nextElementSibling==——下一个兄弟节点，只选元素节点，找不到返回null

==node.previousElementSibling==——上一个兄弟节点，只选元素节点，找不到返回null

**注意：**存在兼容性问题，仅在IE9以上支持



#### 解决办法

自己封装一个函数，里面使用node.nextSibling，然后利用nodeType进行筛选元素节点，最后返回找到的节点，找不到返回null#### 创建节点

==document.createElement('tagName')==

document.createElement()方法创建有tagName指定的HTML

元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为==动态创建元素节点==

```js
var li = document.createElement('li');
```

虽然创建了，但是并没有进行添加到页面中，所以此时在页面中还看不到该节点



#### 添加节点

==node.appendChild(child)==——追加方式添加

node.appendChild()方法将一个节点添加到==父节点==的==子节点==列表==末尾==。类似于CSS里面的after伪元素。

**node是父节点，child是父级的子节点**

```html
<body>
   <ul></ul>
    <script>
        var ul = document.querySelector('ul');
        var li = document.createElement('li');
        ul.appendChild(li);
    </script>
</body>
```

例子2

```html
<body>
   <ul>
    <li>我是li1</li>
    <li>我是li2</li>
    <li>我是li3</li>
   </ul>
    <script>
        var ul = document.querySelector('ul');
        var li = document.createElement('li');
        ul.appendChild(li);
    </script>
</body>
```

![image-20220929224504180](D:\TyporaWorks\图片文件夹存放\image-20220929224504180.png)

会添加到子节点的末尾



例子3

```html
<body>
   <ul>
    <li>我是li1</li>
    <li>我是li2</li>
    <li>我是li3</li>
   </ul>
    <script>
        var ul = document.querySelector('ul');
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        ul.appendChild(li1);
        ul.insertBefore(li2,ul.children[0]);//（新建的节点，需要插在谁前面）
        //ul.children是ul的所有元素节点，插在他们的最前面
    </script>
</body>
```

![image-20220929225214418](D:\TyporaWorks\图片文件夹存放\image-20220929225214418.png)

插在某一个元素前面



#### 总结

想要在已有的页面动态添加一个新元素，需要两步

+ 新建一个元素节点
+ 把这个元素节点进行添加![image-20220929231804170](D:\TyporaWorks\图片文件夹存放\image-20220929231804170.png)

**要求：**输入在文本框的文本，点击发布会生成一个li，显示在下面，如果没有内容，会弹出提示

+ 设置一个文本框，一个按钮，一个ul
+ ul为空，为后续的添加li做准备
+ 需要获取文本框文本——获取元素文本框
+ 需要点击按钮发布——获取元素按钮框
+ 需要在ul添加li，获取元素ul
+ 设置按钮点击事件，如果文本内容为空，弹出提示
+ 如果文本内容不为空，则将文本框的文本赋值给li的内容
+ 然后将li通过方法，添加在前——ul.insertBefore(li, ul.children[0]);
+ 或者添加在后——ul.appendChild(li);



#### 完整代码

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            padding: 100px;
        }
        
        textarea {
            width: 200px;
            height: 100px;
            border: 1px solid pink;
            outline: none;
            resize: none;
        }
        
        ul {
            margin-top: 50px;
        }
        
        li {
            width: 300px;
            padding: 5px;
            background-color: rgb(245, 209, 243);
            color: red;
            font-size: 14px;
            margin: 15px 0;
            list-style: none;
        }

        button {
            display: block;
            width: 200px;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // // 1. 获取元素
        // var btn = document.querySelector('button');
        // var text = document.querySelector('textarea');
        // var ul = document.querySelector('ul');
        // // 2. 注册事件
        // btn.onclick = function() {
        //     if (text.value == '') {
        //         alert('您没有输入内容');
        //         return false;
        //     } else {
        //         // console.log(text.value);
        //         // (1) 创建元素
        //         var li = document.createElement('li');
        //         // 先有li 才能赋值
        //         li.innerHTML = text.value;
        //         // (2) 添加元素
        //         // ul.appendChild(li);
        //         ul.insertBefore(li, ul.children[0]);
        //     }
        // }
        
            var btn = document.querySelector('button');
            var textarea = document.querySelector('textarea');
            var ul = document.querySelector('ul');
            btn.onclick = function() {
                var li = document.createElement('li');
                if (textarea.value == '') {
                    alert('请输入内容');
                } else {
                    li.innerHTML = textarea.value;
                    ul.appendChild(li);
                }
            }

    </script>
</body>
```

#### 删除节点

==node.removeChild(child)==

node.removeChild()方法从DOM中删除一个子节点，返回删除的节点

例子

```html
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    
    var ul = document.querySelector('ul');
    ul.removeChild(ul.children[0]);//删除父节点ul的第一个儿子元素节点
	ul.removeChild(ul.children[ul.children.length-1]);//删除父节点ul的最后一个儿子元素节点
```

结合上一个添加元素的案例，添加删除功能

#### 完整代码

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            padding: 100px;
        }
        
        textarea {
            width: 200px;
            height: 100px;
            border: 1px solid pink;
            outline: none;
            resize: none;
        }
        
        ul {
            margin-top: 50px;
        }
        
        li {
            width: 300px;
            padding: 5px;
            background-color: rgb(245, 209, 243);
            color: red;
            font-size: 14px;
            margin: 15px 0;
            list-style: none;
        }

        button {
            display: block;
            width: 200px;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button class="btn1">发布</button>
    <button class="btn2">删除</button>
    <ul>

    </ul>
    <script>
        // // 1. 获取元素
        // var btn = document.querySelector('button');
        // var text = document.querySelector('textarea');
        // var ul = document.querySelector('ul');
        // // 2. 注册事件
        // btn.onclick = function() {
        //     if (text.value == '') {
        //         alert('您没有输入内容');
        //         return false;
        //     } else {
        //         // console.log(text.value);
        //         // (1) 创建元素
        //         var li = document.createElement('li');
        //         // 先有li 才能赋值
        //         li.innerHTML = text.value;
        //         // (2) 添加元素
        //         // ul.appendChild(li);
        //         ul.insertBefore(li, ul.children[0]);
        //     }
        // }
        
            var btn1 = document.querySelector('.btn1');
            var btn2 = document.querySelector('.btn2');
            var textarea = document.querySelector('textarea');
            var ul = document.querySelector('ul');
            btn1.onclick = function() {
                var li = document.createElement('li');
                if (textarea.value == '') {
                    alert('请输入内容');
                } else {
                    li.innerHTML = textarea.value;
                    ul.appendChild(li);
                }
            }

            btn2.onclick = function() {
                if (ul.children.length == 0) {//ul的长度为0，即里面没有子元素节点了
                    alert('留言板为空，无法删除');
                } else {
                    console.log(ul.children[ul.children.length-1]);
                    ul.removeChild(ul.children[ul.children.length-1]);
                }
                
            }


    </script>
</body>
```

#### 删除的核心代码

```js
            btn2.onclick = function() {
                if (ul.children.length == 0) {//ul的长度为0，即里面没有子元素节点了
                    alert('留言板为空，无法删除');
                } else {
                    console.log(ul.children[ul.children.length-1]);
                    ul.removeChild(ul.children[ul.children.length-1]);
                }
                
            }
```

+ 注册删除按钮的点击事件
+ 判断ul的长度是否为空，为空就提示
+ 不为空则可以删除，删除ul的==元素节点集合==的头或尾，头为【0】，尾为【ul.children.length-1】#### 复制节点

```js
node.cloneNode()
```

node.cloneNode()方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点

```html
<body>

    <button id="btn">按钮</button>
    <script>
        var ul = document.querySelector('ul');
        var new_li = ul.children[0].cloneNode();//克隆了ul节点的第一个节点
        //跟添加节点一样，现在只是创建了，但是还没有添加，所以页面看不到
        ul.appendChild(new_li);//现在已经添加ul的后面
    </script>
</body>
```

==注意：==

如果括号参数为空或者是false，则为==浅拷贝==，即只克隆复制节点本身，不克隆里面的子节点

```js
var new_li = ul.children[0].cloneNode(true);//深拷贝，连同内容一起复制，即<li>1</li>
var new_li = ul.children[0].cloneNode(true);//浅拷贝，只复制节点，即<li></li>
```

#### 填充数据代码思路

+ 为表格设置好表头th，还有空的表身tbody
+ 创建节点，根据数组的对象数量动态创建行tr，一个对象就是一行
+ 然后根据对象里面的属性数量动态创建单元格td，一行有“属性值”个td
+ 然后把属性值赋值给td
+ 至此，完成单元格的数据填充

```html
    <style>
        table {
            width: 500px;
            margin: 100px auto;
            border-collapse: collapse;
            text-align: center;
        }
        
        td,
        th {
            border: 1px solid #333;
        }
        
        thead tr {
            height: 40px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        //1.首先，准备数据
        var datas = [{
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        }]//用数组来存放，里面每个花括号是一行数据

        var tbody = document.querySelector('tbody');
        for (var i = 0; i < datas.length; i++) {
            var tr = document.createElement('tr');//创建tr节点
            tbody.appendChild(tr);//创建“数组”个节点，并添加到tbody
            //现在已经添加行tr了，需要填充单元格td
            //单元格的数量取决于每个对象的属性个数
            for (var k in datas[i]) {//这时候为每个tr建立了td
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = datas[i][k];//把数据填充进去
            }

            // for (var k in obj) {
            //     k得到的是属性名
            //     obj[k]得到的是属性值
            // }

        }
    </script>
</body>
```



#### 删除单元格代码思路

+ 为每行的最后一个空白添加单元格td
+ 往td里面添加a标签内容

```js
            //接下来是为每行的最后一个添加td
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = '<a href="javaScript:;">删除</a>';
```

#### 为a标签添加删除事件

```js
        //为a链接添加删除事件
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function() {
              //点击a，删除当前a所在的行，利用node.removeChild(child)
              //要删除行，所以必然是tbody.removeChild(tr),也就是括号里面一定是tr
              //但是tr有那么多，一次只删除一个子节点，怎么确定是哪个呢，利用a来确定
              //a是this，即是当前这个a，要放在td里，td放在tr里，要删除的tr是a的爷爷
              //所以括号的tr，等价代换成，a.父亲.父亲
              tbody.removeChild(this.parentNode.parentNode);
            }
        }
```



#### 完整代码

```html
    <style>
        table {
            width: 500px;
            margin: 100px auto;
            border-collapse: collapse;
            text-align: center;
        }
        
        td,
        th {
            border: 1px solid #333;
        }
        
        thead tr {
            height: 40px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        //1.首先，准备数据
        var datas = [{
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        },
        {
            name: '小明',
            subject: 'Python',
            score: 100
        }]//用数组来存放，里面每个花括号是一行数据

        var tbody = document.querySelector('tbody');
        for (var i = 0; i < datas.length; i++) {
            var tr = document.createElement('tr');//创建tr节点
            tbody.appendChild(tr);//创建“数组”个节点，并添加到tbody
            //现在已经添加行tr了，需要填充单元格td
            //单元格的数量取决于每个对象的属性个数
            for (var k in datas[i]) {//这时候为每个tr建立了td
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = datas[i][k];//把数据填充进去
            }

            // for (var k in obj) {
            //     k得到的是属性名
            //     obj[k]得到的是属性值
            // }

            //接下来是为每行的最后一个添加td
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = '<a href="javaScript:;">删除</a>';

        }

        //为a链接添加删除事件
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function() {
              //点击a，删除当前a所在的行，利用node.removeChild(child)
              //要删除行，所以必然是tbody.removeChild(tr),也就是括号里面一定是tr
              //但是tr有那么多，一次只删除一个子节点，怎么确定是哪个呢，利用a来确定
              //a是this，即是当前这个a，要放在td里，td放在tr里，要删除的tr是a的爷爷
              //所以括号的tr，等价代换成，a.父亲.父亲
              tbody.removeChild(this.parentNode.parentNode);
            }
        }
    </script>
</body>
```

#### 三种动态创建元素区别

+ document.write()
+ element.innerHTML
+ document.createElement()

#### 区别

##### document.write()

1.document.write()是直接将内容写入页面的内容流，==但是文档流执行完毕，则它会导致页面全部重绘==

文档流执行完毕即是页面加载完成以后（或者理解成刷新完成以后）

正常在页面写入一个div，没问题

```html
<body>
    <button>按钮</button>
    <p>文本</p>

    <script>
        document.write('<div>123</div>');
    </script>
</body>
```

比如利用按钮建立事件，点击以后利用方法创建div，这就是在页面加载完成以后调用该方法，则会导致页面的内容全部消失，只剩下一个创建的这个div

```html
<body>
    <button>按钮</button>
    <p>文本</p>

    <script>
        var btn = document.querySelector('button');
        btn.onclick = function() {
            document.write('<div>123</div>');
        }
    </script>
</body>
```



##### element.innerHTML跟document.createElement()的效率对比

代码是利用两种方式创建a标签，没有什么区别，但是创建成百上千个节点时

```html
<body>
    <button>按钮</button>
    <p>文本</p>
    <!-- 有两个div，想利用两种方式为他们放进去a标签 -->
    <div class="inner"></div>
    <div class="create"></div>
    <script>
        //inner方式创建a标签
        var inner = document.querySelector('.inner');
        inner.innerHTML = '<a href="#">百度</a>';
        //create方式创建a标签
        var create = document.querySelector('.create');
        var x = document.createElement('a');//创建a标签
        create.appendChild(x);
    </script>
```

例2

```js
//inner方式创建a标签
        var inner = document.querySelector('.inner');
        inner.innerHTML = '<a href="#">百度</a>';
        for (var i = 0; i < 100; i++) {
            inner.innerHTML += '<a href="#">百度</a>';//一直往div里面加a标签，所以是+=
        }
```

```js
//create方式创建a标签
        var create = document.querySelector('.create');
        for (var i = 0; i < 100; i++) {
            var x = document.createElement('a');//创建a标签
        create.appendChild(x);
        }
```

可以在循环前设置一个变量来获取时间，然后再循环结束再来一个变量获取当前时间，最后输出d2-d1，就可以获取整个循环用了多久

inner方式循环1000遍大概两三秒，而create方式则是20毫秒左右，这是因为inner要涉及大量字符串的拼接，所以会导致效率很低

##### 改进后的inner方式

既然inner是因为拼接字符串才导致效率缓慢，那想办法改进一下，利用数组把成百上千个标签添加到数组，然后利用join方法整合成一个字符串再添加到div里面

==js中的join()方法可以将数组中的所有的元素放入到一个字符串内，并以指定的字符进行分割，并返回。==

```js
 //inner方式创建a标签
        var inner = document.querySelector('.inner');
        inner.innerHTML = '<a href="#">百度</a>';
        var arr = [];
        for (var i = 0; i <= 100; i++) {
            arr.push('<a href="#">百度</a>');
        }
        inner.innerHTML = arr.join('');
```

改进后的inner方式，循环创建1000个div只要个位数的毫秒



#### 总结

1.document.write()是直接将内容写入页面的内容流，==但是文档流执行完毕，则它会导致页面全部重绘==

2.innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘

3.innerHTML创建多个元素效率更高（不采用字符串拼接，采用数组形式），结构稍微复杂

4.createElement()创建多个元素效率稍微低一些，但是结构更加清晰![image-20221009221823481](D:\TyporaWorks\图片文件夹存放\image-20221009221823481.png)

关于DOM操作，我们主要针对元素的操作，主要有创建、增删改查、属性操作、事件操作等

#### 创建

+ document.write
+ innerHTML
+ createElement

#### 增

+ appendChild——在后面添加

+ insertBefore——在前面添加

#### 删

+ removeChild

#### 改

主要是修改DOM的元素属性，DOM元素的内容，属性，表单的值等

+ 修改元素属性：src、href、title等
+ 修改普通元素内容：innerHTML、innerText
+ 修改表单元素：value、type、dasabled
+ 修改元素样式：style、className

#### 查

主要获取查询DOM的元素

+ DOM提供的AAPI方法：getElementById、getElementsByTagName古老方法不太推荐
+ H5提供的新方法：querySelector、querySelectorAll提倡
+ 利用节点操作获取元素：父（parentNode）、子（children）、兄（previousElementSibling、nextElementSibling）提倡

#### 属性操作

主要针对自定义属性

+ setAttribute：设置DOM的属性值
+ getAttribute：得到DOM的属性值
+ removeAttribute：移除属性

#### 事件操作

| 鼠标事件    | 触发条件     |
| ----------- | ------------ |
| onclick     | 鼠标点击     |
| onmouseover | 鼠标经过     |
| onmouseout  | 鼠标离开     |
| onfocus     | 获取鼠标焦点 |
| onblur      | 失去鼠标焦点 |
| onmousemove | 鼠标移动     |
| onmouseup   | 鼠标弹起     |
| onmousedown | 鼠标按下触发 |

![image-20221011212940520](D:\TyporaWorks\图片文件夹存放\image-20221011212940520.png)

![image-20221011213027307](D:\TyporaWorks\图片文件夹存放\image-20221011213027307.png)



#### 注册事件

![image-20221011213441538](D:\TyporaWorks\图片文件夹存放\image-20221011213441538.png)

##### 传统注册方式

```html
<body>
    <button>传统注册方式按钮</button>

     <script>
        var btn = document.querySelector('button');
        btn.onclick = function() {
            alert('你好');
        }//为按钮注册点击事件1

        btn.onclick = function() {
            alert('hello');
        }//为按钮再次注册点击事件2
        //同样为点击事件的注册事件2将会覆盖事件1
        //这就是传统注册方式
    </script>
</body>
```

##### 方法监听注册事件——addEventListener

```js
eventTarget.addEventListener(type, listener[, useCapture])//第三个参数是可选
```

![image-20221011215847609](D:\TyporaWorks\图片文件夹存放\image-20221011215847609.png)

```html
<body>
    <button>事件监听方式按钮</button>

     <script>
        var btn = document.querySelector('button');
        //为按钮注册一个点击事件1
        btn.addEventListener('click', function() {
            alert('你好');
        })//注意：addEventListener的括号要扩住函数的花括号

        //为按钮注册点击事件2
        btn.addEventListener('click', function() {
            alert('hello');
        })
        //事件2不会覆盖掉事件1，而是会在事件1执行完后马上接着执行事件2

    </script>
</body>
```



##### 方法监听注册事件——attachEvent

该特性是非标准的，尽量不要再生产环境中使用它

```
eventTarget.attachEvent(eventNameWithOn, callback)
```

![image-20221011222743189](D:\TyporaWorks\图片文件夹存放\image-20221011222743189.png)

```js
var btn = document.querySelector('button');
        //为按钮注册一个点击事件
        btn.attachEvent('onclick', function() {
            alert('你好');
        })//在IE9以前才支持
```



#### 注册事件兼容性解决方案

addEventListener在IE9以下不支持，attachEvent在IE9以上不支持，我们可以封装一个函数，判断当前浏览器是否支持addEventListener，不支持再换成attachEvent方法

![image-20221011224445389](D:\TyporaWorks\图片文件夹存放\image-20221011224445389.png)



#### 删除事件的方式

##### 传统注册方式

```
eventTarget.onclick = null;
```

为按钮注册一个点击事件，按一次就会弹出一个弹窗，但是要让这个按钮只能点一次

```html
<body>
    <button>按钮</button>

     <script>

       var btn = document.querySelector('button');
       btn.onclick = function() {
            alert('你好');
            btn.onclick = null;//使按钮的点击事件失效
       }
    </script>
</body>
```



##### 方法监听注册方式——注册方式为addEventListener

```
eventTarget.removeEventListener(type, listener[, useCapTure])
```

```js
       var btn = document.querySelector('button');
       btn.addEventListener('click', function() {
            alert('你好');
            btn.removeEventListener('click',function(){});
       })
```

==注意：==这样写是错的，remove方法删除事件需要函数名，而我们绑定事件时是匿名函数，所以就没有函数名来给remove方法进行删除事件，所以要修改绑定事件的方式

还是利用监听方式绑定点击事件，但是后面不用function了，而是单独声明一个函数，然后直接写函数名就行

```html
<body>
    <button>按钮</button>

     <script>

       var btn = document.querySelector('button');
       btn.addEventListener('click', xxbb);
       function xxbb() {
        alert('你好');
        btn.removeEventListener('click', xxbb);
        //注意：这里的函数名xxbb不用写括号，不像以前调用函数那样，这是特例
       }
    </script>
</body>
```



##### 方法监听注册方式——注册方式为attachEvent

```
eventTarget.detachEvent(eventNameWithOn, callback)
```

```html
<body>
    <button>按钮</button>

     <script>

       var btn = document.querySelector('button');
       btn.addachEvent('onclick',xxbb);
       function xxbb() {
        alert('你好');
        btn.detachEvent('onclick', xxbb);
       }
    </script>
</body>
```



#### 删除事件兼容性解决方案

![image-20221012001720863](D:\TyporaWorks\图片文件夹存放\image-20221012001720863.png)

#### DOM事件流

![image-20221012220714341](D:\TyporaWorks\图片文件夹存放\image-20221012220714341.png)

如图所示，有一个div，父亲是body，再上一级是body，再上一级是html，再上一级是document，在最底层的div设置一个点击事件

##### 1.捕获阶段

当执行点击事件时，程序会一级一级深入，没有发现点击事件，就略过，直到div发现了点击事件，才执行，这就是DOM事件的捕获阶段

##### 2.当前目标阶段

然后找到div后，执行点击事件，这就是当前目标阶段，接着再执行下一步

##### 3.冒泡阶段

执行完div的点击事件时，再一级一级向上反馈，body——html——Document，一直没有查到点击事件，就结束了

![image-20221012222340193](D:\TyporaWorks\图片文件夹存放\image-20221012222340193.png)![image-20221012222812958](D:\TyporaWorks\图片文件夹存放\image-20221012222812958.png)

==1.实际开发中我们很少使用事件捕获，我们更关注事件冒泡==

==2.有些事件是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave==

==3.事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，后面会讲到==

#### 代码简介：

设置一个父盒子father包含子盒子son，同时设置点击事件时，且都为==捕获阶段==，点击son盒子时，肯定先执行father的点击事件，再执行son的点击事件，因为捕获阶段是从上往下，点了son，而son在father内，相当于都触发了。

但是如果将father的点击事件取消掉捕获阶段，同样执行上述的点击操作，肯定是先执行son的点击事件，然后到冒泡阶段，检测到father有个点击事件，才会执行father的点击事件。

#### 代码：

```html
    <style>

        .father {
            margin: 100px auto;
            width: 200px;
            height: 200px;
            background-color: brown;
            overflow: hidden;
        }

        .son {
            margin: 50px;
            height: 100px;
            width: 100px;
            background-color: yellow;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>

     <script>
        var son = document.querySelector('.son');
        son.addEventListener('click', function() {
            alert('son盒子');
        }, true);
       //参数为true时，是捕获阶段，执行顺序是document——>html——>body
       //——>fater——>son
       //当点击以后，从上到下查找点击事件，直到查找到son级时执行点击事件

       var father = document.querySelector('.father');
       father.addEventListener('click', function(){
                alert('father盒子');
       },);

       //此时为father也设置了一个点击事件，而且也是处于捕获阶段，所以当点击了
       //son盒子时，也相当于点击了father盒子，而且从上到下会先执行father盒子的点击事件
       //再执行son盒子的点击事件
       //但是如果想一下，father的盒子是冒泡阶段，肯定会先执行son，执行完以后反馈上来
       //才会执行father的点击事件
    </script>
</body>
```

#### 什么是事件对象

```html
<body>
    <div>123</div>

     <script>
        var div = document.querySelector('div');
        div.onclick = function(event) {
            //1.这个event就是事件对象，写到函数的括号里面，可以当成形参来看
            //2.事件对象只有有了事件才会存在，比如点击事件onclick，没有事件时不能往里面写参数
            //3.他是系统给我们自动创建的，不需要我们传递实参
            //4.事件对象  是我们事件的一系列相关数据的集合，跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息——鼠标坐标
            //但是如果是键盘事件里面就包含了键盘事件的信息，比如用户按下了哪个键
            console.log(event);//查看一下包含了什么
        }
    </script>
</body>
```

==这个事件对象我们可以自己命名，一般喜欢用e来代替，function(e)==

![image-20221013000541079](D:\TyporaWorks\图片文件夹存放\image-20221013000541079.png)



#### 兼容性问题

事件对象也有兼容性问题，==ie678 通过window.event==获取

在ie678用以上方式输出event会显示undefined，必须这样

```html
     <script>
        var div = document.querySelector('div');
        div.onclick = function(e) {
            //console.log(e);只写参数在ie678不兼容
            console.log(window.event);//必须一字不差的
        }
    </script>
```

##### 解决方案——兼容性写法——短路求值思想

```html
     <script>
        var div = document.querySelector('div');
        div.onclick = function(e) {
            e = e || window.event;
            //短路求值算法，
            //当e为真时，e=e，不执行或
            //当ie678不识别e，即为假时，执行或语句，e=window.wvent
            console.log(e);  
        }
    </script>
```

![image-20221013212831680](D:\TyporaWorks\图片文件夹存放\image-20221013212831680.png)

#### e.target跟this的区别

+ e.target返回触发事件的对象
+ this返回绑定事件的对象

```html
    <style>

        .father {
            margin: 100px auto;
            width: 200px;
            height: 200px;
            background-color: brown;
            overflow: hidden;
        }

        .son {
            margin: 50px;
            height: 100px;
            width: 100px;
            background-color: yellow;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">

        </div>
    </div>

     <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        father.addEventListener('click', function(e) {
            console.log(e.target);//获取触发事件的对象
            console.log(this);//获取绑定事件的对象
//点击son盒子来触发father的点击事件，e.target返回son盒子
//this返回father盒子
        })   
    </script>
</body>
```

当点击son盒子以后

![image-20221013220128786](D:\TyporaWorks\图片文件夹存放\image-20221013220128786.png)

#### e.target跟e.srcElement兼容性问题

类似于e的兼容性，写个短路求值

```html
     <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        father.addEventListener('click', function(e) {
            var target = e.target || e.srcElement;
            console.log(target);
        })   
    </script>
```



#### this与currentTarget

跟this一样，也是返回事件绑定的对象，但是不兼容ie678，所以仅仅作为了解即可

![image-20221013221836909](D:\TyporaWorks\图片文件夹存放\image-20221013221836909.png)

```html
     <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        father.addEventListener('click', function(e) {
            
            console.log(e.currentTarget);
            console.log(this);
        })   
    </script>
```

![image-20221013222206258](D:\TyporaWorks\图片文件夹存放\image-20221013222206258.png)

#### e.type

```html
father.addEventListener('click', function(e) {
            console.log(e.type);
        }) 
```

返回的是事件类型，比如点击事件

#### e.preventDefault()

==注意：这是个方法，记得加括号==

比如一个a链接，点击会跳转到href所指定的url地址，但是使用该方法，将会阻止这个==默认行为==

```html
<body>
<a href="https://www.baidu.com/">我是一个a连接</a>

     <script>
        var a_element = document.querySelector('a');
        a_element.addEventListener('click', function(e) {
            e.preventDefault();
        });
    </script>
</body>
```

#### 兼容性问题e.preventDefault()与e.returnValue与return false

e.preventDefault()在IE高版本使用

e.returnValue支持在IE678使用

return false没有兼容性问题

**==注意==**

+ e.preventDefault()是==方法==
+ e.returnValue是==属性==

```html
     <script>
        var a_element = document.querySelector('a');
        a_element.addEventListener('click', function(e) {
            e.returnValue;
        });
    </script>
```

#### return false

==优点：==return false也能阻止默认行为，且没有兼容性问题

==缺点：==但是return语句只能放在代码块最后，因为return以后的语句都不再执行了

```html
     <script>
        var a_element = document.querySelector('a');
        //因为高版本浏览器不支持addEventListener方法，所以只能用传统注册事件方式
        //同理e.returnValue也是如此
        a_element.onclick = function() {
            return false;
        }
    </script>
```



==实测==：querySelector在IE67无法支持，在IE8则无法正常运行e.returnValue与return false，a连接还是可以正常跳转

所以仅仅作为了解即可



==在高版本浏览器中==，return false仅仅支持在==传统注册方式==中使用

##### 无效的方式

```html
     <script>
        var a_element = document.querySelector('a');
        a_element.addEventListener('click', function(e) {
            e.returnValue;
        })
    </script>
```

##### 有效的方式——传统注册方式

```html
     <script>
        var a_element = document.querySelector('a');
        a_element.onclick = function(e) {
            return false;
        }
    </script>
```

![image-20221014192555988](D:\TyporaWorks\图片文件夹存放\image-20221014192555988.png)

#### 代码简介

一个父盒子，一个儿子盒子，同样设置addEventListener的点击事件，不设置第三个参数或者设置为false都是冒泡阶段，遇到father盒子，不触发，遇到son盒子，不触发，然后开始执行冒泡阶段，遇到son盒子触发，遇到father盒子触发。

#### 普通的冒泡代码

```html
<head>
    <meta charset="UTF-8">
    
    <title>Document</title>
    <style>

        .father {
            overflow: hidden;
            width: 200px;
            height: 200px;
            margin: 100px auto;
            background-color: pink;
            text-align: center;
        }
        .son {
            width: 100px;
            height: 100px;
            line-height: 100px;
            background-color: purple;
            margin: 50px auto;
        }
    </style>
</head>
<body>
<div class="father">
    <div class="son">son</div>
</div>

     <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        //addEventListener默认为false，即是冒泡阶段
        //son的点击事件
        son.addEventListener('click', function(e) {
            alert('这是儿子盒子');
        }, false);

        //father的点击事件
        father.addEventListener('click',function(e) {
            alert('这是父亲盒子');
        }, false);
        //捕获跟冒泡是根据文档流来的，不要跟js代码顺序搞混了
        //son在father里面，肯定先看到father再看到son
        //不能记成son的点击事件在前，就先看到son
    </script>
</body>
```

#### 阻止事件冒泡

+ 标准写法：利用事件对象里面的==stopPropagation()方法==
+ 非标准写法：IE678利用事件对象==cancelBubble==

##### stopPropagation()

```html
     <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('这是儿子盒子');
            e.stopPropagation();
            //进到最里层遇到son后，开始冒泡，触发点击事件alert
            //然后遇到 e.stopPropagation();停止冒泡，相当于结束进程了
            //即不再往上冒泡触发father的点击事件了，因为已经停止了
        }, false);

        //father的点击事件
        father.addEventListener('click',function(e) {
            alert('这是父亲盒子');
        }, false);
    </script>
```

##### cancelBubble

```
e.cancelBubble = true;//cancel取消bubble泡泡
```

```js
son.addEventListener('click', function(e) {
            alert('这是儿子盒子');
			e.cancelBubble = true;
        }, false);
```

#### 阻止事件冒泡的兼容性解决方案

```js
		if(e && e.stopPropagation) {
            e.stopPropagation();
        }else {
            window.event.cancelBubble = true;
        }
```

思想：因为e跟stopPropagation在IE678都是不兼容的，只有在两者都能使用，即为真时调用该方法，不兼容时则调用cancelBubble
#### 事件委托

##### 案例1

![image-20221016162257590](D:\TyporaWorks\图片文件夹存放\image-20221016162257590.png)

##### 案例2

![image-20221016162438740](D:\TyporaWorks\图片文件夹存放\image-20221016162438740.png)

#### 事件委托的原理

**<font color='red'>不是为每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。</font>**

案例2解决办法：给ul注册点击事件，然后利用事件对象的target来找到当前点击的li，因为点击li，事件会冒泡到ul上，ul有注册事件，就会触发事件监听器。

#### 事件委托的作用

在案例2的解决办法中，我们只操作了一次DOM，提高了程序的性能



#### 代码思路

在案例2中，点击每个li都可以弹出一个相同弹窗，为ul设置点击事件就行。

想法：如果想为li设置不同的样式或者点击哪个li就能返回li的顺序，可以设置id，再返回

想法：利用target可以设置点击哪个li就改变其颜色，如果想要其他li恢复正常，每次只有一个li变颜色，那就是依旧熟悉的排他思想



#### 完整代码

```html
<body>
    <ul>
        <li id="1">点击该li弹出弹窗</li>
        <li id="2">点击该li弹出弹窗</li>
        <li id="3">点击该li弹出弹窗</li>
        <li id="4">点击该li弹出弹窗</li>
        <li id="5">点击该li弹出弹窗</li>
    </ul>

     <script>
        var ul_js = document.querySelector('ul');
        var lis = ul_js.children;
        //注意不要用ul_js.childNodes，每个li返回text、li、text。
        //即换行，子节点li，换行三个节点，所以在下面循环赋值颜色会报错
        ul_js.addEventListener('click', function(e) {
            //alert('你好');//最开始的操作
            //alert(e.target.id);//突发奇想——是可以实现的
            //e.target.style.color = 'pink';//点击哪一个就令他的颜色改变
            //如果需要点击一个li改变其颜色，使其他的li颜色恢复正常，还是利用排他思想
            for(var i = 0; i < lis.length; i++) {
                lis[i].style.color = 'black';
            }
            e.target.style.color = 'pink';
        })
    </script>
</body>
```

#### 常用的鼠标事件

![image-20221016170942041](D:\TyporaWorks\图片文件夹存放\image-20221016170942041.png)

补充：鼠标移动事件：mousemove

#### 禁止鼠标事件

是通过对鼠标事件的修改，即加上阻止默认行为来禁止的、

==e.preventDefault();==



##### 禁止鼠标右键菜单

contextmenu主要控制应该何时显示上下文菜单，主要用户程序员取消默认的上下文菜单

```js
	document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        })
```

这个是使整个页面都无法点击右键显示菜单

同理也可以调用其他节点，使节点内的鼠标右键无法被调用

```js
        var ul_js = document.querySelector('ul');
        ul_js.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
```

虽然这个无法右键，但是依然可以使用ctrl+c进行复制



##### 禁止鼠标选中（selectstart 开始选中）

```js
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        })
```



#### 获得鼠标在页面中的坐标

event对象代表事件的状态，跟事件相关的一系列信息的集合，现阶段我们主要是用鼠标事件对象MouseEvent跟键盘事件对象KeyboardEvent

![image-20221016200944032](D:\TyporaWorks\图片文件夹存放\image-20221016200944032.png)



##### e.clientX跟e.clientY

是鼠标相对于可视窗口的坐标，比如在窗口中点击鼠标，会给出这个坐标距离上边跟左边的坐标，但是如果页面很长，一直往下拉，点击一个地方得到坐标，坐标不会因为一直往下拉而导致y轴一直增加，因为基点永远都是当前可视窗口

```js
        document.addEventListener('click', function(e) {
            console.log('x坐标是'+e.clientX);
            console.log('y坐标是'+e.clientY);
        })
```

![image-20221016202043245](D:\TyporaWorks\图片文件夹存放\image-20221016202043245.png)



![image-20221016203254643](D:\TyporaWorks\图片文件夹存放\image-20221016203254643.png)

看图2右侧滚动条，鼠标一直停留在左上角点击，点一次滚动条往下拉，停留在原地点击，可以看到页面一直在往下，但是y轴的位置一直没增加

e.clientX跟e.clientY是鼠标距离上面跟左边的距离，在左上角的点位为0跟0，越往右下越大，但是不会随着页面拖动而增大，x跟y的最大值永远只有可视窗口那么大，如果想要得到线性增加的x轴y轴，需要用到e.pageX跟e.pageY



##### e.pageX跟e.pageY—IE9+ 支持

```js
        document.addEventListener('click', function(e) {
            console.log('x坐标是'+e.pageX);
            console.log('y坐标是'+e.pageY);
        })
```

也是获取x坐标跟y坐标，但是得到的是离==文档页面左上角的唯一基点==的距离，所以x轴跟y轴会随着页面的移动而增大

![image-20221016213320618](D:\TyporaWorks\图片文件夹存放\image-20221016213320618.png)



##### e.screenX跟e.screenY

```js
document.addEventListener('click', function(e) {
            console.log('x坐标是'+e.screenX);
            console.log('y坐标是'+e.screenY);
        })
```

![image-20221016215124121](D:\TyporaWorks\图片文件夹存放\image-20221016215124121.png)

是以显示器的左上角为唯一基点的，可以理解为换了唯一基点的client#### 案例要求

要用一张图片跟随鼠标不断移动

#### 案例分析

+ 鼠标不断移动，使用鼠标移动事件：mousemove
+ 在页面中移动，要给document注册事件
+ 图片要移动距离，而且不占位置，使用绝对定位即可
+ ==核心原理：==每次鼠标移动，我们都会获得最新的鼠标坐标，把对应的x坐标跟y坐标作为图片的top值跟left值就可以移动图片

#### 代码——问题1

```html
    <style>
        img {
            width: 25px;
            height: 25px;
            position: absolute;
        }
      
    </style>
</head>
<body>
    <img src="/image/躺平派大星.png" alt="">
     <script>
        var img = document.querySelector('img');
        document.addEventListener('mousemove',function(e) {
            img.style.left = e.pageX;
            img.style.top = e.pageY;
        })
    </script>
</body>
```

但是这个代码是没办法是图片跟随鼠标的，有个最粗心的错误，是因为没给单位，所以图片每次跟随鼠标动的幅度很小

##### 修改

```js
			img.style.left = e.pageX + 'px';
            img.style.top = e.pageY + 'px';
```

#### 问题2

![image-20221016221815576](D:\TyporaWorks\图片文件夹存放\image-20221016221815576.png)

会发现鼠标一直在插入的图片的右上角，因为图片的定位是根据图片的左上角为基准点的，所以想让图片在鼠标的中间，就要修改每次给它的left值跟top值

这张图片是50*50，要让点从0,0变成25,25，而且要注意，==修改的是图片的位置==，因为img.style.left在等式左边，e.pageX + 'px'在右边，为pageXY添加或者删减大小，使图片来贴近pageXY的位置，==即图片要向上移动，跟向左移动==

##### 修改

```js
			img.style.left = e.pageX - 25 + 'px';
            img.style.top = e.pageY - 25 + 'px';
```

![image-20221016223146204](D:\TyporaWorks\图片文件夹存放\image-20221016223146204.png)

这样子通过对图片的位置改变，达到使鼠标指向其中心的位置

##### 改变鼠标指向图片中心

```js
			img.style.left = e.pageX - 图片高度一半 + 'px';
            img.style.top = e.pageY - 图片宽度一半 + 'px';
```

#### 常用的键盘事件

| 键盘事件   | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个按键被按下时触发，长按会一直触发                         |
| onkeypress | 某个键盘按键被按下时触发，但是不识别功能键，比如ctrl、shift箭头等 |

```js
		document.addEventListener('keyup', function(e) {
            console.log('我弹起了');
        })
        document.addEventListener('keydown', function(e) {
            console.log('我按下了');
        })
        document.addEventListener('keypress', function(e) {
            console.log('我按下了，但是不识别功能键');
        })
```

按键顺序：数字1——>字母s——>功能键shift

![image-20221016225803633](D:\TyporaWorks\图片文件夹存放\image-20221016225803633.png)

**==注意：==**虽然上面js代码顺序是按照keyup、keydown、keypress的顺序来写的，但是不管代码顺序先后，他们有自己的执行顺序：

==keydown、keypress、keyup==，即两个按下一定是先于弹起执行的，然后能识别键盘多的优先于不能识别功能键的



#### 键盘事件对象

##### keyCode

可以得到相应按键的ASCII值

**==注意：==**keyup跟keydown事件不区分字母大小写，a跟A得到的都是65

```js
     <script>

        document.addEventListener('keydown', function(e) {
            console.log(e.keyCode);
        })
        
    </script>
```

按键顺序为Q上面的1——>a——>小键盘的1——>A

![image-20221017003209386](D:\TyporaWorks\图片文件夹存放\image-20221017003209386.png)

**keypress事件可以区分大小写字母的ASCII码**

```JS
     <script>

        document.addEventListener('keypress', function(e) {
            console.log(e.keyCode);
        })
        
    </script>
```

按键顺序为Q上面的1——>a——>小键盘的1——>A

![image-20221017003420137](D:\TyporaWorks\图片文件夹存放\image-20221017003420137.png)#### 案例介绍

京东的主页搜索框有个功能，不论鼠标在哪里，按下s就会把光标自动定位到搜索框里

#### 代码分析

+ 设置键盘事件，判断按下去的是不是‘s'键
+ 如果是就令input节点获得焦点

#### 代码

```html
    <style>

        body {
            height: 3000px;
        }
        input {
            display: block;
            margin: 100px auto;
            width: 300px;
            height: 30px;
        }
    </style>
</head>
<body>
    <form action="">
        <input type="text">
    </form>

     <script>
        var input_js = document.querySelector('input');
        document.addEventListener('keydown', function(e) {
            if(e.keyCode === 83) {
                input_js.focus();
                //alert('按下了s键');
            }
            //console.log(e.keyCode);
        })
        
    </script>
</body>
```

##### 效果：

按下s键，光标会定位到input输入框，但是框内也会输入s

![image-20221017010250471](D:\TyporaWorks\图片文件夹存放\image-20221017010250471.png)

##### **分析原因：**

因为用的是keydown事件，只要一按下去就会触发，刚按下去就定位到搜索框内，然后刚好输出字符s，就输入在搜索框内了，所以使用的键盘事件不太合适，应该修改成keyup

##### 修改代码：

```html
     <script>
        var input_js = document.querySelector('input');
        document.addEventListener('keyup', function(e) {
            if(e.keyCode === 83) {
                input_js.focus();
                //alert('按下了s键');
            }
            //console.log(e.keyCode);
        })      
    </script>
```

#### 案例介绍

在输入快递单号的时候，会出现一个小框放大显示搜索框里面输入的单号

![image-20221017012211881](D:\TyporaWorks\图片文件夹存放\image-20221017012211881.png)

![image-20221017012341270](D:\TyporaWorks\图片文件夹存放\image-20221017012341270.png)

#### 实践代码

```html
    <style>

        .big {
            width: 400px;
            margin: 100px auto;
            position: relative;
        }

        input {
            width: 200px;
            height: 20px;
        }
        .con {
            top: -50px;
            position: absolute;
            width: 300px;
            height: 40px;
            display: none;
            background-color: pink;
            border: 1px solid black;
            font-size: 18px;
            line-height: 40px;
        }
    </style>
</head>
<body>
    <div class="big">
        <div class="con"></div>
        快递单号：<input type="text" class="search">
    </div>

     <script>
        var search = document.querySelector('.search');
        var con = document.querySelector('.con');
        search.addEventListener('click', function(e) {
            if(search.value != '') {
                con.style.display = 'block';
            }
            search.addEventListener('keyup',function() {
                if(search.value != '') {
                con.style.display = 'block';
                con.innerHTML = search.value;
            } else{
                con.style.display = 'none';
            }
                
                
            })
        })

        search.onblur = function() {
            con.style.display = 'none';
        }

    </script>
</body>
```

个人思路：

+ 本来就有内容，需要显示盒子

为input添加点击事件，点击完以后，如果内容不为空，就把con盒子显示出来

+ 把输入的内容复制给con盒子

为input添加按键事件，按下去一个就把内容复制给con

+ 不再输入时取消显示盒子

离开input后把con显示取消掉，即input失去焦点

+ 为input的按键事件添加判断语句

不能直接按下按键就把con显示，因为keyup会识别功能键，在空白状态我按删除也会显示空盒子，所以需要判断input的value是否为空，不为空将盒子显示并赋值，为空就不做操作或者con.display='none'

##### 注意：

这里的键盘事件要用keyup，因为用keydown跟keypress时，刚按下就触发键盘事件了，而此时文字还没有进入文本框，所以代码执行时识别没有文本，就不显示con盒子

再输入第二个字母时，文本也还没进入就执行代码了，里面只识别到第一个文本，就将它赋值并显示con盒子，但是按下去的第二个文本没有被显示在con盒子里

而且press不识别功能键，在按删除的时候，代码不执行，也就不会进行文本的赋值，这就导致con盒子的内容不会被更新

```html
<script>
    document.getElementById('div_test');
</script>
<body>
    <div id="div_test">132</div>
</body>
```

在页面还未渲染完成时获取相关元素会报错的，因为此时还没有这个元素“div_test"

```js
    window.onload = function() {
        document.getElementById('div_test');
    }
```

把代码放在onload函数里，意思是在页面渲染完成以后执行该函数，但是整个文档中只能出现一个onload函数，但是在Jquery就不一定了

js的普通写法

```js
    window.onload = function() {
        document.getElementById('div_test');
    }
```

引入jquery的写法

完整写法

```js
$(document).ready(function(){
    window.document.getElementById('div_test');
});
```

简写写法

```js
$(function(){
    console.log(window.document.getElementById('div_test'));
});
```

两者作用是类似的，都是在页面加载完成后调用该函数，但是必须要引入jquery

```html
<script src="https://lib.baomitu.com/jquery/1.12.4/jquery.min.js"></script>
```



#### jq与js的转换

##### js数组与jq数组

```html
	<div class="test">1</div>
    <div class="test">2</div>
    <div class="test">3</div>
```

页面有多个div，二者是一样的，都能获取所有div

```js
console.log(document.querySelectorAll('.test'));
console.log($('.test'));
```

但是一个是获取到jq对象的数组，一个是nodelist数组

上面是nodelist，下面是jquery对象的数组

![image-20221026134521052](D:\TyporaWorks\图片文件夹存放\image-20221026134521052.png)



##### jq对象与普通对象的转换

```html
<div id="xx">123</div>
```

```js
	console.log(document.querySelector('#xx'));
    console.log($('#xx'));
```

![image-20221026134838782](D:\TyporaWorks\图片文件夹存放\image-20221026134838782.png)

同样要获取一个id为xx的div，上面是正常获取到该节点，美元符号获取的是一个jq对象

##### jq对象所包裹的内容

![image-20221026135108191](D:\TyporaWorks\图片文件夹存放\image-20221026135108191.png)

```js
console.log($('#xx')[0]);//转化成普通对象
```

![image-20221026135008912](D:\TyporaWorks\图片文件夹存放\image-20221026135008912.png)





在js中，这两个是一样的，都是获取一个id为div_test的对象

```js
	console.log(document.getElementById('div_test'));
    console.log(document.querySelector('#div_test'));
```



##### jq获取所有对象

```js
$("*");
```



##### 获取当前

```
$(this);
```



![image-20221102212818699](D:\TyporaWorks\图片文件夹存放\image-20221102212818699.png)

BOM比DOM更大，它包含DOM

![image-20221102213137097](D:\TyporaWorks\图片文件夹存放\image-20221102213137097.png)

![image-20221102214025288](D:\TyporaWorks\图片文件夹存放\image-20221102214025288.png)

查看window方法跟对象

```js
console.dir(window);
```

[TOC]

#### 窗口加载事件

![image-20221102214844695](D:\TyporaWorks\图片文件夹存放\image-20221102214844695.png)

![image-20221102215257367](D:\TyporaWorks\图片文件夹存放\image-20221102215257367.png)



#### 调整窗口大小事件

![image-20221102220720734](D:\TyporaWorks\图片文件夹存放\image-20221102220720734.png)[TOC]

#### setTimeout()定时器

```js
window.setTimeout(调用函数,[延迟的毫秒数]);
```

setTimeout()方法用于设置一个定时器，该定时器在定时器到期后执行调用函数且只执行一次，可以理解成一次性的定时炸弹

##### 调用函数——方法1——直接写函数

```html
    <script>
        setTimeout(function() {
            alert('你好');
        }, [2000])//事件为两秒，可省略，默认为0
    </script>
```

##### 调用函数——方法2——写函数名

```html
    <script>
        setTimeout(hello, [2000]);
        function hello() {
            alert('你好');
        }
    </script>
```

##### 调用函数——方法3——字符串形式

```html
    <script>
        setTimeout("hello()", [2000]);//一般不推荐，但是在函数带有传入参数时，只能采用这种方法
        function hello() {
            alert('你好');
        }
    </script>
```



**页面中可能有很多个定时器，我们经常给定时器加标识符**

```html
    <script>
        function hello() {
            alert('你好');
        }
        var time1 = setTimeout(hello, [2000]);
        var time2 = setTimeout(hello, [3000]);
    </script>
</body>
```

![image-20221102224059287](D:\TyporaWorks\图片文件夹存放\image-20221102224059287.png)



#### 案例——5s后关闭的广告

```html
<body>
    <div>
        <img src="/images/cover.png" alt="">
    </div>
    
    <script>
        function shutOut() {
            var div = document.querySelector('div');
            div.style.display = 'none';
        }

        setTimeout(shutOut,[5000]);
    </script>
</body>
```

[TOC]

#### 停止setTimeout()定时器

```html
window.clearTimeout(timeoutId)//ID是定时器的标识符
```

```html
<body>
    <div>
        <img src="/images/cover.png" alt="">
    </div>
    
    <script>
        var div = document.querySelector('div');
        function shutOut() {
            div.style.display = 'none';
        }

        var time1 = setTimeout(shutOut,[5000]);
        div.addEventListener('click',function() {//为图片添加点击事件清除计时器
            clearTimeout(time1);//清除time1的计时器
        })
    </script>
</body>
```

[TOC]

#### setInterval()定时器

```
window.setInterval(回调函数, [间隔的毫秒数]);
```

setInterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数

```html
    <script>
        function hello() {
            console.log('你好');
        }

        setInterval(hello, [1000]);//每隔1s执行一次
    </script>
```

可以理解成for循环的定时炸弹，一直在执行

**==注意：==**同setTimeout一样，也有三种调用函数的书写方式

**==用处==：**

+ 页面一直在自己循环播放的轮播图
+ 页面的热门活动倒计时



#### 案例——秒杀倒计时

**案例分析**

+ 倒计时是不断变化的，因此用到定时器setInterval()



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 350px;
            height: 80px;
            margin: 50px auto;
        }

        span {
            display: inline-block;
            text-align: center;
            width: 80px;
            height: 80px;
            background-color: skyblue;
            color: white;
            line-height: 80px;
            vertical-align: top;
            font-size: 18px;
            font-weight: 700;
        }
        /* div span:nth-child() {
            
        } */
    </style>
</head>
<body>
    <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <script>
        var div = document.querySelector('div');
        var spans = div.children;//spans数组里面存放三个盒子，分别是时分秒
        
        function countDown(time) {
            var nowTime = +new Date();// 当前时间毫秒数
            var futureTime = +new Date(time);// 未来时间毫秒数
            var times = (futureTime - nowTime) / 1000;// 剩余时间秒数
            var d = parseInt(times /60 / 60 / 24);	// 计算天数
            d = d < 10 ? '0' + d : d;//用来给天数补0的
            spans[0].innerHTML = d;//把剩余的天给天盒子
            var h = parseInt(times /60 / 60 % 24);     // 计算小时
            h = h < 10 ? '0' + h : h;//用来给小时补0的
            spans[1].innerHTML = h;//把剩余的小时给小时盒子
            var m = parseInt(times / 60 % 60);    // 计算分
            m = m < 10 ? '0' + m : m;//用来给分补0的
            spans[2].innerHTML = m;//把剩余的小时给小时盒子
            var s = parseInt(times % 60);    //计算当前秒数
            s = s < 10 ? '0' + s : s;//用来给秒补0的
            spans[3].innerHTML = s;//把剩余的小时给小时盒子
        }
        countDown('2022-11-03 01:00:00');//这里为什么要在计时器前再调用一次函数呢，因为刷新页面时，或者说加载页面时，这个计时器也会等一秒钟再把数据写入，所以会有一秒的空白。我们先提前加载一次把空白补上，然后等一秒后计时器就开始启动了
        setInterval(countDown('2022-11-03 01:00:00'), 1000);
    </script>
</body>
</html>
```

在本案例中，setInterval是不生效的，因为函数名带有括号及参数，需要用第三种方法进行调用

```html
setInterval("countDown('2022-11-03 01:00:00')", 1000);
```

要么就把函数的参数拿出去，设置成不用参数的方法



或者是

==回调函数的参数写在setInterval的第三个参数的位置==

```html
setInterval(countDown, 1000, '2022-11-11 00:00:00');
```

[TOC]

#### 停止setInterval()定时器

```
window.clearInterval(intervalId);//ID为set计时器的标识符
```

#### 案例——定时器的开与关

```html
<body>
    <button class="start">开启倒计时</button>
    <button class="stop">停止倒计时</button>
    
    <script>
        var start = document.querySelector('.start');
        var stop = document.querySelector('.stop');
        function hello() {
            console.log('你好');
        }
        var time1 = setInterval(hello, 1000);

        start.addEventListener('click',function() {
            //console.log('你好啊');
            time1;
        })

        stop.addEventListener('click',function() {
            clearInterval(time1);
        })
    </script>
</body>
```

在上面这个例子中，关可以，但是启动就无法启动了，因为没办法通过标识符调用定时器

**解决办法：**

把time1设置成全局变量，然后为它设置set定时器是在启动的点击事件中赋值的，然后再关闭的点击事件中清除计时



#### 案例——发送短信

点击按钮后，60s内不能再发送短信

##### 案例分析

![image-20221103192309679](D:\TyporaWorks\图片文件夹存放\image-20221103192309679.png)

##### 完整代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <input type="text">
    <button>点击发送短信</button>
    
    <script>
        var btn = document.querySelector('button');
        var num = 10;
        function xxbb() {
            btn.disabled = true;
            btn.innerHTML = '请在'+num+'秒后重试';
            num--;
            if(num==0) {
                clearInterval(time1);
                btn.disabled = false;
                num = 10;
                btn.innerHTML = '点击发送短信';
            }
            console.log(num);    
        }
        var time1 = null;
        btn.addEventListener('click', function() {
            xxbb();  
            time1 = setInterval(xxbb, 1000);
        })
            
 
    </script>
</body>
</html>
```

[TOC]

#### this

this的指向在函数定义的时候是确定不了的，只有函数执行的时候，才能确定this到底指向谁，==一般情况下this的最终指向的是那个调用它的对象==

在全局定义的一个函数默认是作为window的一个方法的，所以调用函数的完整写法其实是window.方法

##### 全局作用域、普通函数、计时器的this

```html
    <script>
        //==========测试1
        console.log(this);//先打印一个this

        //==========测试2
        function fn() {
            console.log(this);//在方法里打印this，在调用这个函数试试
        }
        fn();

        //==========测试3————计时器指向函数里的this
        setInterval(function() {
            console.log(this);
        }, 1000);
     </script>
```

打印出来的都是window，因为计时器也是window里面的一个方法

==总结：==全局作用域、普通函数、定时器里的this都是指向window

##### 对象里的方法的this

```html
    <script>
        //==========测试4————对象里的方法的this
        var xx = {
            hello: function() {
                console.log(this);
            }
        }
        xx.hello();//this指向的是xx这个对象
    </script>
```

![image-20221103195623368](D:\TyporaWorks\图片文件夹存放\image-20221103195623368.png)

花括号——即为对象

##### 节点的事件里的this

```html
<body>

    <button>Nihao</button>
    <script>

        //==========测试5————节点里的方法的this
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            console.log(this);
        })
    </script>
</body>
```

![image-20221103200101432](D:\TyporaWorks\图片文件夹存放\image-20221103200101432.png)





##### 实例对象里的this

```html
    <script>
        //==========测试6————实力对象里的this
        function Fun() {
            console.log(typeof(this));
        }

        var fun = new Fun();//new完以后会在内存地址中创建一个新空间，创建一个空对象，this则指向他，然后把这个对象实例化之后赋值给fun，所以this就指向fun了
   
    </script>
```

[TOC]

#### JS是单线程

![image-20221103202647239](D:\TyporaWorks\图片文件夹存放\image-20221103202647239.png)

```html
    <script>
        console.log(1)
        setTimeout(function() {
            console.log(3)
        },1000);
        console.log(2)
    </script>
```

比如在执行上述代码时，输出1，要等一秒输出3，然后再输出2

#### 同步和异步

![image-20221103203251286](D:\TyporaWorks\图片文件夹存放\image-20221103203251286.png)

因为现在有了异步，所以执行上述代码时是跳过定时器的，执行输出是——123

==本质区别就是==执行顺序不一样



#### 另一个问题——等待时间为0的计时器

```html
    <script>
        console.log(1)
        setTimeout(function() {
            console.log(3)
        }, 0);
        console.log(2)
    </script>
```

执行输出为——1 2 3

为什么会跳过等待时间为0的计时器呢

#### 执行栈

在JS中，同步任务都在主线程上执行，形成一个==执行栈==

比如上面的执行栈的同步任务有

![image-20221103204222425](D:\TyporaWorks\图片文件夹存放\image-20221103204222425.png)



虽然stTimeout是同步任务，但是里面的回调函数不是，常见的异步任务还有以下这几种

![image-20221103204147814](D:\TyporaWorks\图片文件夹存放\image-20221103204147814.png)



#### JS执行顺序

![image-20221103204814091](D:\TyporaWorks\图片文件夹存放\image-20221103204814091.png)



#### JS执行机制

```html
    <script>
        console.log(1);
        document.addEventListener('click', function() {
            console.log('click');
        })
        console.log(2);
        setTimeout(function() {
            console.log(3)
        }, 3000);        
    </script>
```

同步任务：console.log(1)，点击事件，console.log(2)，计时事件

按顺序执行

+ 打印1
+ 把点击事件挂载到==异步处理进程==里，等点击事件触发就放到==异步任务队列==里
+ 打印2
+ 把回调函数放到异步任务队列里

输出顺序

+ 打印1
+ 打印2
+ 同步任务完成，查看异步任务，把异步任务放到同步任务里开始执行，3s后打印3，然后清空异步任务队列
+ 如果中途有点击事件，就把点击事件的回调函数也放在异步处理任务里去，执行完则清空异步任务队列，如果不触发点击，则一直挂在异步进程处理那里

![image-20221103210546352](D:\TyporaWorks\图片文件夹存放\image-20221103210546352.png)

当执行完同步任务，就会去异步任务里看看有没有未执行的异步任务，有就拿过来同步任务执行，执行完再去异步任务里查看，这就是==事件循环==

#### 执行机制图解

![image-20221103210933994](D:\TyporaWorks\图片文件夹存放\image-20221103210933994.png)[TOC]

#### 什么是location对象

window对象给我们提供了一个==location属性==用于==获取或设置窗体的URL==，并且可以用于解析URL。因为这个属性==返回的是一个对象==，所以我们将这个属性也称为location对象。



#### URL

==统一资源定位符（Uniform Resource Locator，URL）==是互联网上标准资源的网址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置及浏览器该怎么处理它

#### URL的语法格式

![image-20221103211918981](D:\TyporaWorks\图片文件夹存放\image-20221103211918981.png)



#### location对象的属性

==重点记住：href和search==

![image-20221103212858036](D:\TyporaWorks\图片文件夹存放\image-20221103212858036.png)

可以直接在控制台里输出查看——F12——console——输入——回车

![image-20221103214000676](D:\TyporaWorks\图片文件夹存放\image-20221103214000676.png)



#### 案例——倒计时结束跳转到新页面

```html
    <style>
        div {
            width: 400px;
            height: 40px;
            margin: 0 auto;
            text-align: center;
            line-height: 40px;
            font-size: 15px;
            background-color: skyblue;
            color: white;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        var num = 5;
        var timer = null;
        btn.addEventListener('click', function() {
            //console.log(location.href);
            //location.href = 'https://www.jd.com';//点击后跳转到新事件
            timer = setInterval(function(){
                div.innerHTML = '将在'+ num +'秒后跳转';
                --num;
                if(num == 0) {
                    clearInterval(timer);
                    num = 5;
                    location.href = 'https://www.jd.com';
                }
            },1000);
        });      
    </script>
</body>
```



#### 获取URL参数数据

**需求：**一个输入框，输入用户名‘’xx‘’，点击登录跳转到index页面，显示‘’xx‘’欢迎你

![image-20221103225350318](D:\TyporaWorks\图片文件夹存放\image-20221103225350318.png)

##### substr用法

```html
substr('起始的位置',截取几个字符);//不写第二个参数默认截完
```

##### split用法

```html
split('=');//分隔符为=，把字符串分割成数组
```



#### 页面1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
    <form action="index.html" method="get">
        用户名：<input type="text" name="username">
        <input type="submit" value="登录">
    </form>
    <script>
        
    </script>
</body>
</html>
```

#### 页面2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 400px;
            height: 50px;
            margin: 0 auto;
            background-color: skyblue;
            line-height: 50px;
            text-align: center;
            color: white;
            font-size: 20px;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <div>
    </div>
    <script>
        var div = document.querySelector('div');
        console.log(location.search);//得到的是?username=一西
        //三步走：1.去掉问号 2.把username跟一西分开 3.得到一西
        var username = location.search;
        var params = username.substr(1,);//此时把问号去掉了
        var newname = params.split('=');
        div.innerHTML = newname[1] + '，欢迎您';
    </script>
</body>
</html>
```



#### location对象的常见方法

![image-20221103231140908](D:\TyporaWorks\图片文件夹存放\image-20221103231140908.png)

普通刷新与强制刷新的区别：第二次进网站的时候可能会比第一次块，这是因为之前加载的图片缓存在本地，如果想强制刷新从服务器再次获取图片就强制刷新[TOC]

#### navigator对象

![image-20221104000406332](D:\TyporaWorks\图片文件夹存放\image-20221104000406332.png)

**代码**

```html
    <script>
        console.log(navigator.userAgent);
    </script>
```



**切换成用手机显示**

![image-20221105133425530](D:\TyporaWorks\图片文件夹存放\image-20221105133425530.png)

**用电脑显示**

![image-20221105133521017](D:\TyporaWorks\图片文件夹存放\image-20221105133521017.png)

#### 完整代码

```html
    <script>
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i))) {
            window.location.href='index.html';//这是手机端网址
        } else {
            window.location.href='电脑端网址';//或者已经是电脑端打开的，就不用给else语句
        }
    </script>
```

[TOC]

#### history对象

window对象给我们提供了一个history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。

| history对象方法 | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| back()          | 可以后退功能                                                 |
| forward()       | 前进功能                                                     |
| go(参数)        | 前进后退功能，参数是1则前进一个页面，参数是-1则后退一个页面，以此类推 |

```html
    <a href="index.html">这是一个网址</a>
    <button>前进按钮</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click',function() {
            window.history.forward();
        })
    </script>
```

**本质上与浏览器的前进后退功能是一样的，所以仅仅作为了解即可**[TOC]

#### offset概述

![image-20221105142028537](D:\TyporaWorks\图片文件夹存放\image-20221105142028537.png)

#### offsetLeft和offsetTop获取元素偏移

```html
    <style>

        * {
            margin: 0;
            padding: 0;
        }
        .father {
            width: 200px;
            height: 200px;
            margin-top: 100px;
            margin-left: 100px;
            background-color: skyblue;
        }

        .son {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
    
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        console.log(father.offsetTop);
        console.log(father.offsetLeft);
        console.log(son.offsetTop);
        console.log(son.offsetLeft);
    </script>
</body>
```

![image-20221105144501122](D:\TyporaWorks\图片文件夹存放\image-20221105144501122.png)

因为父亲盒子没有定位，儿子盒子不以它为准，而是一级一级向上找定位盒子，直到document



```html
    <style>

        * {
            margin: 0;
            padding: 0;
        }
        .father {
            width: 200px;
            height: 200px;
            margin-top: 100px;
            margin-left: 100px;
            background-color: skyblue;
        }

        .son {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin-left: 10px;
            position: relative;
        }

        .gson {
            width: 50px;
            height: 50px;
            background-color: purple;
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">
            <div class="gson"></div>
        </div>
    </div>
    
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        var gson = document.querySelector('.gson');
        console.log(father.offsetTop);//100
        console.log(father.offsetLeft);//浏览器自带的边距9
        console.log(son.offsetTop);//100
        console.log(son.offsetLeft);//浏览器自带的边距9
        console.log(gson.offsetLeft);
    </script>
</body>
```

![image-20221105144923125](D:\TyporaWorks\图片文件夹存放\image-20221105144923125.png)

为son加上定位，它的儿子gson的offset属性就起作用了，定位以它为准，不然在往上找father盒子，没有定位再往上，找document，可以用，则以document为准



#### offsetWidth和offsetHeight获取元素大小

```html
    <script>
        var div = document.querySelector('div');
        console.log(div.offsetWidth);
        console.log(div.offsetHeight);
    </script>
```

==注意：==padding、border会影响盒子大小，所以用offset属性获得的盒子也是有加上这些参数的

==可以理解为offsetWidth = width + padding + border==

因为margin不会撑大盒子，所以不在其内



#### offsetParent返回带有定位的父亲

![image-20221105150612000](D:\TyporaWorks\图片文件夹存放\image-20221105150612000.png)

父亲盒子——儿子盒子——孙子盒子，父亲盒子有定位，输出孙子盒子的offsetParent，返回的是父亲盒子

```html
    <style>

        * {
            margin: 0;
            padding: 0;
        }
        .father {
            width: 200px;
            height: 200px;
            margin-top: 100px;
            margin-left: 100px;
            background-color: skyblue;
            position: relative;
        }

        .son {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin-left: 10px;
        }

        .gson {
            width: 50px;
            height: 50px;
            background-color: purple;
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">
            <div class="gson"></div>
        </div>
    </div>
    
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        var gson = document.querySelector('.gson');
        console.log(gson.offsetParent);//返回的是最近的带有定位的父亲
        console.log(gson.parentNode);//返回的是最近一级的父亲
    </script>
</body>
```

![image-20221105150900784](D:\TyporaWorks\图片文件夹存放\image-20221105150900784.png)



#### offset与style的区别

![image-20221105151628133](D:\TyporaWorks\图片文件夹存放\image-20221105151628133.png)

**区别1**

```html
    <style>

        * {
            margin: 0;
            padding: 0;
        }
        .box {
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="box" style="width: 300px;"></div>

    <script>
        var box = document.querySelector('.box');
        console.log(box.offsetWidth);//可以得到
        console.log(box.style.width);//得不到，只能得到行内样式表，box的css是内嵌样式
        //除非是给盒子加上行内样式<div class="box" style="width: 300px;"></div>
    </script>
</body>
```

**区别2**

![image-20221105151716524](D:\TyporaWorks\图片文件夹存放\image-20221105151716524.png)



#### 案例——获取鼠标在盒子内的坐标

要求：鼠标在盒子内点击，就能得到当前在盒子内的坐标

**分析：**可以分为以下几步

+ 得到鼠标在页面中的坐标e.pageX跟e.pageY
+ 得到盒子距离页面的边距offsetLeft跟offsetTop
+ 二者相减则是鼠标在盒子内的坐标

![image-20221105155524202](D:\TyporaWorks\图片文件夹存放\image-20221105155524202.png)

```html
<body>
    <div class="box">
    </div>

    <script>
        var box = document.querySelector('.box');
        box.addEventListener('click',function(e) {
            var x = e.pageX - box.offsetLeft;
            var y = e.pageY - box.offsetTop;
            //因为这俩获取的都是纯数字，所以相加减没问题
            console.log(x);
            console.log(y);
        })
    </script>
</body>
```

![image-20221105172249923](D:\TyporaWorks\图片文件夹存放\image-20221105172249923.png)

![image-20221106233047304](D:\TyporaWorks\图片文件夹存放\image-20221106233047304.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .login-header {
            width: 200px;
            height: 40px;
            color: black;
            font-size: 18px;
            margin: 0 auto;
        }
        .banner {
            display: none;
            /* margin: 0 auto; */
            width: 600px;
            height: 150px;
            border: 1px solid black;
            text-align: center;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: skyblue;
            z-index: 9999;
        }

        .vip {
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            font-weight: 700;
            cursor: move;
        }

        .xx {
            position: absolute;
            display: inline-block;
            width: 40px;
            height: 40px;
            right: -20px;
            top: -20px;
            border-radius: 50%;
            line-height: 40px;
            border: 1px solid black;
            background-color: azure;
        }

        .login_bg {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, .3);
        }        

    </style>
</head>
<body>
    <div class="login-header"><a id="link" href="javascript:;">点击，弹出登录框</a></div>
    <div class="banner">
        <div class="vip">登录会员</div>
        <span class="xx"><a href="javascript:;">关闭</a></span>
    <div class="login">
        用户名：<input type="text" placeholder="请输入用户名"><br>
        密&nbsp&nbsp&nbsp码：<input type="password" placeholder="请输入用户名">
    </div>
    </div>

    <div class="login_bg"></div>

    <script>
        var login = document.querySelector('.login-header');
        var banner = document.querySelector('.banner');
        var bg = document.querySelector('.login_bg');
        login.addEventListener('click',function() {
            banner.style.display = 'block';
            bg.style.display = 'block';
        });
        var xx = document.querySelector('.xx');
        xx.addEventListener('click',function() {
            banner.style.display = 'none';
            bg.style.display = 'none';
        })

        var vip = document.querySelector('.vip');
        vip.addEventListener('mousedown',function(e) {
            var x = e.pageX - banner.offsetLeft;//鼠标在盒子内的x、y
            var y = e.pageY - banner.offsetTop;
            //注意点就是这里的document
            document.addEventListener('mousemove',move);
            function move(e) {
                //console.log('你好');
                banner.style.top = e.pageY - y + 'px';
                banner.style.left = e.pageX - x +'px';
            }
            //鼠标弹起，移除移动事件
            document.addEventListener('mouseup',function() {
                document.removeEventListener('mousemove',move);
            })
        });

        
    </script>
</body>
</html>
```

