# 12、模拟实现Object.create

Object.create的好处是对新创建对象实例的解耦，新的对象改变不会影响原来的数据。

```js
function ObjCreate(prototype) {
    const tempFn = function() {};
    tempFn.prototype = Prototype;
    return new tempFn();
}
```