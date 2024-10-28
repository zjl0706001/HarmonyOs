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

4.createElement()创建多个元素效率稍微低一些，但是结构更加清晰