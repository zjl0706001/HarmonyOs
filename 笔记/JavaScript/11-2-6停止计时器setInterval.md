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

