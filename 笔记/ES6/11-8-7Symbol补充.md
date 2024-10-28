[TOC]

#### Symbol补充——来自阮一峰

原文地址

```http
https://es6.ruanyifeng.com/#docs/symbol
```



注意，`Symbol()`函数前不能使用`new`命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象，所以不能使用`new`命令来调用。另外，由于 Symbol 值不是对象，所以也不能添加属性。基本上，它是一种类似于字符串的数据类型。

`Symbol()`函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。这主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```html
<script>
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
</script>
```

上面代码中，`s1`和`s2`是两个 Symbol 值。如果不加参数，它们在控制台的输出都是`Symbol()`，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。

如果 Symbol 的参数是一个对象，就会调用该对象的`toString()`方法，将其转为字符串，然后才生成一个 Symbol 值。

```html
<script>
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)
</script>
```

**Symbol 值不能与其他类型的值进行运算，会报错。**

```html
<script>
let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string
<script>
```

**但是，Symbol 值可以显式转为字符串。**

```
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

**另外，Symbol 值也可以转为布尔值，但是不能转为数值。**

```html
<script>
let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError
</script>
```

前面说过，`Symbol()`函数创建 Symbol 值时，可以用参数添加一个描述。

```
const sym = Symbol('foo');
```

上面代码中，`sym`这个值的描述就是字符串`foo`。

但是，读取这个描述需要将 Symbol 显式转为字符串，即下面的写法。

```html
<script>
const sym = Symbol('foo');

String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"
</script>
```

##### description方法

上面的用法不是很方便。[ES2019](https://github.com/tc39/proposal-Symbol-description) 提供了一个 Symbol 值的实例属性`description`，直接返回 Symbol 值的描述。

```html
<script>
const sym = Symbol('foo');
sym.description // "foo"
</script>
```



#### 作为属性名的Symbol

由于每一个 Symbol 值都是不相等的，这意味着只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

```html
<script>
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
</script>
```

上面代码通过方括号结构和==Object.defineProperty()==方法，将对象的属性名指定为一个 Symbol 值。

==注意，Symbol 值作为对象属性名时，不能用点运算符。==

```html
<script>
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
</script>
```

上面代码中，因为点运算符后面总是字符串，所以不会读取`mySymbol`作为标识名所指代的那个值，导致`a`的属性名实际上是一个字符串，而不是一个 Symbol 值。

==同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。==

```html
<script>
let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};

obj[s](123);
</script>
```

上面代码中，如果`s`不放在方括号中，该属性的键名就是字符串`s`，而不是`s`所代表的那个 Symbol 值。

采用增强的对象写法，上面代码的`obj`对象可以写得更简洁一些。

```html
<script>
let obj = {
  [s](arg) { ... }
};
</script>
```

Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。

```html
<script>
const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');
</script>
```

下面是另外一个例子。

```html
<script>
const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}
</script>
```

常量使用 Symbol 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的`switch`语句会按设计的方式工作。

==还有一点需要注意，Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。==