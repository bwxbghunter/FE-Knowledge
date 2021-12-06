# 27、实现函数柯里化

```js
function currying(fn) {
    const args = [...arguments].slice(1);
    return function() {
        if (fn.length <= ) {
            fn.apply(this, [...args, ...arguments]);
        } else {
            fn.apply(this, arguments);
        }
    }
}

```