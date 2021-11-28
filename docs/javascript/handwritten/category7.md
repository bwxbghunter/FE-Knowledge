# 7、模拟实现发布订阅

```js
class EmitEventer {
    constructor() {
        this.linsteners = {}
    }
    on(fn, type) {
        if (!this.linsteners[type]) {
            this.linsteners[type] = []
        }
        this.linsteners[type].push(fn)
    }
    emit(type, ...args) {
        if (!this.linsteners[type]) return ;
        this.linsteners[type].forEach(fn => {
            fn && fn(...args);
        });
    }
    off(type, fn) {
        if (!this.linsteners[type]) return ;
        this.linsteners[type] = this.linsteners[type].filter(item => item !== fn);
    }
    once(type, fn) {
        const tempFn = () => {
            fn();
            this.off(type, fn)
        }
        this.on(tpye, tempFn);
    }
}

function cat(name) {
    console.log('cat----->', name)
}

function dog() {
    console.log('dog----->')
}
const e1 = new EmitEventer()

e1.on('pet', cat)
e1.on('pet', dog)

e1.off('pet', dog)
e1.emit('pet', '波斯猫')
```