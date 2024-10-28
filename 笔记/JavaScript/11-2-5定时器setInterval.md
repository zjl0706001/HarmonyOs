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

