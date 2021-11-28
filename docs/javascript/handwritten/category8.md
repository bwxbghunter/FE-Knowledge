# 8、模拟实现instanceof

```js
function MyInstanceof(left, right) {
    let l = left.__proto__;
    let r = right.prototype;
    while(l !== r) {
        if (l.__proto__ === null) {
            return false;
        }
        l = l.__proto__;
    }
    return true;
}

function P() {}

const p1 = new P();
const p2 = {};

console.log(MyInstanceof(p1, P)) // true
console.log(MyInstanceof(p2, P)) // false
```