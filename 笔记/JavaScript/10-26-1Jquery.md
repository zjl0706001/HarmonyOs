```html
<script>
    document.getElementById('div_test');
</script>
<body>
    <div id="div_test">132</div>
</body>
```

在页面还未渲染完成时获取相关元素会报错的，因为此时还没有这个元素“div_test"

```js
    window.onload = function() {
        document.getElementById('div_test');
    }
```

把代码放在onload函数里，意思是在页面渲染完成以后执行该函数，但是整个文档中只能出现一个onload函数，但是在Jquery就不一定了

js的普通写法

```js
    window.onload = function() {
        document.getElementById('div_test');
    }
```

引入jquery的写法

完整写法

```js
$(document).ready(function(){
    window.document.getElementById('div_test');
});
```

简写写法

```js
$(function(){
    console.log(window.document.getElementById('div_test'));
});
```

两者作用是类似的，都是在页面加载完成后调用该函数，但是必须要引入jquery

```html
<script src="https://lib.baomitu.com/jquery/1.12.4/jquery.min.js"></script>
```



#### jq与js的转换

##### js数组与jq数组

```html
	<div class="test">1</div>
    <div class="test">2</div>
    <div class="test">3</div>
```

页面有多个div，二者是一样的，都能获取所有div

```js
console.log(document.querySelectorAll('.test'));
console.log($('.test'));
```

但是一个是获取到jq对象的数组，一个是nodelist数组

上面是nodelist，下面是jquery对象的数组

![image-20221026134521052](D:\TyporaWorks\图片文件夹存放\image-20221026134521052.png)



##### jq对象与普通对象的转换

```html
<div id="xx">123</div>
```

```js
	console.log(document.querySelector('#xx'));
    console.log($('#xx'));
```

![image-20221026134838782](D:\TyporaWorks\图片文件夹存放\image-20221026134838782.png)

同样要获取一个id为xx的div，上面是正常获取到该节点，美元符号获取的是一个jq对象

##### jq对象所包裹的内容

![image-20221026135108191](D:\TyporaWorks\图片文件夹存放\image-20221026135108191.png)

```js
console.log($('#xx')[0]);//转化成普通对象
```

![image-20221026135008912](D:\TyporaWorks\图片文件夹存放\image-20221026135008912.png)





在js中，这两个是一样的，都是获取一个id为div_test的对象

```js
	console.log(document.getElementById('div_test'));
    console.log(document.querySelector('#div_test'));
```



##### jq获取所有对象

```js
$("*");
```



##### 获取当前

```
$(this);
```

