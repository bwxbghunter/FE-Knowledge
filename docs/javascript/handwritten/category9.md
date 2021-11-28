# 9、实现数据扁平化

```js
function flat(arr) {
    if(!arr || arr.length === 0) return [];
    return arr.reduce((pre, cur, index, arr) => {
        if (Array.isArray(cur)) {
            return pre.concat(flat(cur));
        } else {
            return pre.concat(cur);
        }
    }, [])
}

function flat1(arr) {
    if(!arr || arr.length === 0) return [];
    const ary = [];
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ary.push(...flat1(arr[i]))
        } else {
            ary.push(arr[i])
        }
    }
    return ary;
}

console.log(flat([1, 2, 3, [4, 5], 6, 7, [8, [9], 10]]));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```