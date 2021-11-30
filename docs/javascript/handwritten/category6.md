# 6、模拟实现深拷贝

```js
function deepClone(source, map = new WeakMap()) {

    if (source === null) return null;

    if (source instanceof Date) {
        return new Date(source);
    }

    if (source instanceof RegExp) {
        return new RegExp(source);
    }

    if (map.has(source)) {
        return map.get(source);
    }

    const target = Array.isArray(source) ? [] : {};
   
    map.set(source, target);

    // for(let key in source) {
    //     if (source.hasOwnProperty(key)) {
    //         if (source[key] && typeof source[key] === 'object') {
    //             target[key] = deepClone(source[key], map);
    //         } else {
    //             target[key] = source[key];
    //         }
    //     }
    // }

    Reflect.ownKeys(obj).forEach(key => {
        target[key] = deepClone(souce[key], map)
    })

    return target;
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

const result = deepClone(target);
console.log(result);
```

* Reflect相关知识点
* WeakMap相关知识点
* WeakMap和Map的区别