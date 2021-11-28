# 15、实现js获取数据类型的通用函数

```js
function isType(type) {
    return Object.prototype.toString
    .call(type)
    .slice(8, -1)
    .toLowerCase();
}
```