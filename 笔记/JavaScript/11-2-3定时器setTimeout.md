[TOC]

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

