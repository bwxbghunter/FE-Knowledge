# 1、模拟实现call、apply、bind、new

## 模拟实现call

```js
// 思路：this的指向是谁调用它，它就指向谁。
Function.prototype.myCall = function(obj) {
    // obj为传递进来的对象，如果传递进来的对象不存在，则默认指向window
    const context = obj || window;
    // 给当前的函数赋值给context对象作为一个属性
    context.func = this;
    // 获取传进来的参数，去除第一个参数，因为第一个参数为传递的this指向对象
    const args = [...arguments].slice(1);
    // 执行函数调用，并将结果保存
    const result = context.func(...args);
    // 将函数属性删除
    delete context.func;
    // 返回结果
    return result;
}

value = 666;
const testObj = {
    value: 999
}
function hunter(name, age) {
    console.log(name, age, this.value)
}

hunter.myCall(testObj, '森界降临', 18) // '森界降临' 18 999
hunter.myCall(null, '森界降临', 18) // '森界降临' 18 666
```

## 模拟实现apply

```js
// 思路：this的指向是谁调用它，它就指向谁。
Function.prototype.myApply = function(obj, arr) {
    // obj为传递进来的对象，如果传递进来的对象不存在，则默认指向window
    const context = obj || window;
    // 给当前的函数赋值给context对象作为一个属性
    context.func = this;
    let result;
    // 判断参数arr是否存在，不存在直接调用函数
    if (!arr) {
        result = context.func();
    } else {
        result = context.func(...arr);
    }
    // 将函数属性删除
    delete context.func;
    // 返回结果
    return result;
}

value = 666;
const testObj = {
    value: 999
}
function hunter(name, age) {
    console.log(name, age, this.value)
}

hunter.myApply(testObj, ['森界降临', 18]) // '森界降临' 18 999
hunter.myApply(null, ['森界降临', 18]) // '森界降临' 18 666
```

## 模拟实现bind

bind方法有如下特点

1. 可以修改函数的this指向
2. 会返回一个函数，不会立即执行
3. 有返回值
4. 可以传入参数
5. 返回新函数的时候传了一部分参数，在调用这个新函数时还可以另外再传入参数 （可以理解为分步处理参数的过程）
6. 如果使用new运算符构造绑定函数，则忽略该值, 也就是说当bind返回的新函数作为构造函数使用的时候，bind()时指定的this会失效，但是参数依然有效。

```js
Function.prototype.myBind = function(context) {
    // 收集除了传入的对象之外的参数
    const _args = [...arguments].slice(1);
    // 保存this
    const _this = this;
    // 声明一个函数
    function boundFn() {
        // 收集后续传递进来的参数
        const args = [...arguments].slice();
        // 判断this是否是boundFn原型上的属性，将之前传入的参数进行合并，注意先后顺序
        return _this.apply(this instanceof boundFn ? this : context, _args.concat(args))
    }
    // 如果作为一个构造函数使用，需要将this的指向失效
    boundFn.prototype = Object.create(this.prototype);
    boundFn.prototype.constructor = boundFn;
    return boundFn;
}
```

## 模拟实现new

```js
function MyNew(Parent, ...args) {
    // 创建一个新对象，使其具有构造函数原型上的属性
    const child = Object.create(Parent.prototype);
    // 使用call改变this指向，使其可以访问构造函数中的属性
    const result = Parent.call(child, ...args);
    // 判断是否有手动返回对象，没有返回child
    return typeof result === 'object' ? result || child : child;
}
```