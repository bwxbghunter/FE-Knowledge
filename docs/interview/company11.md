# moka

1. vue.use实现原理
2. vue中scope实现的原理
3. node是如何开启子进程的
4. webpack有哪些性能优化
5. webpack中mainfest文件和** 文件是干什么的
6. 实现一个JSON.stringfy
    ```js
    const data = {
        a: 1,
        b: [
            2,
            3,
            {
                c: 4,
            }
        ],
        d: 5,
        e: 6,
    }
    // 原样输出字符串类型数组
    `
    {
        a: 1,
        b: [
            2,
            3,
            {
                c: 4,
            }
        ],
        d: 5,
        e: 6,
    }
    `
    ```

7. 下面代码执行结果是什么
    ```js
        class Parent{
            constructor() {
                return 123
            }
        }
        const p1 = new Parent()
    ```
8. vue组件中name的作用都有哪些