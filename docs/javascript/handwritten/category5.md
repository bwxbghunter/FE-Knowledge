# 5、模拟实现数据方法(filter、some、every、reduce、map等)

## 模拟filter

```js
Array.prototype.filter1 = function(fn) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
console.log([1,3,5].filter1(val => val === 5))
```

## 模拟some

```js
Array.prototype.some = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i])) {
            return true;
        }
    }
    return false
}
```

## 模拟every

```js
Array.prototype.every = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if(!fn(this[i])) {
            return false;
        }
    }
    return true;
}
```

## 模拟map

```js
Array.prototype.map = function(fn) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(fn(this[i]))
    }
    return result;
}
```

## 模拟reduce

```js
Array.prototype.reduce = function(fn, initVal) {
    for(let i = 0; i < this.length; i++) {
        initVal = fn(initVal, this[i], i, this);
    }
    return initVal;
}
```

## 使用reduce模拟实现map
```js
Arrary.prototype.map = function(fn) {
    const result = [];
    this.reduce((pre, cur, i, arr) => {
        result.push(fn(cur, i, arr))
    })
    return result;
}
```