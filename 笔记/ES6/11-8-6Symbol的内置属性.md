[TOC]

#### Symbol.isConcatSpreadable

对象的Symbol.isConcatSpreadable属性等于的是一个==布尔值==，表示该对象用于Array.prototype.concat()时，是否可以展开

```html
    <script>
      const arr1 = [1,2,3];
      const arr2 = [4,5,6];
      console.log(arr1.concat(arr2));//正常合并

      console.log('======分隔符======');

      arr1[Symbol.isConcatSpreadable] = false;//表示合并时不展开
      console.log(arr1.concat(arr2));
    </script>
```

![image-20221109002244240](D:\TyporaWorks\图片文件夹存放\image-20221109002244240.png)

后面有了解到其他方法再进行补充

