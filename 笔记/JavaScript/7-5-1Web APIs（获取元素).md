#### Web APIs和JS的关联

![image-20220705145529426](image-20220705145529426.png)



![image-20220705145646236](image-20220705145646236.png)

JS基础学习ECMAScript基础语法为后面作铺垫，Web APIs是JS的应用，大量使用JS基础语法做交互效果

![image-20220705150048694](image-20220705150048694.png)

![image-20220705150220688](image-20220705150220688.png)

![image-20220705150353122](image-20220705150353122.png)

#### DOM

![image-20220705150659625](image-20220705150659625.png)

![image-20220705150931104](image-20220705150931104.png)

#### 如何获取页面元素

![image-20220705151623671](image-20220705151623671.png)

#### 根据ID获取

使用==getElementById()==方法可以获取带有ID的元素对象

![image-20220705152038189](image-20220705152038189.png)![image-20220705152919718](image-20220705152919718.png)

![image-20220705153112554](image-20220705153112554.png)



#### 根据标签名获取

通过==getElementsByTagName()==方法可以返回带有指定标签名的==对象的集合==

若找不到标签名，则返回==空的伪数组==

![image-20220705154022554](image-20220705154022554.png)

![image-20220705154039038](image-20220705154039038.png)

![image-20220705154353323](image-20220705154353323.png)

![image-20220705154457074](image-20220705154457074.png)

##### 获取某个父元素下的子标签

比如ul-li跟ol-li，只要获取ol里面的li标签

![image-20220705155429022](image-20220705155429022.png)

**例子**

```html
<body>

    <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ol>

    <ul>
        <li>6</li>
        <li>7</li>
        <li>8</li>
    </ul>

    <script>
        var ols = document.getElementsByTagName('li');
        //获取的ols是一个伪数组，但是用于获取子标签必须是单个对象
        //所以要用数组元素的方式进行使用
        console.log(ols[0].getElementsByTagName('li'));
    </script>

</body>
```

或者是为ol指定id，然后ols = getid，直接(ols.getElementsByTagName('li')也可以



#### 通过HTML5新增的方法获取

![image-20220705161930797](image-20220705161930797.png)

```
document.getElementsByClassName('类名');//根据类名返回元素对象集合
```

##### getElementsByClassName

![image-20220705161011365](image-20220705161011365.png)

![image-20220705161031079](image-20220705161031079.png)

##### querrySelector

什么选择器都可以选

![image-20220705161844762](image-20220705161844762.png)

##### querrySelectorAll

![image-20220705162124602](image-20220705162124602.png)