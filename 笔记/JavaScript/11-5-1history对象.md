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

**本质上与浏览器的前进后退功能是一样的，所以仅仅作为了解即可**