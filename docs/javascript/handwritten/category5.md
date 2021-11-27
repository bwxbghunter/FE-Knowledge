# 模拟实现数据方法(filter、some、every、reduce、map等)

## 模拟filter

```js
Array.prototype.filter1 = function(fn) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
console.log([1,3,5].filter1(val => val === 5))
```

## 模拟some
