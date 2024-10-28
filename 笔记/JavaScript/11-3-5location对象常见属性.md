[TOC]

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

普通刷新与强制刷新的区别：第二次进网站的时候可能会比第一次块，这是因为之前加载的图片缓存在本地，如果想强制刷新从服务器再次获取图片就强制刷新