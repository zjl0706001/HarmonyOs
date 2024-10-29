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

采用==this.className = 'first change';==，则相同类型的样式会被覆盖，没有新的样式会被保留，而原来的==this.className = 'change';==则是完全覆盖，就算新的样式没有，也会把旧的覆盖掉