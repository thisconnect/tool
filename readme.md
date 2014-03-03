# Tool

Notice: Arrays are handled as 

API
---

- merge(object1, object2)

- get(object, path)

- set(object, path, value)

- setCharAt(string, index, chars)

- isArray()

- version

Example
-------

```javascript
var merge = require('tool').merge;

merge({foo: 1}, {bar: 2});
// {foo: 1, bar: 2}
```

Tests
-----

```make
make
```
