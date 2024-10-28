[TOC]

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

