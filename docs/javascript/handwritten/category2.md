# 2、模拟实现继承

寄生组合式继承 可以解决构造函数继承上的缺点和原型继承上的缺点

1. 构造函数继承可以传参，但是无法继承原型上面的属性和方法
2. 原型继承，原型上的属性方法共享，如果属性为引用类型的话，其中一个实例改变了这个属性，会导致使用了这个属性的其它实例也跟着改变，会造成不可预期的后果。

```js
// 定义父类
function Parent(name) {
    // 父类内部属性
    this.name = name;
}
// 父类原型上的属性方法
Parent.prototype.say = function() {
    console.log(this.name);
}
// 定义子类
function Child() {
    // 通过call改变this指向，这样子类就可以访问父类内部的属性了。
    Parent.call(this, ...arguments);
}

// 继承父类原型上的方法
Child.prototype = Object.create(Parent.prototype);
// 将构造器指回自己
Child.prototype.constructor = Child;

const c1 = new Child('森界降临');
c1.say()
```