function Foo() {}

let foo = new Foo()

console.log(foo.__proto__ == Foo.prototype)
let a = Foo.prototype
console.log(a)

console.log(Foo === Foo.prototype.constructor)

console.log(Foo.__proto__ === Function.prototype)
console.log(Foo.prototype.__proto__ === Object.prototype)

console.log(Function.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.__proto__ === Function.prototype)
console.log(Object.prototype.__proto__ === null)

console.log(Object.__proto__ === Function.prototype)
