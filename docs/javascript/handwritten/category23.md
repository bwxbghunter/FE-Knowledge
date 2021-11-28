# 23、实现compose函数

```js
const compose = function(middleware) {
    let index = -1;
    return function(ctx, next) {
        function dispatch(i) {

            if (index >= i) return Promise.reject('more multiple callbacks')

            index = i;

            const fn = middleware[i];

            if (i === middleware.length) fn = next;

            if (!fn) return Promise.resolve();

            try {
                return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)))
            } catch(err) {
                return Promise.reject(err);
            }
        }
        return dispatch(0)
    }
}

```
