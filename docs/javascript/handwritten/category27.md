# 27、实现函数柯里化

```js
function currying(fn) {
    const args = [...arguments].slice(1);
    const len = fn.length;
    return function() {
        const _args = [...args, ...arguments];
        // 通过传进来的fn函数length属性，可以知道该函数可以接收几个参数。
        if (_args.length >= len) {
            return fn.apply(this, _args);
        }
        return currying.call(this, fn, ..._args);
    }
}
```

## 柯里化有哪些好处

1. 参数复用

2. 提前确认


3. 延迟运行
    + bind实现的机制