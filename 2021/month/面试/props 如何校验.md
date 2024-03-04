核心使用typeOf 和 instacenof  

利用 构造函数的toString 方法获取 类型字符串


```javascript

props{
  name:{
    type: [Number, Boolean],
  	default: 12
  }
}

```



*const* functionTypeCheckRE = /^\s*function (\w+)/

将type通过 Number.toString().match(functionTypeCheckRE) // 获取到Number 字符串

// 首先 typeof 

// 对象instanceof

// Array.isArray()

```js
function assertType (value: any, type: Function, vm: ?Component): {
  valid: boolean;
  expectedType: string;
} {
  let valid
  const expectedType = getType(type)
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value
    valid = t === expectedType.toLowerCase()
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value)
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value)
  } else {
    try {
      valid = value instanceof type
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid,
    expectedType
  }
}
```

