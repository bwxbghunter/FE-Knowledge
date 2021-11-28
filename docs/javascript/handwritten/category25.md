# 25、实现防抖

```js
function debounce(fn, wait) {
    let timer = null;
    return function() {
        const args = arguments; // 参数存储
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, [...args]);
        }, wait)
    }
}

function handle(name) {
    console.log(name)
}
const fnn = debounce(handle, 1000);
window.addEventListener('click', () => { fnn('abc') })
```