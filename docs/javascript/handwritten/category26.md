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

function throttle1(fn, wait) {
    let timer = null;
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, [...arguments]);
            }, wait);
            timer = null;
        }
    }
}

function handle() {
    console.log('test')
}
window.addEventLinsenter('click', throttle(handle, 1000))
```