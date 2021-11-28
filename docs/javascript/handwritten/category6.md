# 6、模拟实现深拷贝

```js
function deepClone(source, map = new Map()) {
    if (source === null) return null;
    const target = Array.isArray(source) ? [] : {};
    if (map.has(source)) {
        return map.get(source);
    }
    map.set(source, target);
    for(let key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] && typeof source[key] === 'object') {
                target[key] = deepClone(source[key], map);
            } else {
                target[key] = source[key];
            }
        }
    }
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
``