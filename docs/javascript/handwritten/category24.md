# 24、将数组对象转换化为树形结构

```js
const arr = [
    {
        id: '1',
        parent_id: 'root',
        name:'abc'
    },
    {
        id: '2',
        parent_id: 'root',
        name:'abc'
    },
    {
        id: '1-1',
        parent_id: '1',
        name:'abc'
    },
    {
        id: '1-2',
        parent_id: '1',
        name:'abc'
    },
    {
        id: '1-1-1',
        parent_id: '1-1',
        name:'abc'
    },
    {
        id: '1-1-2',
        parent_id: '1-1',
        name:'abc'
    },
    {
        id: '1-2-1',
        parent_id: '1-2',
        name:'abc'
    },
    {
        id: '2-1',
        parent_id: '2',
        name:'abc'
    },
    {
        id: '2-2',
        parent_id: '2',
        name:'abc'
    },
    {
        id: '2-1-1',
        parent_id: '2-1',
        name:'abc'
    },
    {
        id: '2-2-1',
        parent_id: '2-2',
        name:'abc'
    },
    {
        id: '2-2-1-1',
        parent_id: '2-2-1',
        name:'abc'
    },
    {
        id: '2-2-1-2',
        parent_id: '2-2-1',
        name:'abc'
    },
     {
        id: '2-2-1-2-1',
        parent_id: '2-2-1-2',
        name:'abc'
    },
    {
        id: '2-3',
        parent_id: '2',
        name:'abc'
    },
    {
        id: '2-3-1',
        parent_id: '2-3',
        name:'abc'
    },
    {
        id: '3',
        parent_id: 'root',
        name:'abc'
    } 
 ]
```