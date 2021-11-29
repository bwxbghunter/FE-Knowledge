# 26、实现节流
```js
function throttle(fn, wait) {
    let start = Date.now();
    return function() {
        const current = Date.now();
        const res = current - start;
        if (res >= wait) {
            fn.apply(this, [...arguments]);
            start = Date.now();
        }
    }
}

function handle() {
    console.log('test')
}
window.addEventLinsenter('click', throttle(handle, 1000))
```