# 4、模拟实现promise.all及其它方法

## 模拟all方法
```js
Promise.myAll = arr => {
    const res = []; // 记录数组中每个promise返回的值
    let count = 0; // 计数器
    // promise.all返回的是一个promise
    return new Promise((resolve, reject) => {
        // 遍历数组
        arr.forEach((item, i) => {
            // 将当前项赋值给一个变量，判断该项是否是promise实例，如果不是promise实例而是具体值时
            // 将该项包装成promise
            let currentItem = item;
            if (!(currentItem instanceof Pormise)) {
                currentItem = Promise.resolve(currentItem);
            }
            currentItem.then(
                value => {
                    res[i] = value; // 保存每一项内容
                    count++
                    // 判断计数长度和数组长度相同时，直接返回
                    if (count === arr.length) {
                       return resolve(res);
                    }
                },
                err => {
                    // 遇到错误直接返回
                    reject(err);
                }
            )
        })
    })
}
```

## 模拟allSettled方法


```js
Promise.allSettled1 = arr => {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((item, i) => {
            let currentItem = item;
            if (!(currentItem instanceof Promise)) {
                currentItem = Promise.resolve(currentItem);
            }
            currentItem.then(
                res => {
                    result[i] = { status: 'fulfilled', value: res };
                    count++;
                    if (count === arr.length) {
                        resolve(result);
                    }
                },
                err => {
                    result[i] = { status: 'rejected', reason: err };
                    count++;
                    if (count === arr.length) {
                        resolve(result);
                    }
                }
            )
        })
    })
}

// 方法二
Promise.allSettled2 = arr => {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            item.then(res => {
                result.push({ status: 'fulfilled', value: res });
                count++;
            }).catch(err => {
                result.push({ status: 'rejected', reason: err });
                count++
            }).finally(() => {
                if (count === arr.length) {
                    resolve(result);
                }
            })
        })
    })
}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)
Promise.allSettled1([p1, p2, p3]).then(res => {
    console.log(res)
})
// [
//   {status: 'fulfilled', value: 1},
//   {status: 'fulfilled', value: 2},
//   {status: 'fulfilled', value: 3}
// ]
const e1 = Promise.resolve(1)
const e2 = Promise.reject(2)
const e3 = Promise.resolve(3)

Promise.allSettled1([e2, e1, e3]).then(res => {
    console.log(res, '---')
}).catch(err => {
    console.log(err, '++++')
})
```
## 模拟race方法

```js
Promise.race1 = arr => {
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            if (!(item instanceof Promise)) {
                resolve(item);
            }
            item.then(
                res => {
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            )
        })
    })
}
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)
Promise.race1([p1, p2, p3]).then(res => {
    console.log(res)
})
// 1

const e1 = Promise.resolve(1)
const e2 = Promise.reject(2)
const e3 = Promise.resolve(3)

Promise.race1([e2, e1, e3]).then(res => {
    console.log(res, '---')
}).catch(err => {
    console.log(err, '++++')
})
```

## 模拟实现any

```js
Promise.any1 = arr => {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((item, i) => {
            if (!(item instanceof Promise)) {
                resolve(item);
            }
            item.then(
                res => {
                    resolve(res);
                },
                err => {
                    result[i] = err;
                    count++;
                    if (count === arr.length) {
                        reject(new AggregateError(result));
                    }
                }
            )
        })
    })
}
```