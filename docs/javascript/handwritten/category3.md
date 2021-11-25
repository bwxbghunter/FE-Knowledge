# 模拟实现promise

1. Promise接受一个参数，该参数为一个函数，此函数接收两个参数，分别为resolve, reject
2. Promise内部会立即执行该函数。
3. Promise共有三种状态：pending、fulfilled、rejected, 只要状态变更了，就不会再变化了，即状态不可逆。
4. resolve方法负责执行变更状态为fulfilled，同时记录当前resolve传进来的value值。
5. reject方法负责执行变更状态为rejected，同时记录当前reject传进来的reason值。
6. then方法接受两个函数作为参数，第一个参数负责接受fulfilled状态的函数，第二个参数负责接受rejected状态的函数。同时then方法为了链式调用，返回的是一个promise。当状态为pending时，不会立即执行函数，而是将onFulfilled和onRejected两个函数进行收集（见下面代码），状态从pending变为其它状态时，会依次调用之前收集到的方法。

```js
class MyPromise{
    constructor(exec) {
        this.value = null;
        this.status = 'pending';
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = value => {
            if (this.status !== 'pending') return false;
            this.status = 'fulfilled';
            this.value = value;
            this.onResolvedCallbacks.forEach(cb => {
                cb && cb(this.value);
            })
        }
        const reject = reason => {
            if (this.status !== 'pending') return false;
            this.status = 'rejected';
            this.value = reason;
            this.onRejectedCallbacks.forEach(cb => {
                cb && cb(this.value);
            })
        }
        try{
            exec(resolve, reject)
        } catch(err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        const promise1 = new MyPromise((resolve, reject) => {
            const resolveFn = callback => {
                setTimeout(() => {
                    const x = callback(this.value);
                    if (x === promise1) {
                        return new Error('不能返回自身');
                    }
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    } else {
                        resolve(x)
                    }
                }, 0)
            }
            if (this.status === 'fulfilled') {
                resolveFn(onFulfilled);
            }
            if (this.status === 'rejected') {
                resolveFn(onRejected);
            }

            if (this.status === 'pending') {
                this.onResolvedCallbacks.push(resolveFn(onFulfilled));
                this.onRejectedCallbacks.push(resolveFn(onRejected));
            }
        })
        return promise1;
    }
}

const p1 = new MyPromise((resolve, reject) => {
    resolve(134);
    console.log(111);
}).then(res => {
    console.log(res)
})
```