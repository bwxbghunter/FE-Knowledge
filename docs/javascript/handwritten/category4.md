# 模拟实现promise.all及其它方法

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