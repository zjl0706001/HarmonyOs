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

