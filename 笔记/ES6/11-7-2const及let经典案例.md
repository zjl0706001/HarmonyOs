[TOC]

#### 为盒子s循环注册点击事件

```html
    <script>
        var divs = document.querySelectorAll('div');
        for(var i = 0; i < divs.length;i++) {
            divs[i].onclick = function() {
                this.style.background = 'skyblue';
            }
        }
        //本方法是为三个盒子注册点击事件切换背景颜色
        //如果把this换成divs[i]将会出错
        //这是因为var没有块级作用域，当进行三次循环体为div注册点击事件后
        //i的值最后一次自增变成3，当执行点击程序后，函数题没有i，往外界找
        //var是不属于for的，在块级里声明等于在全局声明的，所以window下面有i，为3，所以divs[i]永远都是divs[3]，所以报错

        //把var改为let时，i一直是在for下面的，相互独立
    </script>
```



#### const声明常量以及特点

+ 必须赋初始值
+ 一般常量使用大写
+ 常量的值不能修改
+ 也是块级作用域
+ 对数组和对象的元素修改，不算对常量的修改，不会报错

```html
    <script>
        const A = 'hello';//必须给初值
        //A = 'xxbb';//报错——不能修改
        const TEAM = ['你','好','世','界'];
        TEAM.push('hello');//虽然是对数组元素进行修改，但是数组指向的地址没有变化
    </script>
```

