[TOC]

Symbol的一个应用场景就是给对象添加属性和方法

#### 代码——添加方式1

```html
    <script>
      //存在对象game，里面存在很多属性和方法，
      //我想往game对象里面添加放方法up(),但是又怕重名冲突
       let game = {
        up: function() {
          console.log('game原生方法');
        }
       }
      //自己声明一个对象
       let methods = {
        up: Symbol()//声明一个Symbol的变量
       }
       //然后将其添加到game对象里去
       //注意：变量作为方法不能用.,用[]
       game[methods.up] = function() {
        console.log('我是后续添加的同名方法');
       }

       game.up();//调用的是game对象的原生方法
       console.log(game);
    </script>
```

![image-20221108224522059](D:\TyporaWorks\图片文件夹存放\image-20221108224522059.png)

#### 代码——添加方式2

```html
    <script>
      //存在对象game，里面存在很多属性和方法，
      //我想往game对象里面添加放方法up(),但是又怕重名冲突
       let game = {
        up: function() {
          console.log('game原生方法');
        },
        //=======添加在这里
        [Symbol('up')]: function() {//=============这个方式创建时有引号，不加引号报错
          console.log('后续添加方法');
        }
       }

		
       game.up();//调用的是game对象的原生方法
       console.log(game);
    </script>
```

![image-20221108225148849](D:\TyporaWorks\图片文件夹存放\image-20221108225148849.png)

==两种方式是一模一样的==



#### 创建方式及调用方式补充——来自阮一峰

在添加方式2中

```html
    <script>
      //存在对象game，里面存在很多属性和方法，
      //我想往game对象里面添加放方法up(),但是又怕重名冲突
       let game = {
        up: function() {
          console.log('game原生方法');
        },
        //=======================================
        [Symbol('up')]: function() {
          console.log('后续添加方法');
        }
        //=======================================
       }
//这里两条分隔符中间创建的Symbol的方式是有问题的，因为Symbol的（）中是引号，代表字符串，
//所以在使用       obj['方法名']这种方式调用时，也必须加引号
//例如            game['up']
    </script>
```

**接着正题，创建方式及调用方式的补充**

##### 调用方式1——obj[方法名] ()

==注意==：因为这里的创建方式中，中括号的方法名是没有引号的，所以调用时也不用引号

```html
<script>        
		let up1 = Symbol();
        let down1 = Symbol();
        let game1 = {
            name: 'YY',
            up1() {
                console.log(1);
            },
            down1() {
                console.log(2);
            },
            [up1]() {//===========================这里没有引号
                console.log('向上');
            },
            [down1]() {
                console.log('向下');
            }
        }
//调用普通方法
        game1.up1(); // 1
        game1.down1(); // 2
//调用同名的Symbol方法
    	game1[up1](); //==========================调用时也没有引号
   		game1[down1]();
</script>
```

##### 调用方式2——obj[Reflect.ownKeys(obj) [index]] ()

==注意：==这种方式是通过索引值调用对象里的==所有属性==，包括变量和方法，虽然变量会占用一个索引值但是无法输出，可以通过索引值输出普通方法和Symbol方法，只要知道方法所在的位置就行

```html
    <script>
       let game = {
        name:'你好',
        up: function() {
          console.log('game原生方法');
        },
        //=======添加在这里
        [Symbol('up')]: function() {
          console.log('后续添加方法');
        }
       }

       game[Reflect.ownKeys(game)[0]]();//这是name属性——但是会报错
       game[Reflect.ownKeys(game)[1]]();//这是原生方法
       game[Reflect.ownKeys(game)[2]]();//这是后续添加的同名方法

    </script>
```

##### 调用方式3——Object.getOwnPropertySymbols(obj) [index] ();

==注意：==该方式把game对象的Symbol方法全都返回给a数组，然后game对象利用[]调用Symbol方法，a数组里面存放的只有Symbol方法

```html
    <script>
      let xx = Symbol();
       let game = {
        name:'你好',
        xx: '小明',
        up: function() {
          console.log('game原生方法');
        },
        //=======添加在这里
        [Symbol('up')]: function() {
          console.log('后续添加方法');
        },
        [Symbol('down')]: function() {
          console.log('后续添加方法');
        }
       }

       const a = Object.getOwnPropertySymbols(game);
       game[a[0]]();//后续添加方法
       console.log(a);
       console.log(game.xx);//小明——Symbol对象是用点调用的
       console.log(typeof xx);//Symbol类型
    </script>
```

![image-20221109001002439](D:\TyporaWorks\图片文件夹存放\image-20221109001002439.png)
