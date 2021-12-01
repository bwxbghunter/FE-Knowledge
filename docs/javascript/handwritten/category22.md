# 22、实现字符串转驼峰

## 方法一

将字符串`hello-world-top` 转换为首字母大写的字符串
```js
function convertToCamelCase(str) {
    if (typeof str === 'object') {
        return ''
    }
    if (typeof str !== 'string') {
        str = String(str);
    }
    const arr = str.split('-');
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join('');
}

console.log(convertToCamelCase('hello-world-top')) // HelloWorldTop
```

## 方法二

将字符串`hello-world-top` 转换为首字母大写的字符串
```js
function convertToCamelCase(str) {
    
}

console.log(convertToCamelCase('hello-world-top')) // HelloWorldTop
```