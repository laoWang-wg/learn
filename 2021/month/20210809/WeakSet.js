const ws = new WeakSet()
let a = { c: 1 }
ws.add(a) // 只能添加对象
let b = { f: 1 }
ws.add(b)
console.log(ws)

a = null

console.log(ws)
console.log(123)
