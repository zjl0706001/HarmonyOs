[TOC]

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

